import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import FleetCtaSection from '../components/FleetCtaSection';
import Testimonials from '../components/Testimonials';
import BookingForm from '../components/BookingForm';
import Contact from '../components/Contact';

export default function HomePage() {
  const location = useLocation();

  // Handle hash scrolling if navigating from another page (e.g., /#about or /#contact)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

  const handleNavigateSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 font-sans selection:bg-yellow-500 selection:text-slate-950 overflow-x-hidden antialiased">
      <main>
        {/* 1. Cinematic Lamborghini Urus Video Hero */}
        <Hero onNavigate={handleNavigateSection} />

        {/* 2. About Us Section: Redefining Executive Mobility in Abuja */}
        <About />

        {/* 3. Our Services Section */}
        <Services />

        {/* 4. Why Choose Julivicto */}
        <WhyChooseUs />

        {/* 5. Prominent Fleet Navigation CTA: Find the Perfect Vehicle for Your Journey -> /fleet */}
        <FleetCtaSection />

        {/* 6. Testimonials Section */}
        <Testimonials />

        {/* 7. Reservation Desk Form */}
        <BookingForm preselectedVehicle="" />

        {/* 8. Contact Section (1 Aguiyi Ironsi Street, Maitama, Abuja) */}
        <Contact />
      </main>
    </div>
  );
}
