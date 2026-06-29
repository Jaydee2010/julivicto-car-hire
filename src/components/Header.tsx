import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Fleet', id: 'fleet' },
    { label: 'Services', id: 'services' },
    { label: 'Why Choose Us', id: 'why-choose-us' },
    { label: 'Booking', id: 'booking' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo"
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-2 text-left focus:outline-none group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Shield className="text-slate-950 w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="block font-display font-bold text-lg leading-none tracking-tight text-white group-hover:text-gold-300 transition-colors">
                JULIVICTO
              </span>
              <span className="block font-sans text-[10px] tracking-widest text-gold-400 font-semibold uppercase mt-0.5">
                Logistics & Car Hire
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-gold-400 bg-white/5 font-semibold shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call to Action Call Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              id="header-phone-cta"
              href="tel:+2347060666882"
              className="flex items-center space-x-2 px-4 py-2 rounded-full border border-gold-500/30 text-gold-400 hover:text-slate-950 hover:bg-gradient-to-r hover:from-gold-300 hover:to-gold-500 font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-gold-500/20"
            >
              <Phone className="w-4 h-4 animate-pulse" />
              <span>0706 066 6882</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          id="mobile-navigation-overlay"
          className="lg:hidden bg-slate-950/98 backdrop-blur-lg border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'text-gold-400 bg-white/10 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-4">
              <a
                id="mobile-header-phone-cta"
                href="tel:+2347060666882"
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 text-slate-950 font-bold shadow-md hover:scale-[1.02] transition-transform"
              >
                <Phone className="w-4 h-4" />
                <span>Call: 0706 066 6882</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
