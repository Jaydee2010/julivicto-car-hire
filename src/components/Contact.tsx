import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-white/5 relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3.5 py-1.5 rounded-full inline-block">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-4">
            Contact Our Dispatch Office
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address card */}
              <div className="bg-slate-950 border border-white/5 hover:border-gold-400/20 p-6 rounded-2xl flex items-start space-x-4 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Address</h4>
                  <p className="font-sans text-sm text-slate-300 mt-2 leading-relaxed">
                    1 Aguiyi Ironsi Street,<br />
                    Maitama,<br />
                    Abuja 900271, Federal Capital Territory,<br />
                    Nigeria
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="bg-slate-950 border border-white/5 hover:border-gold-400/20 p-6 rounded-2xl flex items-start space-x-4 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Hotlines</h4>
                  <p className="font-sans text-sm text-slate-300 mt-2 leading-relaxed">
                    <a href="tel:+2347060666882" className="hover:text-gold-400 transition-colors font-semibold">
                      0706 066 6882
                    </a>
                  </p>
                  <p className="font-sans text-xs text-slate-500 mt-1 font-medium">Available for urgent custom calls & VIP logistics</p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-slate-950 border border-white/5 hover:border-gold-400/20 p-6 rounded-2xl flex items-start space-x-4 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 text-gold-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Business Hours</h4>
                  <p className="font-sans text-sm text-slate-300 mt-2 leading-relaxed font-semibold">
                    Monday – Sunday<br />
                    8:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Micro security assurance info */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl flex items-center space-x-3 mt-6 lg:mt-0">
              <ShieldCheck className="w-8 h-8 text-gold-400 shrink-0" />
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Our drivers are thoroughly vetted and trained in executive security tactics to ensure total peace of mind for diplomats and guests.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 bg-slate-950 border border-white/10 rounded-2xl overflow-hidden h-[380px] sm:h-[450px] shadow-2xl relative">
            <iframe
              id="google-maps-embed"
              title="Julivicto Logistics Maitama Abuja Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.816301323863!2d7.491295275841646!3d9.080536788225575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a4f5f54da53%3A0xe210f0f5b99e710b!2s1%20Aguiyi%20Ironsi%20St%2C%20Maitama%2C%20Abuja%20900271%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1782757134888!5m2!1sen!2sng"
              className="w-full h-full border-0 grayscale opacity-80 hover:opacity-100 transition-opacity duration-500"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Elegant overlay badge */}
            <div className="absolute bottom-4 left-4 bg-slate-950/90 border border-gold-400/20 px-4 py-2 rounded-xl text-xs font-sans text-white font-medium shadow-md">
              📍 Maitama, Abuja Office Location
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
