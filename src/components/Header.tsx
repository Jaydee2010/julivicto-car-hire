import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isFleetPage = location.pathname === '/fleet';

  const navItems = [
    { label: 'Home', path: '/', isSection: false },
    { label: 'About Us', path: '/#about', isSection: true, sectionId: 'about' },
    { label: 'Our Fleet', path: '/fleet', isSection: false },
    { label: 'Contact', path: '/#contact', isSection: true, sectionId: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsOpen(false);

    if (item.path === '/fleet') {
      navigate('/fleet');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item.path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        window.scrollTo({ top: 0 });
      }
      return;
    }

    if (item.isSection && item.sectionId) {
      if (location.pathname === '/') {
        const el = document.getElementById(item.sectionId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      } else {
        navigate(`/#${item.sectionId}`);
      }
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isFleetPage
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5'
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            id="brand-logo"
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-3 text-left focus:outline-none group cursor-pointer"
          >
            <img
              src="/assets/aistudio/file_000000008d908210b0c7f4b9f8e49cd4_1__61f09cec.png"
              alt="Julivicto Car Rentals"
              className="h-10 sm:h-12 w-auto object-contain rounded-md shadow-md group-hover:scale-105 transition-transform duration-300"
            />
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = item.path === '/fleet' 
                ? isFleetPage 
                : (!isFleetPage && item.path === '/');

              return (
                <button
                  key={item.label}
                  id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleNavClick(item)}
                  className={`px-4 py-2 rounded-full text-xs lg:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-yellow-400 bg-white/5 border border-yellow-400/20 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Phone Hotline Call Action */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="header-phone-cta"
              href="tel:+2347060666882"
              className="flex items-center space-x-2 px-4 py-2 rounded-full border border-yellow-500/40 text-yellow-400 hover:text-slate-950 hover:bg-gradient-to-r hover:from-yellow-300 hover:to-amber-500 font-semibold text-xs lg:text-sm transition-all duration-300 shadow-md hover:shadow-yellow-500/20"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>0706 066 6882</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6 text-yellow-400" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          id="mobile-navigation-overlay"
          className="md:hidden bg-slate-950/98 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-yellow-400 hover:bg-white/5 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <a
              href="tel:+2347060666882"
              className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 0706 066 6882</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
