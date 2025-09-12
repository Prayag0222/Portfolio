"use client";

import React, { useState, useEffect } from 'react';

// Reusable NavLink component for cleaner code
const NavLink = ({ to, children }) => (
  <a
    href={`#${to}`}
    className="cursor-pointer text-white hover:text-indigo-400 transition-colors duration-300 block py-2 md:py-0"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById(to)?.scrollIntoView({
        behavior: 'smooth'
      });
    }}
  >
    {children}
  </a>
);

// Main Navbar Component
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'hero', text: 'Home' },
    { to: 'skills', text: 'Skills' },
    { to: 'projects', text: 'Projects' },
    { to: 'contact', text: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled || mobileMenuOpen ? 'bg-gray-900 bg-opacity-70 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 transition-all duration-300">
          <div className={`${scrolled ? 'text-2xl' : 'text-3xl'} font-bold text-white transition-all duration-300`}>
             <a href="#hero" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}>
                Portfolio
              </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>{link.text}</NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="text-white hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-max-height duration-500 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" onClick={() => setMobileMenuOpen(false)}>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>{link.text}</NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
