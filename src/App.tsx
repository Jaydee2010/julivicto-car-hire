/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [preselectedVehicle, setPreselectedVehicle] = useState('');

  // Handle smooth navigation to specific sections
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Custom mapping for 'Why Choose Us' or others if they differ from IDs
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // height of our fixed header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Select vehicle from fleet & scroll to booking desk
  const handleBookVehicle = (vehicleName: string) => {
    setPreselectedVehicle(vehicleName);
    handleNavigate('booking');
  };

  // Monitor user scrolls to update active link in header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // threshold offset

      const sections = ['home', 'fleet', 'services', 'why-choose-us', 'booking', 'testimonials', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-gold-500 selection:text-slate-950 overflow-x-hidden antialiased">
      {/* Dynamic Header */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        {/* Home Section */}
        <Hero onNavigate={handleNavigate} />

        {/* About Section */}
        <About />

        {/* Fleet Section */}
        <Fleet onBookVehicle={handleBookVehicle} />

        {/* Services Section */}
        <Services onSelectService={(serviceName) => {
          // If they click on service card, we can auto fill booking remarks
          setPreselectedVehicle(''); // Reset preselected car
          handleNavigate('booking');
          setTimeout(() => {
            const messageInput = document.getElementById('booking-message') as HTMLTextAreaElement;
            if (messageInput) {
              messageInput.value = `Hello, I am interested in inquiring about your "${serviceName}" package. Please let me know what options are available.`;
              messageInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
          }, 400);
        }} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Booking Form Section */}
        <BookingForm preselectedVehicle={preselectedVehicle} />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Floating WhatsApp Quick-Connect Widget */}
      <WhatsAppButton />

      {/* Footer Sitemap */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
