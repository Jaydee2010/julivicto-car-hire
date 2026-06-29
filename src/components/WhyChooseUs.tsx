import React from 'react';
import { motion } from 'motion/react';
import { FEATURES } from '../data';
import LucideIcon from './LucideIcon';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1.5 rounded-full inline-block">
            The Julivicto Quality
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-4">
            Why Abuja Chooses Our Logistics Services
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mt-4" />
          <p className="font-sans text-base text-slate-400 mt-5 leading-relaxed">
            We hold ourselves to strict execution standards, guaranteeing first-class service from pick-up to destination drop-off.
          </p>
        </div>

        {/* Features Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, index) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/50 border border-white/5 hover:border-gold-400/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                {/* Custom Icon Accent Block */}
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0 group-hover:bg-gold-400 group-hover:text-slate-950 transition-colors duration-500">
                  <LucideIcon name={feat.iconName} className="w-6 h-6 stroke-[1.75]" />
                </div>
                
                {/* Narrative content */}
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
