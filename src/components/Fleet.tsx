import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VEHICLES } from '../data';
import { Users, Sliders, Check, HelpCircle, Snowflake, Gauge } from 'lucide-react';

interface FleetProps {
  onBookVehicle: (vehicleName: string) => void;
}

export default function Fleet({ onBookVehicle }: FleetProps) {
  const [filter, setFilter] = useState<'All' | 'Sedan' | 'SUV' | 'Bus'>('All');

  const categories = [
    { label: 'All Vehicles', value: 'All' },
    { label: 'Executive Sedans', value: 'Sedan' },
    { label: 'Luxury SUVs & Crossovers', value: 'SUV' },
    { label: 'Group Shuttle Buses', value: 'Bus' },
  ] as const;

  const filteredVehicles = VEHICLES.filter((vehicle) => {
    if (filter === 'All') return true;
    if (filter === 'Sedan') return vehicle.type.toLowerCase().includes('sedan');
    if (filter === 'SUV') return vehicle.type.toLowerCase().includes('suv') || vehicle.type.toLowerCase().includes('crossover');
    if (filter === 'Bus') return vehicle.type.toLowerCase().includes('shuttle') || vehicle.type.toLowerCase().includes('bus');
    return true;
  });

  return (
    <section id="fleet" className="py-24 bg-slate-900 border-t border-b border-white/5 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1.5 rounded-full inline-block">
            Our Premium Fleet
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-4">
            Select Your Executive Vehicle
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mt-4" />
          <p className="font-sans text-base text-slate-400 mt-5 leading-relaxed">
            Meticulously detailed luxury and corporate vehicles stationed in Abuja. All bookings include optional professional security chauffeurs.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`fleet-filter-${cat.value.toLowerCase()}`}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filter === cat.value
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-slate-950 shadow-md shadow-gold-500/15'
                  : 'bg-slate-950 border border-white/10 text-slate-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={vehicle.id}
                className="bg-slate-950 rounded-2xl overflow-hidden border border-white/10 hover:border-gold-400/30 shadow-xl group flex flex-col justify-between"
              >
                {/* Vehicle Image with tag */}
                <div className="relative overflow-hidden h-52 sm:h-56 bg-slate-900 flex items-center justify-center">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-semibold text-gold-400 uppercase tracking-widest">
                    {vehicle.type}
                  </div>
                </div>

                {/* Info and Spec Grid */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white tracking-tight mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed mb-5 line-clamp-2">
                      {vehicle.description}
                    </p>

                    {/* Technical Specification Icons */}
                    <div className="grid grid-cols-3 gap-3 py-4 border-t border-b border-white/5 mb-6 text-center">
                      <div className="flex flex-col items-center">
                        <Users className="w-4 h-4 text-gold-400 mb-1" />
                        <span className="font-sans text-[11px] text-slate-400 font-medium">
                          {vehicle.seats} Seats
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Gauge className="w-4 h-4 text-gold-400 mb-1" />
                        <span className="font-sans text-[11px] text-slate-400 font-medium">
                          {vehicle.transmission}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Snowflake className="w-4 h-4 text-gold-400 mb-1" />
                        <span className="font-sans text-[11px] text-slate-400 font-medium">
                          {vehicle.ac ? 'Climate A/C' : 'Fan Only'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing row & Booking button */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="block font-sans text-[10px] text-yellow-400/90 uppercase tracking-widest font-semibold">
                        Rental Price
                      </span>
                      <span className="font-display font-bold text-lg text-white">
                        {vehicle.price}
                      </span>
                    </div>

                    <button
                      id={`book-vehicle-${vehicle.id}`}
                      onClick={() => onBookVehicle(vehicle.name)}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-slate-950 font-display font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.03] transition-all cursor-pointer"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
