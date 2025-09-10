"use client";

import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full text-2xl pt-2 z-50 transition-all duration-400 ${scrolled ? 'bg-gray-900 bg-opacity-50 backdrop-blur-sm  text-lg  ' : 'bg-transparent '}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className={`${scrolled ? 'text-xl' : 'text-3xl'} transition-all duration-400 font-bold text-white`}>Portfolio</div>
        <div className="space-x-8 hidden md:flex">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-white hover:text-indigo-400 transition-colors duration-300">Home</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer text-white hover:text-indigo-400 transition-colors duration-300">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer text-white hover:text-indigo-400 transition-colors duration-300">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-white hover:text-indigo-400 transition-colors duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}