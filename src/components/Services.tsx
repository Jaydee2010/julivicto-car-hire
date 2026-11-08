import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../data';
import { Service } from '../types';
import LucideIcon from './LucideIcon';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const navigate = useNavigate();

  const handleServiceClick = (service: Service) => {
    if (onSelectService) {
      onSelectService(service.title);
    }

    // Mapping service to recommended fleet category
    const categoryMap: Record<string, string> = {
      'luxury-rentals': 'Luxury',
      'chauffeur-services': 'Luxury',
      'corporate-leasing': 'SUV',
      'airport-transfers': 'All',
      'long-term-leasing': 'All',
      'special-occasions': 'Luxury'
    };

    const targetCategory = categoryMap[service.id] || 'All';

    // Navigate directly to the separate /fleet page
    navigate(`/fleet?service=${encodeURIComponent(service.title)}&category=${targetCategory}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Visual styling accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-3.5 py-1.5 rounded-full inline-block">
            Our Elite Services
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-4">
            Professional Logistics & Hire Solutions
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full mx-auto mt-4" />
          <p className="font-sans text-base text-slate-400 mt-5 leading-relaxed">
            Julivicto Logistics provides premium transport and car rental models tailored to the exact requirements of business and corporate clients in Abuja. Tap any service to explore our matched fleet vehicles.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleServiceClick(service)}
              className="group relative bg-slate-900 border border-white/5 hover:border-yellow-400/40 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              {/* Gold Top Hover Highlight Edge */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-400 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

              <div>
                {/* Premium Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:text-slate-950 transition-all duration-500 shadow-md">
                  <LucideIcon name={service.iconName} className="w-7 h-7 stroke-[1.75]" />
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="font-sans text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Bottom Quick Action link */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="font-display font-semibold text-xs text-yellow-400 uppercase tracking-wider group-hover:text-white transition-colors flex items-center space-x-1.5">
                  <span>View Fleet Vehicles</span>
                  <LucideIcon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-slate-950 text-slate-400 transition-colors duration-300">
                  <LucideIcon name="ChevronRight" size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
