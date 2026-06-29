import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-900 border-t border-b border-white/5 relative overflow-hidden">
      {/* Abstract Design Elements */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1.5 rounded-full inline-block">
            Client Testimonials
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-4">
            Words From Our Prestigious Clients
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Testimonial Active Display Module */}
        <div className="relative bg-slate-950 border border-white/10 rounded-2xl p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden">
          {/* Decorative quote icon */}
          <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
            <Quote size={120} className="stroke-[1.5]" />
          </div>

          <div className="min-h-[180px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Stars container */}
                <div className="flex items-center space-x-1">
                  {[...Array(TESTIMONIALS[activeIndex].stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Comment Body */}
                <p className="font-sans text-lg sm:text-xl text-slate-200 font-light leading-relaxed italic">
                  "{TESTIMONIALS[activeIndex].comment}"
                </p>

                {/* Author Name and Location */}
                <div>
                  <h4 className="font-display font-bold text-base text-white">
                    {TESTIMONIALS[activeIndex].author}
                  </h4>
                  <span className="font-sans text-xs text-gold-400 uppercase tracking-widest font-semibold block mt-0.5">
                    {TESTIMONIALS[activeIndex].location}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots and Arrows */}
            <div className="flex items-center justify-between pt-10 mt-10 border-t border-white/5">
              {/* Pagination Dots */}
              <div className="flex items-center space-x-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === idx ? 'w-8 bg-gold-400' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center space-x-3">
                <button
                  id="testimonial-prev-btn"
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-gold-400 transition-colors cursor-pointer bg-slate-900"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  id="testimonial-next-btn"
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-gold-400 transition-colors cursor-pointer bg-slate-900"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
