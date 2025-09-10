"use client";

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id='contact' className="relative min-h-screen py-32 px-6 bg-gray-900 text-white">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>
      <motion.div
        className="max-w-2xl mx-auto text-center space-y-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="text-lg md:text-xl drop-shadow">
          I am available for freelance projects, collaborations, or just a chat about technology, design, and content creation.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-6">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-semibold px-10 py-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            WhatsApp Me
          </a>
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-indigo-600 text-white font-semibold px-10 py-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Email Me
          </a>
        </div>
        <div className="flex justify-center space-x-12 mt-12 text-lg">
          <a href="#" className="text-white hover:text-indigo-400 transition-colors duration-300">LinkedIn</a>
          <a href="#" className="text-white hover:text-indigo-400 transition-colors duration-300">Instagram</a>
          <a href="#" className="text-white hover:text-indigo-400 transition-colors duration-300">GitHub</a>
        </div>
      </motion.div>
    </section>
  );
}