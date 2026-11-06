'use client';

import React, { useEffect, useState } from 'react';
import { useNavigationTransition } from './NavigationTransitionContext';

export default function InitialLoader() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [initialFading, setInitialFading] = useState(false);
  const { isTransitioning } = useNavigationTransition();

  // Route transition fade state
  const [routeFading, setRouteFading] = useState(false);
  const [showRouteLoader, setShowRouteLoader] = useState(false);

  // 1. Initial Page Load / Refresh Handling
  useEffect(() => {
    // Preload critical studio imagery in the background
    const criticalImages = [
      'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80',
    ];

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Animate loader cleanly on initial site arrival
    const fadeTimer = setTimeout(() => {
      setInitialFading(true);
      const exitTimer = setTimeout(() => {
        setInitialLoading(false);
      }, 400);
      return () => clearTimeout(exitTimer);
    }, 1300);

    return () => clearTimeout(fadeTimer);
  }, []);

  // 2. Page Route Transitions Handling
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isTransitioning && showRouteLoader) {
      // Destination page mounted! Smoothly fade out the loader
      const fadeTimer = setTimeout(() => {
        setRouteFading(true);
      }, 0);

      timeout = setTimeout(() => {
        setShowRouteLoader(false);
        setRouteFading(false);
      }, 350);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(timeout);
      };
    }
  }, [isTransitioning, showRouteLoader]);

  // When transition triggers, ensure route loader is active
  if (isTransitioning && !showRouteLoader) {
    setShowRouteLoader(true);
    setRouteFading(false);
  }

  const isVisible = initialLoading || showRouteLoader;
  const isFading = (initialLoading && initialFading) || routeFading;

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0909] transition-opacity duration-350 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading Tattoo Studio"
    >
      {/* Looping Tattoo Needle / Blade Dagger with stroke-dash fill animation */}
      <div className="relative w-28 h-28 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-[#C92820]/25 animate-ping opacity-40" />

        <svg
          viewBox="0 0 120 120"
          className="w-24 h-24 text-[#C92820] drop-shadow-[0_0_15px_rgba(201,40,32,0.4)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {/* Tattoo machine / blade geometry filling up in a loop */}
          {/* Outer diamond / tattoo shield */}
          <path
            d="M60 8 L104 60 L60 112 L16 60 Z"
            className="animate-tattoo-stroke stroke-[#3A3735]"
            strokeWidth="1.5"
            strokeDasharray="340"
            strokeDashoffset="340"
          />

          {/* Central Inking Needle */}
          <path
            d="M60 20 L66 65 L60 102 L54 65 Z"
            className="animate-tattoo-fill stroke-[#C92820] fill-[#C92820]/20"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Crossbar guard */}
          <line
            x1="40"
            y1="65"
            x2="80"
            y2="65"
            stroke="#E8DFCC"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Ink droplet pulse at tip */}
          <circle cx="60" cy="104" r="2.5" fill="#C92820" className="animate-pulse" />
        </svg>
      </div>

      {/* Minimal clean status */}
      <div className="mt-6 flex flex-col items-center gap-1.5">
        <span className="font-display text-xl tracking-[0.25em] text-[#E8DFCC]">
          TATTOO STUDIO
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#92908A]">
            INITIALIZING CANVAS
          </span>
        </div>
      </div>
    </div>
  );
}
