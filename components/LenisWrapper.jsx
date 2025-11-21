'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisWrapper({ children }) {
  const lenisRef = useRef(null);
  const anchorCleanupRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
    });

    // Add lenis class to html
    const htmlElement = document.documentElement;
    htmlElement.classList.add('lenis');

    // RAF loop
    let rafId;
    function raf(time) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
        rafId = requestAnimationFrame(raf);
      }
    }
    rafId = requestAnimationFrame(raf);

    // Handle resize
    const handleResize = () => {
      if (lenisRef.current) {
        lenisRef.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    // Smooth anchor navigation
    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor || anchor.hasAttribute('data-lenis-ignore')) {
        return;
      }

      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;

      const targetElement = document.querySelector(hash);
      if (targetElement && lenisRef.current) {
        event.preventDefault();
        lenisRef.current.scrollTo(targetElement, {
          offset: -96,
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    anchorCleanupRef.current = () => document.removeEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('resize', handleResize);
      htmlElement.classList.remove('lenis');
      anchorCleanupRef.current?.();
    };
  }, []);

  return <>{children}</>;
}
