"use client";

import React, { useEffect, useState } from "react";

/**
 * Navbar.jsx
 * Single-file responsive navbar for your portfolio.
 *
 * Usage:
 * 1. Save as components/Navbar.jsx
 * 2. Import and place at top of your layout or page: <Navbar />
 * 3. Update PHONE and SITE_NAME below.
 *
 * Behaviour:
 * - Smooth scroll to section anchors (ensure your sections have matching ids: #home, #services, #projects, #about, #contact)
 * - Mobile menu with slide-down animation
 * - Highlights active section link while scrolling
 */

const PHONE = "918989819484"; // no + sign
const SITE_NAME = "Prayag";
const WA_PREFILL = encodeURIComponent("Hi Prayag, I want to discuss a website project.");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Close mobile menu on route change / outside click could be implemented if using router.
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);

    // IntersectionObserver to update active link
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => obs.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      obs.disconnect();
    };
  }, []);

  // smooth scroll helper
  function scrollToId(id) {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const waLink = `https://wa.me/${PHONE}?text=${WA_PREFILL}`;

  return (
    <header className={`fixed w-full z-40 transition-all ${scrolled ? "backdrop-blur bg-black/60" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToId("home"); }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                {SITE_NAME[0] || "P"}
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-semibold">{SITE_NAME}</span>
                <div className="text-xs text-gray-300">Web Developer</div>
              </div>
            </a>
          </div>

          {/* Middle: Links (desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <button onClick={()=>scrollToId("home")} className={`text-sm ${active==="home" ? "text-white font-semibold" : "text-gray-300 hover:text-white"}`}>Home</button>
            <button onClick={()=>scrollToId("services")} className={`text-sm ${active==="services" ? "text-white font-semibold" : "text-gray-300 hover:text-white"}`}>Services</button>
            <button onClick={()=>scrollToId("projects")} className={`text-sm ${active==="projects" ? "text-white font-semibold" : "text-gray-300 hover:text-white"}`}>Projects</button>
            <button onClick={()=>scrollToId("about")} className={`text-sm ${active==="about" ? "text-white font-semibold" : "text-gray-300 hover:text-white"}`}>About</button>
            <button onClick={()=>scrollToId("contact")} className={`text-sm ${active==="contact" ? "text-white font-semibold" : "text-gray-300 hover:text-white"}`}>Contact</button>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); scrollToId("services"); }}
              className="hidden md:inline-block px-4 py-2 bg-gray-800/60 border border-white/10 text-white rounded-md text-sm hover:bg-gray-800/80"
            >
              See Services
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-md text-sm hover:scale-105 transition-transform"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM15.5 11.5l-1.2 2.5a.5.5 0 01-.45.3H10.6a.5.5 0 01-.45-.3L8.9 11.5" /></svg>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${open ? "block" : "hidden"} bg-black/70 border-t border-white/6`}>
        <div className="px-4 pt-4 pb-6 space-y-3">
          <button onClick={()=>scrollToId("home")} className={`w-full text-left px-3 py-2 rounded ${active==="home" ? "bg-white/5 text-white font-semibold" : "text-gray-300 hover:bg-white/3"}`}>Home</button>
          <button onClick={()=>scrollToId("services")} className={`w-full text-left px-3 py-2 rounded ${active==="services" ? "bg-white/5 text-white font-semibold" : "text-gray-300 hover:bg-white/3"}`}>Services</button>
          <button onClick={()=>scrollToId("projects")} className={`w-full text-left px-3 py-2 rounded ${active==="projects" ? "bg-white/5 text-white font-semibold" : "text-gray-300 hover:bg-white/3"}`}>Projects</button>
          <button onClick={()=>scrollToId("about")} className={`w-full text-left px-3 py-2 rounded ${active==="about" ? "bg-white/5 text-white font-semibold" : "text-gray-300 hover:bg-white/3"}`}>About</button>
          <button onClick={()=>scrollToId("contact")} className={`w-full text-left px-3 py-2 rounded ${active==="contact" ? "bg-white/5 text-white font-semibold" : "text-gray-300 hover:bg-white/3"}`}>Contact</button>

          <div className="pt-3 border-t border-white/6">
            <a href={waLink} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-md">
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
