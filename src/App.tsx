/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import FleetPage from './pages/FleetPage';

// Scroll to top automatically when route changes unless hash navigation is used
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-yellow-500 selection:text-slate-950 overflow-x-hidden antialiased flex flex-col justify-between">
        <ScrollToTop />

        {/* Global Consistent Navigation Bar */}
        <Header />

        {/* Real Two-Page Routing: / (Homepage) and /fleet (Fleet Page) */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Floating WhatsApp Quick-Connect Widget */}
        <WhatsAppButton />

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
