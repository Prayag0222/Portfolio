'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// This is your Hero component with the new hover-to-zoom effect.
function Hero() {
  const titleText = "Hi, I'm Prayag";
  const headingText = "Crafting premium, responsive web experiences";

  // Split the text into an array of characters
  const titleCharacters = Array.from(titleText);
  const headingCharacters = Array.from(headingText);

  return (
    <section
      id='hero'
      className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center px-4 md:px-8"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1712397943847-e104395a1a8b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
    >
        <div className='absolute inset-0 bg-black opacity-60'></div>
      
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg tracking-wide mb-4 flex flex-wrap justify-center z-10"
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {titleCharacters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block cursor-pointer"
            whileHover={{ scale: 1.25, color: '#34d399' }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 drop-shadow mb-6 tracking-tight flex flex-wrap justify-center z-10"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {headingCharacters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block cursor-pointer"
            whileHover={{ scale: 1.25, color: '#a7f3d0' }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h2>

      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        className="mt-4 z-10 inline-block bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300 text-sm sm:text-base"
        whileHover={{ scale: 1.05 }}
      >
        Chat on WhatsApp
      </motion.a>
    </section>
  );
}

// Main application component
export default function App() {
  return (
    // The main container now has a smooth, animated background.
    <div className="relative font-sans text-gray-100 min-h-screen antialiased overflow-hidden bg-gray-950">
      <style>{`
        .animated-gradient {
          background: linear-gradient(-45deg, #111827, #1f2937, #064E3B, #10B981);
          background-size: 400% 400%;
          animation: gradient-animation 15s ease infinite;
        }

        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      
      {/* This div applies the background animation and covers the entire page. */}
      <div className="animated-gradient fixed inset-0 w-full h-full z-0 opacity-70"></div>

      {/* The main content container, placed above the animated background */}
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
