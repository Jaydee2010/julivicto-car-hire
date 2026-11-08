import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  const commitments = [
    {
      title: 'Reliable Car Hire & Short-Term Rentals',
      description: 'Pristine, meticulously prepared sedans and SUVs ready for business travel, diplomatic missions, and personal VIP movement.',
      icon: ShieldCheck,
    },
    {
      title: 'Tailored Executive Leasing',
      description: 'Structured corporate lease solutions providing companies and expatriates with flexible, dependable fleet arrangements.',
      icon: Award,
    },
    {
      title: 'Maitama, Abuja Central Dispatch',
      description: 'Strategically positioned in Maitama to guarantee rapid response times, immaculate detailing, and professional chauffeurs.',
      icon: MapPin,
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 border-b border-white/5 relative overflow-hidden">
      {/* Subtle luxury ambient styling */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Bento */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
            >
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
                alt="Executive Luxury Vehicle Interior"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-yellow-400">
                  First-Class Fleet Standards
                </span>
                <p className="font-display font-semibold text-lg text-white mt-1">
                  Impeccable Luxury & Safety Combined
                </p>
              </div>
            </motion.div>

            {/* Micro Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950/60 border border-white/5 p-5 rounded-2xl text-center">
                <div className="font-display font-extrabold text-3xl text-yellow-400">100%</div>
                <div className="font-sans text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                  Reliability Rate
                </div>
              </div>
              <div className="bg-slate-950/60 border border-white/5 p-5 rounded-2xl text-center">
                <div className="font-display font-extrabold text-3xl text-white">24/7</div>
                <div className="font-sans text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                  Client Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center space-x-3 mb-2">
              <img
                src="/assets/aistudio/file_000000008d908210b0c7f4b9f8e49cd4_1__61f09cec.png"
                alt="Julivicto Car Rentals"
                className="h-10 sm:h-12 w-auto object-contain rounded-md shadow-md"
              />
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-3.5 py-1.5 rounded-full inline-block">
                Company Profile
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
              Redefining Executive Mobility in Abuja
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full" />
            
            <p className="font-sans text-base text-slate-300 leading-relaxed pt-2">
              Welcome to <strong className="text-white">Julivicto Logistics Car Hire and Rental Services</strong>, your premier and trusted executive transportation partner headquartered in Maitama, Abuja. We are dedicated to elevating corporate and personal travel through an exceptional portfolio of late-model luxury vehicles, tailored leasing contracts, and discreet chauffeur services.
            </p>
            
            <p className="font-sans text-base text-slate-300 leading-relaxed">
              Whether you are an executive attending high-level diplomatic meetings, an organization seeking reliable long-term corporate vehicle leasing, or a traveler requiring punctual airport transfers to Nnamdi Azikiwe International Airport, we ensure your journey is marked by absolute comfort, dependability, and professional customer care.
            </p>

            {/* Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 mt-6 border-t border-white/10">
              {commitments.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-5 h-5 text-yellow-400 shrink-0" />
                    <h4 className="font-display font-bold text-sm text-white">{item.title}</h4>
                  </div>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
