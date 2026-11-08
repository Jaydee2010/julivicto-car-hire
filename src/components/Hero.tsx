import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const isTransitioningRef = useRef<boolean>(false);

  // Crossfade duration in seconds before video ends
  const CROSSFADE_TRIGGER_TIME = 1.2;

  // Handle seamless switch between dual video buffers
  const handleTimeUpdate = useCallback((currentVideoNum: 1 | 2) => {
    const currentVideo = currentVideoNum === 1 ? video1Ref.current : video2Ref.current;
    const nextVideo = currentVideoNum === 1 ? video2Ref.current : video1Ref.current;

    if (!currentVideo || !nextVideo || isTransitioningRef.current) return;

    if (currentVideo.duration && currentVideo.currentTime >= currentVideo.duration - CROSSFADE_TRIGGER_TIME) {
      isTransitioningRef.current = true;
      const nextNum = currentVideoNum === 1 ? 2 : 1;

      // Start the next video from the beginning before crossfading
      nextVideo.currentTime = 0;
      const playPromise = nextVideo.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setActiveVideo(nextNum);

            // Once crossfade completes, rewind and pause the previous video
            setTimeout(() => {
              if (currentVideo) {
                currentVideo.pause();
                currentVideo.currentTime = 0;
              }
              isTransitioningRef.current = false;
            }, 1100);
          })
          .catch(() => {
            isTransitioningRef.current = false;
          });
      } else {
        setActiveVideo(nextNum);
        setTimeout(() => {
          if (currentVideo) {
            currentVideo.pause();
            currentVideo.currentTime = 0;
          }
          isTransitioningRef.current = false;
        }, 1100);
      }
    }
  }, []);

  // Initialize videos and ensure autoplay without audio block
  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;

    if (v1) {
      v1.muted = true;
      v1.playsInline = true;
      const p1 = v1.play();
      if (p1 !== undefined) {
        p1.catch(() => {
          const handleFirstInteraction = () => {
            if (v1) v1.play().catch(() => {});
            window.removeEventListener('touchstart', handleFirstInteraction);
            window.removeEventListener('click', handleFirstInteraction);
          };
          window.addEventListener('touchstart', handleFirstInteraction, { once: true });
          window.addEventListener('click', handleFirstInteraction, { once: true });
        });
      }
    }

    if (v2) {
      v2.muted = true;
      v2.playsInline = true;
    }

    // Resume video playback if user tabs out and tabs back in
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        const active = activeVideo === 1 ? v1 : v2;
        if (active && active.paused) {
          active.play().catch(() => {});
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeVideo]);

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] bg-slate-950 overflow-hidden flex items-end justify-center"
    >
      {/* 
        Full-bleed Cinema Background Video Engine
        - Dual-video crossfade buffer: eliminates browser loop pauses, black flashes, and hitching cracks
        - Watermarks removed, faststart H.264 MP4 with hardware acceleration
      */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-slate-950">
        
        {/* Video Buffer 1 */}
        <video
          ref={video1Ref}
          muted
          playsInline
          preload="auto"
          onTimeUpdate={() => {
            if (activeVideo === 1) handleTimeUpdate(1);
          }}
          onEnded={() => {
            if (activeVideo === 1) handleTimeUpdate(1);
          }}
          poster="/assets/aistudio/lamborghini_urus_poster.jpg"
          className={`absolute inset-0 w-full h-full object-cover object-center scale-[1.01] transform-gpu will-change-opacity transition-opacity duration-1000 ease-in-out ${
            activeVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <source src="/assets/aistudio/lamborghini_urus_hero_clean.mp4" type="video/mp4" />
        </video>

        {/* Video Buffer 2 (Seamless loop partner) */}
        <video
          ref={video2Ref}
          muted
          playsInline
          preload="auto"
          onTimeUpdate={() => {
            if (activeVideo === 2) handleTimeUpdate(2);
          }}
          onEnded={() => {
            if (activeVideo === 2) handleTimeUpdate(2);
          }}
          poster="/assets/aistudio/lamborghini_urus_poster.jpg"
          className={`absolute inset-0 w-full h-full object-cover object-center scale-[1.01] transform-gpu will-change-opacity transition-opacity duration-1000 ease-in-out ${
            activeVideo === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <source src="/assets/aistudio/lamborghini_urus_hero_clean.mp4" type="video/mp4" />
        </video>

        {/* Subtle, luxury cinematic gradient overlays for depth and legibility */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-slate-950/20 via-transparent to-slate-950/20 pointer-events-none" />
        
        {/* Soft atmospheric bottom fade transitioning into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-20 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />
      </div>

      {/* Minimal luxury scroll indicator anchored at the bottom */}
      <div className="relative z-30 pb-8 flex flex-col items-center pointer-events-auto">
        <button
          onClick={() => onNavigate('about')}
          className="group flex flex-col items-center space-y-2 text-slate-400 hover:text-white transition-colors duration-300 focus:outline-none cursor-pointer"
          aria-label="Scroll to explore"
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-semibold text-slate-400/80 group-hover:text-yellow-400 transition-colors">
            Explore
          </span>
          <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-yellow-400/40 flex items-center justify-center transition-all bg-slate-950/30 backdrop-blur-sm shadow-lg">
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-yellow-400 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
}
