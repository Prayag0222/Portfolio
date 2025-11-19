"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/*  
=====================================================
 SINGLE-FILE, FULLY UPGRADED PROJECTS SECTION
=====================================================
→ Includes:
    - Projects data
    - Screenshot scroller
    - Project cards
    - Case-study modal
    - Tech tags
    - Demo + Repo buttons
    - WhatsApp CTA
=====================================================
*/

// YOUR NUMBER HERE (IMPORTANT)
const waNumber = "918989819484";

// PROJECTS DATA (EDIT IMAGES IF NEEDED)
const PROJECTS_DATA = [
  {
    id: "ev-showroom",
    title: "EV Showroom — Dynamo",
    short: "A clean, modern EV showroom website optimized for conversions.",
    description:
      "A complete EV showroom demo built with Next.js + Tailwind. Fully responsive layout, product displays, and WhatsApp lead generation.",
    image:
      "https://images.unsplash.com/photo-1623079399942-368de709ea32?w=600&auto=format&fit=crop&q=60",
    screenshots: [
      "https://images.unsplash.com/photo-1623079399942-368de709ea32?w=400",
      "https://images.unsplash.com/photo-1623079399942-368de709ea32?w=500",
    ],
    link: "https://dynamo-ten.vercel.app/",
    repo: "https://github.com/Prayag0222/Dynamo",
    tech: ["Next.js", "Tailwind", "Vercel"],
    caseStudy: {
      problem:
        "Local EV dealers lacked an online presence to display products and collect customer leads.",
      solution:
        "Created a mobile-first EV showroom UI with product pages, gallery, and WhatsApp actions.",
      outcome:
        "A customizable template that shop owners can deploy within 24 hours to get more leads.",
    },
  },

  {
    id: "tesla-clone",
    title: "Tesla Website Clone",
    short: "High-end UI clone of the Tesla website with animations.",
    description:
      "Pixel-style Tesla homepage clone made using React, Vite, Tailwind & Framer Motion animations.",
    image:
      "https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=2070&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1617704548623-340376564e68?w=400",
      "https://images.unsplash.com/photo-1617704548623-340376564e68?w=500",
    ],
    link: "https://tesla-clone-lyart-delta.vercel.app/",
    repo: "https://github.com/Prayag0222/Tesla-clone",
    tech: ["React", "Vite", "Framer Motion"],
    caseStudy: {
      problem:
        "Need to demonstrate frontend mastery & animation ability for landing pages.",
      solution:
        "Created a visually accurate Tesla clone with scroll animations & responsive layout.",
      outcome:
        "Strong showcase piece that convinces clients of high-quality UI skill.",
    },
  },
];

/* ---------------------------------------------------------
   Screenshot Scroller
----------------------------------------------------------*/
function ScreenshotScroller({ images = [] }) {
  if (!images.length) return null;
  return (
    <div className="flex gap-4 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-600">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`screenshot-${i}`}
          className="h-36 w-auto rounded-lg object-cover shadow-md"
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------
   Project Card Component
----------------------------------------------------------*/
function ProjectCard({ project, index, onOpen }) {
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Hi Prayag, I saw your ${project.title} project. I want a similar website for my business.`
  )}`;

  return (
    <motion.div
      className="group flex flex-col bg-gray-800/40 rounded-2xl overflow-hidden border border-white/10 shadow-md hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300 "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
    >
      <div className="relative h-56 w-full">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute left-3 top-3 bg-black/50 text-xs rounded-full px-3 py-1 text-white backdrop-blur-sm">
          {project.tech.join(" • ")}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.short}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-3">
          <a
            href={project.link}
            target="_blank"
            className="px-3 py-2 bg-purple-600 rounded-md text-white text-sm hover:bg-purple-700"
          >
            Live Demo
          </a>

          <a
            href={project.repo}
            target="_blank"
            className="px-3 py-2 bg-gray-700 rounded-md text-white text-sm hover:bg-gray-600"
          >
            Code
          </a>

          <button
            onClick={() => onOpen(project)}
            className="px-3 py-2 bg-green-600 rounded-md text-white text-sm hover:bg-green-700 ml-auto"
          >
            Case Study
          </button>
        </div>

        <a
          href={waLink}
          target="_blank"
          className="text-xs mt-2 px-3 py-2 border border-white/10 rounded-md text-white hover:bg-white/10"
        >
          I want this for my shop
        </a>
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------------------
   MAIN PROJECTS SECTION
----------------------------------------------------------*/
export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-20 px-5 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <div className="flex flex-col md:flex-row md:justify-around md:items-stretch gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={(p) => setOpen(p)}
            />
          ))}
        </div>

        {/* CASE STUDY MODAL */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setOpen(null)}
            ></div>

            <motion.div
              className="relative bg-gray-800 p-6 rounded-2xl max-w-3xl w-full shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h3 className="text-xl font-bold text-white">{open.title}</h3>
              <p className="text-gray-300 mt-2">{open.description}</p>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-200">Case Study</h4>
                <p className="mt-1 text-sm text-gray-300">
                  <strong>Problem:</strong> {open.caseStudy.problem}
                </p>
                <p className="mt-1 text-sm text-gray-300">
                  <strong>Solution:</strong> {open.caseStudy.solution}
                </p>
                <p className="mt-1 text-sm text-gray-300">
                  <strong>Outcome:</strong> {open.caseStudy.outcome}
                </p>
              </div>

              <div className="w-full mt-4">
                <ScreenshotScroller images={open.screenshots} />
              </div>

              {/* Modal buttons */}
              <div className="flex gap-3 mt-5">
                <a
                  href={open.link}
                  target="_blank"
                  className="px-3 py-2 bg-purple-600 rounded text-white text-sm hover:bg-purple-700"
                >
                  Open Demo
                </a>
                <a
                  href={open.repo}
                  target="_blank"
                  className="px-3 py-2 bg-gray-700 rounded text-white text-sm hover:bg-gray-600"
                >
                  View Code
                </a>
                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  className="px-3 py-2 bg-green-600 rounded text-white text-sm hover:bg-green-700"
                >
                  Get for my shop
                </a>
              </div>

              <button
                onClick={() => setOpen(null)}
                className="absolute top-4 right-4 text-gray-300 hover:text-white"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
