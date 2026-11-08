import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Compass, Key } from 'lucide-react';

export default function FleetCtaSection() {
  const navigate = useNavigate();

  const handleExploreFleet = () => {
    navigate('/fleet');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-b border-white/5 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-yellow-500/20 rounded-3xl p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle gold line accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headline and Call-to-Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 rounded-full">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-yellow-300">
                  Premium Vehicle Showcase
                </span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
                Find the Perfect Vehicle for Your Journey
              </h2>

              <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                From executive SUVs to comfortable everyday vehicles, explore our collection and find the right vehicle for your next journey.
              </p>

              <div className="pt-2">
                <button
                  id="home-explore-fleet-cta-btn"
                  onClick={handleExploreFleet}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-display font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-[1.03] transition-all flex items-center space-x-3 cursor-pointer group"
                >
                  <span>EXPLORE OUR FLEET</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>100% Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Maitama Dispatch</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Key className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>Chauffeur or Self-Drive</span>
                </div>
              </div>
            </div>

            {/* Right Column: Fleet Sneak Peek Bento */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div 
                onClick={handleExploreFleet} 
                className="bg-slate-900/80 border border-white/10 hover:border-yellow-400/40 p-4 rounded-2xl group transition-all duration-300 cursor-pointer shadow-lg"
              >
                <div className="h-28 rounded-xl overflow-hidden mb-3 bg-slate-950">
                  <img
                    src="/assets/aistudio/ChatGPT_Image_Nov_8__2026__04_48_16_AM_6568d5c2.jpg"
                    alt="Mercedes-Benz Sprinter 3500 XD"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <h4 className="font-display font-bold text-sm text-white group-hover:text-yellow-400 transition-colors">
                  Sprinter 3500 XD
                </h4>
                <p className="font-sans text-[11px] text-yellow-400/90 font-bold mt-0.5">₦1,500,000</p>
              </div>

              <div 
                onClick={handleExploreFleet} 
                className="bg-slate-900/80 border border-white/10 hover:border-yellow-400/40 p-4 rounded-2xl group transition-all duration-300 cursor-pointer shadow-lg"
              >
                <div className="h-28 rounded-xl overflow-hidden mb-3 bg-slate-950">
                  <img
                    src="/assets/aistudio/ChatGPT_Image_Nov_8__2026__04_48_23_AM_542cdbc9.jpg"
                    alt="Toyota Granvia Luxury Van"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <h4 className="font-display font-bold text-sm text-white group-hover:text-yellow-400 transition-colors">
                  Toyota Granvia
                </h4>
                <p className="font-sans text-[11px] text-yellow-400/90 font-bold mt-0.5">₦1,000,000</p>
              </div>

              <div 
                onClick={handleExploreFleet} 
                className="bg-slate-900/80 border border-white/10 hover:border-yellow-400/40 p-4 rounded-2xl group transition-all duration-300 cursor-pointer shadow-lg"
              >
                <div className="h-28 rounded-xl overflow-hidden mb-3 bg-slate-950">
                  <img
                    src="/assets/aistudio/ChatGPT_Image_Nov_8__2026__04_48_47_AM_f41ce798.jpg"
                    alt="Lexus LX 570"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <h4 className="font-display font-bold text-sm text-white group-hover:text-yellow-400 transition-colors">
                  Lexus LX 570
                </h4>
                <p className="font-sans text-[11px] text-yellow-400/90 font-bold mt-0.5">₦1,500,000</p>
              </div>

              <div 
                onClick={handleExploreFleet} 
                className="bg-slate-900/80 border border-white/10 hover:border-yellow-400/40 p-4 rounded-2xl group transition-all duration-300 cursor-pointer shadow-lg"
              >
                <div className="h-28 rounded-xl overflow-hidden mb-3 bg-slate-950">
                  <img
                    src="/assets/aistudio/ChatGPT_Image_Nov_8__2026__04_49_15_AM_3f697f22.jpg"
                    alt="Toyota Land Cruiser Prado"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <h4 className="font-display font-bold text-sm text-white group-hover:text-yellow-400 transition-colors">
                  Land Cruiser Prado
                </h4>
                <p className="font-sans text-[11px] text-yellow-400/90 font-bold mt-0.5">₦150,000</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
