import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield, Award, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 pt-20 overflow-hidden"
    >
      {/* Background Cinematic Image with Layered Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_luxury_car_1782757063606.jpg"
          alt="Luxury Fleet in Maitama, Abuja"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse-slow_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Navy/Slate luxury gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent md:to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
      </div>

      {/* Decorative Floating Luxury Accents */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-3xl">
          {/* Tagline / Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-300">
              Maitama's Premier Logistics Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6"
          >
            Reliable Car Hire & <br />
            <span className="gold-gradient-text">Leasing Services</span> in Abuja
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl"
          >
            Providing dependable, comfortable, and affordable vehicle rental and leasing solutions for business, personal travel, airport transfers, corporate transportation, weddings, and special occasions.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5"
          >
            <button
              id="hero-book-now"
              onClick={() => onNavigate('booking')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-slate-950 font-display font-bold text-base shadow-lg shadow-gold-600/20 hover:shadow-gold-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Book a Vehicle</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              id="hero-explore-fleet"
              onClick={() => onNavigate('fleet')}
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 hover:border-gold-400/40 text-white font-display font-bold text-base hover:text-gold-300 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Explore Our Fleet</span>
            </button>
          </motion.div>

          {/* Mini trust features under CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 pt-16 mt-16 border-t border-white/10"
          >
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-sans text-xs sm:text-sm text-slate-400 font-medium">Fully Insured Fleet</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400">
                <Award className="w-4 h-4" />
              </div>
              <span className="font-sans text-xs sm:text-sm text-slate-400 font-medium">Premium Selection</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-sans text-xs sm:text-sm text-slate-400 font-medium">Maitama Quality</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
