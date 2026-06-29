import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, MapPin, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Maitama Office Location',
      description: 'Centrally situated in the elite diplomatic hub of Maitama, Abuja.',
      icon: MapPin,
    },
    {
      title: 'Flawlessly Maintained',
      description: 'Meticulous preventative maintenance & comprehensive detailing before every dispatch.',
      icon: ShieldCheck,
    },
    {
      title: '5-Star Quality Service',
      description: 'Dedicated client support ready to respond immediately to corporate or personal demands.',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 border-b border-white/5 relative overflow-hidden">
      {/* Subtle styling grids */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium visual bento block */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600"
                alt="Luxury Car Interior Detailed Dashboard"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-400">Our Fleet Quality</span>
                <p className="font-display font-semibold text-lg text-white mt-1">Impeccable Luxury & Safety Combined</p>
              </div>
            </motion.div>

            {/* Micro Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950/40 border border-white/5 p-5 rounded-xl text-center">
                <div className="font-display font-bold text-3xl text-gold-400">100%</div>
                <div className="font-sans text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Reliability Rate</div>
              </div>
              <div className="bg-slate-950/40 border border-white/5 p-5 rounded-xl text-center">
                <div className="font-display font-bold text-3xl text-white">24/7</div>
                <div className="font-sans text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Client Support</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative content */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1.5 rounded-full inline-block">
                Who We Are
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                About Julivicto Logistics Car Hire & Rental Services
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full" />
              
              <p className="font-sans text-base text-slate-300 leading-relaxed">
                Welcome to <strong className="text-white">Julivicto Logistics Car Hire and Rental Services</strong>, your premier and highly trusted vehicle rental partner based in the heart of Maitama, Abuja, Nigeria. We are passionately dedicated to elevating your travel experience by delivering an elite portfolio of meticulously serviced vehicles, flexible rental packages, and professional logistics management.
              </p>
              
              <p className="font-sans text-base text-slate-300 leading-relaxed">
                Whether you are an executive visiting Abuja for a high-level business summit, a company seeking dynamic long-term corporate vehicle leasing, or an individual searching for dependable airport transfers, we ensure your absolute comfort, premium style, and safety are secured.
              </p>

              {/* Unique Highlights Lists */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 mt-6 border-t border-white/10">
                {highlights.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-5 h-5 text-gold-400 shrink-0" />
                      <h4 className="font-display font-semibold text-sm text-white">{item.title}</h4>
                    </div>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
