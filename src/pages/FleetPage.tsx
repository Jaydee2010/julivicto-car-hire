import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { VEHICLES } from '../data';
import { Vehicle } from '../types';
import { 
  Users, 
  Gauge, 
  Snowflake, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Info,
  X,
  Maximize2
} from 'lucide-react';

export default function FleetPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  const categoryParam = searchParams.get('category');
  const [activePhotoModal, setActivePhotoModal] = useState<Vehicle | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    if (categoryParam && ['All', 'SUV', 'Sedan', 'Luxury', 'Economy', 'Van'].includes(categoryParam)) {
      return categoryParam;
    }
    return 'All';
  });

  // Sync category if URL parameter changes
  useEffect(() => {
    if (categoryParam && ['All', 'SUV', 'Sedan', 'Luxury', 'Economy', 'Van'].includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Filter Categories
  const filterTabs = [
    { label: 'All Vehicles', value: 'All' },
    { label: 'SUVs', value: 'SUV' },
    { label: 'Sedans', value: 'Sedan' },
    { label: 'Luxury', value: 'Luxury' },
    { label: 'Vans & Buses', value: 'Van' },
    { label: 'Economy', value: 'Economy' },
  ];

  // Functional filtering
  const filteredVehicles = VEHICLES.filter((vehicle) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'SUV') {
      return vehicle.categories.includes('SUV') || vehicle.type.toLowerCase().includes('suv');
    }
    if (selectedCategory === 'Sedan') {
      return vehicle.categories.includes('Sedan') || vehicle.type.toLowerCase().includes('sedan');
    }
    if (selectedCategory === 'Luxury') {
      return vehicle.categories.includes('Luxury') || vehicle.type.toLowerCase().includes('luxury');
    }
    if (selectedCategory === 'Van') {
      return vehicle.categories.includes('Van') || vehicle.type.toLowerCase().includes('van') || vehicle.type.toLowerCase().includes('mpv');
    }
    if (selectedCategory === 'Economy') {
      return vehicle.categories.includes('Economy') || vehicle.type.toLowerCase().includes('economy');
    }
    return true;
  });

  // Dynamic WhatsApp booking link generator with exact requested format:
  // "Hello Julivicto Logistics, I am interested in renting the [VEHICLE NAME]. I would like to enquire about its availability and booking arrangements."
  const getWhatsAppBookingLink = (vehicleName: string) => {
    const text = `Hello Julivicto Logistics, I am interested in renting the ${vehicleName}. I would like to enquire about its availability and booking arrangements.`;
    return `https://wa.me/2347060666882?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pt-28 pb-20">
      
      {/* 1. Fleet Page Luxury Showroom Header */}
      <section className="relative py-16 sm:py-20 bg-slate-950 border-b border-white/5 overflow-hidden">
        {/* Ambient golden showroom glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-yellow-300">
              Exclusive Luxury Showroom
            </span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Explore Our Fleet
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full mx-auto mt-4" />

          <p className="font-sans text-base sm:text-lg text-slate-300 mt-5 max-w-2xl mx-auto leading-relaxed">
            Discover a carefully selected collection of vehicles designed to deliver comfort, convenience and exceptional driving experiences.
          </p>

          {/* Genuine Inventory Notice Banner */}
          <div className="mt-8 max-w-2xl mx-auto bg-slate-900/80 border border-white/10 rounded-2xl p-4 flex items-center justify-center space-x-3 text-xs text-slate-300 shadow-md">
            <Info className="w-4 h-4 text-yellow-400 shrink-0" />
            <span>
              Actual fleet vehicles shown below stationed in Maitama, Abuja. Tap <strong>Book This Vehicle</strong> for immediate WhatsApp booking.
            </span>
          </div>
        </div>
      </section>

      {/* 2. Fleet Filtering Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Active Service Banner (shown when coming from Our Elite Services) */}
        {serviceParam && (
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-yellow-400/15 via-amber-500/10 to-yellow-400/5 border border-yellow-400/30 rounded-2xl p-5 shadow-lg">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-400/90 block">
                  Selected Service Filter
                </span>
                <span className="text-sm sm:text-base font-bold text-white">
                  Showing vehicles recommended for: <span className="text-yellow-300 font-extrabold">{serviceParam}</span>
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchParams({});
              }}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-yellow-400 hover:text-white transition-colors cursor-pointer self-start sm:self-auto flex items-center space-x-1.5"
            >
              <span>View All Fleet</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                id={`fleet-tab-${tab.value.toLowerCase()}`}
                onClick={() => {
                  setSelectedCategory(tab.value);
                  const nextParams = new URLSearchParams(searchParams);
                  if (tab.value === 'All') {
                    nextParams.delete('category');
                  } else {
                    nextParams.set('category', tab.value);
                  }
                  setSearchParams(nextParams);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === tab.value
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 shadow-md shadow-yellow-500/20 scale-105 font-extrabold'
                    : 'bg-slate-900/90 border border-white/10 text-slate-400 hover:text-white hover:border-yellow-400/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Counter Tag */}
          <div className="text-xs text-slate-400 font-mono">
            Showing <strong className="text-yellow-400">{filteredVehicles.length}</strong> {filteredVehicles.length === 1 ? 'vehicle' : 'vehicles'}
          </div>
        </div>
      </div>

      {/* 3. Vehicle Catalogue Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredVehicles.length === 0 ? (
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-12 text-center max-w-xl mx-auto">
            <h3 className="text-xl font-display font-bold text-white mb-2">No Vehicles in this Category</h3>
            <p className="text-sm text-slate-400 mb-6">
              Our current fleet focuses on executive luxury sedans, VIP SUVs, and prestige MPVs. Contact our concierge for specialized fleet requests.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchParams({});
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer"
            >
              View Full Fleet
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredVehicles.map((vehicle, index) => (
                <motion.div
                  layout
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-900/90 rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-400/40 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/5 group flex flex-col justify-between transition-all duration-300"
                >
                  {/* Vehicle Photograph Container - Appropriate Fitting & No Distortion */}
                  <div className="relative h-72 sm:h-80 bg-slate-950 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="eager"
                      decoding="async"
                    />
                    
                    {/* Subtle Gradient Shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md border border-white/10 px-3.5 py-1 rounded-full text-[11px] font-bold text-yellow-400 uppercase tracking-widest shadow-md">
                      {vehicle.type}
                    </div>

                    {/* Expand Photo Zoom Button */}
                    <button
                      onClick={() => setActivePhotoModal(vehicle)}
                      title="View Full Photograph"
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-slate-300 hover:text-yellow-400 hover:bg-slate-900 flex items-center justify-center transition-colors cursor-pointer shadow-md opacity-0 group-hover:opacity-100"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card Body & Information */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Vehicle Name */}
                      <h3 className="font-display font-extrabold text-2xl text-white tracking-tight group-hover:text-yellow-300 transition-colors">
                        {vehicle.name}
                      </h3>
                      
                      {/* Short Professional Description */}
                      <p className="font-sans text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                        {vehicle.description}
                      </p>

                      {/* Technical Specifications Bar */}
                      <div className="grid grid-cols-3 gap-3 py-4 my-5 border-t border-b border-white/10 text-center bg-slate-950/40 rounded-2xl">
                        <div className="flex flex-col items-center">
                          <Users className="w-4 h-4 text-yellow-400 mb-1" />
                          <span className="font-sans text-xs text-slate-200 font-semibold">
                            {vehicle.seats} Seats
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Gauge className="w-4 h-4 text-yellow-400 mb-1" />
                          <span className="font-sans text-xs text-slate-200 font-semibold">
                            {vehicle.transmission}
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Snowflake className="w-4 h-4 text-yellow-400 mb-1" />
                          <span className="font-sans text-xs text-slate-200 font-semibold">
                            {vehicle.ac ? 'Climate A/C' : 'Standard'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Prominent Pricing & Chat on WhatsApp Button */}
                    <div className="pt-2 mt-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/10">
                      <div>
                        <span className="block font-sans text-[10px] text-yellow-400/90 uppercase tracking-widest font-bold">
                          Rental Price
                        </span>
                        <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                          {vehicle.price}
                        </span>
                      </div>

                      {/* Clearly Visible Book This Vehicle / WhatsApp Button */}
                      <a
                        id={`book-vehicle-${vehicle.id}`}
                        href={getWhatsAppBookingLink(vehicle.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-white font-display font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:scale-[1.03] transition-all flex items-center justify-center space-x-2 cursor-pointer shrink-0"
                      >
                        <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                        <span>Book This Vehicle</span>
                      </a>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* 4. Full-Size Image Preview Modal */}
      {activePhotoModal && (
        <div 
          onClick={() => setActivePhotoModal(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl max-h-[90vh] bg-slate-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-slate-900/80">
              <span className="font-display font-bold text-lg text-white">
                {activePhotoModal.name} — <span className="text-yellow-400">{activePhotoModal.price}</span>
              </span>
              <button
                onClick={() => setActivePhotoModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-2 overflow-auto max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={activePhotoModal.image}
                alt={activePhotoModal.name}
                className="max-w-full max-h-[65vh] object-contain rounded-xl"
              />
            </div>
            <div className="p-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/80">
              <p className="text-xs text-slate-300 max-w-md">
                {activePhotoModal.description}
              </p>
              <a
                href={getWhatsAppBookingLink(activePhotoModal.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book This Vehicle</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 5. Fleet Page Bottom Contact & Custom Quote Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-3.5 py-1.5 rounded-full inline-block">
              Custom Fleet Reservations
            </span>

            <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Need a Custom Fleet or Long-Term Corporate Quote?
            </h3>

            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              Contact our Maitama logistics desk for armored vehicle convoys, long-term corporate leasing discounts, or specific VIP airport runway meet-and-greets.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/2347060666882?text=Hello%20Julivicto%20Logistics%2C%20I%20have%20a%20custom%20fleet%20inquiry%20regarding%20vehicle%20availability%20and%20leasing."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-transform hover:scale-105 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp (0706 066 6882)</span>
              </a>

              <a
                href="tel:+2347060666882"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950 border border-white/15 hover:border-yellow-400/40 text-white font-display font-bold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 hover:bg-slate-900 transition-colors"
              >
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>Call Hotline: 0706 066 6882</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
