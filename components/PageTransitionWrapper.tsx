'use client';

import React from 'react';
import { useNavigationTransition } from './NavigationTransitionContext';

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const { isTransitioning } = useNavigationTransition();

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {children}
    </div>
  );
}
