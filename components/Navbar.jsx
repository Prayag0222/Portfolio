'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const WHATSAPP_MESSAGE = encodeURIComponent(
    "Hi Prayag, I just viewed your portfolio. I have a project in mind and would like to discuss your availability."
  );
  const WHATSAPP_LINK = `https://wa.me/918989819484?text=${WHATSAPP_MESSAGE}`;

  return (
    <header className=" fixed mx-auto w-full top-4  z-50">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="backdrop-blur-sm  bg-black/40 rounded-2xl px-4 py-3 max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="#home"
              className="rounded-md px-3 py-1   bg-gradient-to-r cursor-pointer hover:scale-105 transition-all duration-300 from-[#06B6D4] to-[#7C3AED] font-semibold"
            >
              Prayag
            </a>
              <div className="text-sm text-[#d7dde6]">Full‑Stack Web Developer</div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-[#d7dde6]">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" target="_blank" rel="noreferrer" className="hover:text-white">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-5">
            {/* <a href="https://github.com/Prayag0222" target="_blank" rel="noreferrer" className="text-sm text-[#d7dde6] hover:text-white">GitHub</a> */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full px-4 py-2 bg-gradient-to-r from-[#06B6D4] to-[#7C3AED] text-black text-sm font-semibold"
            >
              Get a free consult
            </a>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="rounded-md p-2 bg-[#071226] border border-[#18202b]"
            >
              <svg className="w-5 h-5 text-[#94A3B8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          className="overflow-hidden md:hidden mt-3"
        >
          <div className="flex flex-col gap-3 px-1">
            <a href="#projects" className="text-sm text-[#94A3B8] block py-2 px-3 rounded-md hover:bg-white/5">Projects</a>
            <a href="#about" className="text-sm text-[#94A3B8] block py-2 px-3 rounded-md hover:bg-white/5">About</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-sm text-[#94A3B8] block py-2 px-3 rounded-md hover:bg-white/5">Contact</a>
            <a href="https://github.com/Prayag0222" target="_blank" rel="noreferrer" className="text-sm text-[#94A3B8] block py-2 px-3 rounded-md hover:bg-white/5">GitHub</a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full px-4 py-2 bg-gradient-to-r from-[#06B6D4] to-[#7C3AED] text-black text-sm font-semibold"
            >
              Get a free consult
            </a>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
  };
export default Navbar;