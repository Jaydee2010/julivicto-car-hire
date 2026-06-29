import React from 'react';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400">
      
      {/* Upper Footer: Branding & Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Brand presentation */}
          <div className="md:col-span-4 space-y-5">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center space-x-2 text-left focus:outline-none group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <Shield className="text-slate-950 w-4.5 h-4.5 stroke-[2.5]" />
              </div>
              <div>
                <span className="block font-display font-bold text-base leading-none tracking-tight text-white group-hover:text-gold-300 transition-colors">
                  JULIVICTO
                </span>
                <span className="block font-sans text-[9px] tracking-widest text-gold-400 font-semibold uppercase mt-0.5">
                  Logistics & Car Hire
                </span>
              </div>
            </button>

            <p className="font-sans text-xs leading-relaxed text-slate-400">
              Maitama's elite car leasing and executive logistics services. Delivering late-model premium fleets, security transport options, and absolute comfort throughout Abuja, Nigeria.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-400 hover:text-slate-950 flex items-center justify-center text-slate-400 transition-colors duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-400 hover:text-slate-950 flex items-center justify-center text-slate-400 transition-colors duration-300">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-400 hover:text-slate-950 flex items-center justify-center text-slate-400 transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-400 hover:text-slate-950 flex items-center justify-center text-slate-400 transition-colors duration-300">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2.5">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-gold-400 transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('fleet')} className="hover:text-gold-400 transition-colors cursor-pointer text-left">
                  Explore Fleet
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-gold-400 transition-colors cursor-pointer text-left">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('why-choose-us')} className="hover:text-gold-400 transition-colors cursor-pointer text-left">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('testimonials')} className="hover:text-gold-400 transition-colors cursor-pointer text-left">
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services sitemap */}
          <div className="md:col-span-2.5">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-5">
              Our Services
            </h4>
            <ul className="space-y-3 text-xs">
              <li>Self-Drive Car Hire</li>
              <li>Chauffeur Services</li>
              <li>Corporate Car Leasing</li>
              <li>Airport Transfers</li>
              <li>Wedding Transportation</li>
              <li>Long-Term Leasing</li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinate */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-5">
              Contact Information
            </h4>
            <ul className="space-y-3.5 text-xs leading-relaxed">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>1 Aguiyi Ironsi Street, Maitama, Abuja 900271, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+2347060666882" className="hover:text-gold-400 transition-colors">0706 066 6882</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:info@julivictologistics.com" className="hover:text-gold-400 transition-colors">info@julivictologistics.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Copyright Panel */}
      <div className="border-t border-white/5 bg-slate-950 py-6 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Julivicto Logistics Car Hire and Rental Services. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Use</a>
            <span className="text-white/10">|</span>
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
