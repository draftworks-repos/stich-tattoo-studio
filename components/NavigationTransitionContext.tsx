'use client';

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface NavigationTransitionContextType {
  isTransitioning: boolean;
  startTransition: (url: string) => void;
}

const NavigationTransitionContext = createContext<NavigationTransitionContextType>({
  isTransitioning: false,
  startTransition: () => {},
});

export function useNavigationTransition() {
  return useContext(NavigationTransitionContext);
}

export function NavigationTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const targetUrlRef = useRef<string | null>(null);
  const previousPathnameRef = useRef<string>(pathname);

  const startTransition = useCallback((url: string) => {
    // If it's already navigating or target is current exact path, skip
    if (url === window.location.pathname || url === window.location.pathname + window.location.search) {
      return;
    }
    targetUrlRef.current = url;
    setIsNavigating(true);
  }, []);

  // When pathname changes, destination page is ready! Finish transition
  useEffect(() => {
    if (previousPathnameRef.current !== pathname) {
      previousPathnameRef.current = pathname;
      targetUrlRef.current = null;
      // Let destination render mount before dismissing
      setIsNavigating(false);
    }
  }, [pathname]);

  // Global click interceptor for internal links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Ignore modified clicks (cmd, ctrl, shift, middle click)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }

      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Ignore anchor jumps (#), mailto, tel, downloads, or external links
      if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        target.hasAttribute('download') ||
        target.getAttribute('target') === '_blank'
      ) {
        return;
      }

      // Check origin
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) {
          return;
        }

        const isSamePage = url.pathname === window.location.pathname && url.search === window.location.search;
        if (isSamePage) {
          // If only hash is different on same page, don't trigger loader
          return;
        }

        // Internal navigation detected! Trigger page transition loader
        startTransition(url.pathname + url.search);
      } catch {
        // invalid URL format, ignore
      }
    };

    // Listen for browser back / forward buttons (popstate)
    const handlePopState = () => {
      setIsNavigating(true);
    };

    document.addEventListener('click', handleClick, { capture: true });
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
      window.removeEventListener('popstate', handlePopState);
    };
  }, [startTransition]);

  return (
    <NavigationTransitionContext.Provider value={{ isTransitioning: isNavigating, startTransition }}>
      {children}
    </NavigationTransitionContext.Provider>
  );
}
