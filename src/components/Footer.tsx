import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    if (path.startsWith('/#')) {
      navigate(path);
      const id = path.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleServiceNav = (serviceTitle: string, category: string) => {
    navigate(`/fleet?service=${encodeURIComponent(serviceTitle)}&category=${category}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 relative overflow-hidden">
      {/* Subtle ambient golden glow in footer */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand presentation (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => handleNav('/')}
              className="flex items-center space-x-3 text-left focus:outline-none group cursor-pointer"
            >
              <img
                src="/assets/aistudio/file_000000008d908210b0c7f4b9f8e49cd4_1__61f09cec.png"
                alt="Julivicto Car Rentals"
                className="h-14 w-auto object-contain rounded-md shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </button>

            <p className="font-sans text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm">
              Maitama's premier car hire and executive vehicle leasing company. Delivering pristine luxury fleets, VIP security convoys, and uncompromising dependability throughout Abuja, Nigeria.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-1">
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-slate-950 flex items-center justify-center text-slate-400 transition-all duration-300 border border-white/5 hover:border-yellow-400"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-slate-950 flex items-center justify-center text-slate-400 transition-all duration-300 border border-white/5 hover:border-yellow-400"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-slate-950 flex items-center justify-center text-slate-400 transition-all duration-300 border border-white/5 hover:border-yellow-400"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-slate-950 flex items-center justify-center text-slate-400 transition-all duration-300 border border-white/5 hover:border-yellow-400"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => handleNav('/')} 
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-left flex items-center space-x-1.5 group"
                >
                  <span className="text-yellow-400/60 group-hover:text-yellow-400 transition-colors">›</span>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/#about')} 
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-left flex items-center space-x-1.5 group"
                >
                  <span className="text-yellow-400/60 group-hover:text-yellow-400 transition-colors">›</span>
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/fleet')} 
                  className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors cursor-pointer text-left flex items-center space-x-1.5 group"
                >
                  <span className="text-yellow-400">›</span>
                  <span>Our Fleet</span>
                  <span className="text-[10px] bg-yellow-400/20 text-yellow-300 px-1.5 py-0.5 rounded font-mono uppercase">Catalogue</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/#services')} 
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-left flex items-center space-x-1.5 group"
                >
                  <span className="text-yellow-400/60 group-hover:text-yellow-400 transition-colors">›</span>
                  <span>Our Services</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/#why-choose-us')} 
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-left flex items-center space-x-1.5 group"
                >
                  <span className="text-yellow-400/60 group-hover:text-yellow-400 transition-colors">›</span>
                  <span>Why Choose Us</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('/#contact')} 
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-left flex items-center space-x-1.5 group"
                >
                  <span className="text-yellow-400/60 group-hover:text-yellow-400 transition-colors">›</span>
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Executive Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3">
              Executive Services
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => handleServiceNav('Luxury Car Rentals', 'Luxury')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-left flex items-center space-x-1.5 group"
                >
                  <span className="text-yellow-400/60 group-hover:text-yellow-400 transition-colors">›</span>
                  <span>Luxury Car Rentals</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceNav('Executive Chauffeur Services', 'Luxury')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-left flex items-center space-x-1.5 group"
                >
                  <span className="text-yellow-400/60 group-hover:text-yellow-400 transition-colors">›</span>
                  <span>Executive Chauffeur Services</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceNav('Corporate Vehicle Leasing', 'SUV')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-left flex items-center space-x-1.5 group"
                >
                  <span className="text-yellow-400/60 group-hover:text-yellow-400 transition-colors">›</span>
                  <span>Corporate Vehicle Leasing</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceNav('Airport Runway Transfers', 'All')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-left flex items-center space-x-1.5 group"
                >
                  <span className="text-yellow-400/60 group-hover:text-yellow-400 transition-colors">›</span>
                  <span>Airport Runway Transfers</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceNav('Long-Term Fleet Leasing', 'All')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-left flex items-center space-x-1.5 group"
                >
                  <span className="text-yellow-400/60 group-hover:text-yellow-400 transition-colors">›</span>
                  <span>Long-Term Fleet Leasing</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceNav('Special Occasion Transportation', 'Luxury')}
                  className="hover:text-yellow-400 transition-colors cursor-pointer text-left flex items-center space-x-1.5 group"
                >
                  <span className="text-yellow-400/60 group-hover:text-yellow-400 transition-colors">›</span>
                  <span>Special Occasion Transportation</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Maitama Dispatch Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3">
              Maitama Dispatch Office
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm leading-relaxed">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-1" />
                <span className="text-slate-300">
                  1 Aguiyi Ironsi Street, Maitama, Abuja 900271, Federal Capital Territory, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <a 
                  href="tel:+2347060666882" 
                  className="hover:text-yellow-400 text-white font-semibold transition-colors"
                >
                  0706 066 6882
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/2347060666882" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-emerald-300 font-semibold transition-colors"
                >
                  WhatsApp: 0706 066 6882
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <a 
                  href="mailto:info@julivictologistics.com" 
                  className="hover:text-yellow-400 transition-colors text-slate-300"
                >
                  info@julivictologistics.com
                </a>
              </li>
              <li className="flex items-center space-x-3 pt-1">
                <Clock className="w-4 h-4 text-yellow-400/80 shrink-0" />
                <span className="text-xs text-yellow-300/90 font-medium">
                  24/7 Priority VIP Dispatch
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Copyright Panel */}
      <div className="border-t border-white/10 bg-slate-950/80 py-6 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400">
            © {currentYear} Julivicto Logistics Car Hire and Rental Services. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400 transition-colors text-slate-400">Terms of Service</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-yellow-400 transition-colors text-slate-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
