"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id='hero'
      className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1712397943847-e104395a1a8b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
    >
        <div className='absolute inset-0 bg-black opacity-60'></div>
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg tracking-wide mb-4"
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Prayag
      </motion.h1>
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-white/90 drop-shadow mb-6 tracking-tight"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Crafting premium, responsive web experiences
      </motion.h2>
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        className="mt-4 z-10 inline-block bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        Chat on WhatsApp
      </motion.a>
    </section>
  );
}
