'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ------------------------------------------------------------------
// ⚠️ FOR PREVIEW ONLY: I have commented out your real imports below 
// to make this work in the browser preview. 
// -> UNCOMMENT THESE IN YOUR ACTUAL NEXT.JS APP.
// ------------------------------------------------------------------

 import dynamic from 'next/dynamic';

const DarkVeil = dynamic(() => import('./BG/DarkVeil'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 via-transparent to-purple-900/20" />
  ),
});


// --- PREVIEW MOCKS (DELETE THIS SECTION IN YOUR APP) ---
// This simulates your dynamic import behavior so the preview doesn't crash.


export default function Hero() {
  const containerRef = useRef(null);
  
  // --- SCROLL TRIGGERS ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const blur = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(10px)"]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* --- LCP OPTIMIZATION: CSS ANIMATIONS --- */}
      {/* We inject global styles for the entrance animation so it runs 
         BEFORE React hydrates/Framer Motion loads. 
         This is the key to fixing your LCP score.
      */}
      <style jsx global>{`
        @keyframes appear {
          0% { opacity: 0; transform: translateY(20px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        /* The animation class runs immediately when the DOM is parsed */
        .animate-appear {
          animation: appear 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>

      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0">
          {/* In production, this uses your dynamic import */}
          <DarkVeil
            noiseIntensity={0.055}
            scanlineIntensity={0}
            warpAmount={0.08}
            resolutionScale={1.1}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/55 to-transparent z-10" />
        </div>
      </div>
    
      {/* --- CONTENT LAYER --- */}
      {/* We apply the Motion values (y, opacity, scale) for the SCROLL EXIT only. */}
      <motion.div 
        style={{ y, opacity, scale, filter: blur }}
        className="relative z-20 max-w-5xl mx-auto px-6 lg:px-8 py-24 flex flex-col items-center text-center"
      >
        
        {/* 1. Subheading Pill */}
        {/* OPTIMIZATION: Replaced motion.div with standard div + CSS class to unblock Main Thread */}
        <div className="mb-6 opacity-0 animate-appear">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
            <span className="text-sm text-[#06B6D4] font-medium tracking-wide">
              Premium Web Experiences
            </span>
          </span>
        </div>

        {/* 2. Main Headline - THE LCP ELEMENT */}
        {/* OPTIMIZATION: Replaced motion.h1 with standard h1 + CSS class.
           This ensures text is visible immediately, drastically improving LCP. 
        */}
        <h1 className="font-poppins text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] text-white max-w-4xl tracking-tight opacity-0 animate-appear delay-100">
          Bold websites. Fast results. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
            Scalable code.
          </span>
        </h1>

        {/* 3. Description Paragraph */}
        {/* OPTIMIZATION: Replaced motion.p with standard p + CSS class */}
        <p className="mt-8 font-inter text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed opacity-0 animate-appear delay-200">
          Beautiful, reliable web apps for ambitious teams. From landing pages to full‑stack products — thoughtful UX, performance‑first engineering, and measurable impact.
        </p>

        {/* 4. Action Buttons */}
        {/* OPTIMIZATION: Replaced motion.div with standard div + CSS class */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-4 opacity-0 animate-appear delay-300">
          <a 
            href="#contact" 
            className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-black transition-transform duration-200 active:scale-95 hover:scale-105 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#06B6D4] to-[#7C3AED] transition-all duration-300 group-hover:brightness-110" />
            <span className="relative z-10">Start a project</span>
          </a>
          
          <a 
            href="#projects" 
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors px-6 py-4"
          >
            See projects 
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>

      </motion.div>

      {/* Soft bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-t from-black/30 to-transparent z-10" />
    </section>
  );
}