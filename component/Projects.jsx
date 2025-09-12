"use client";

import { motion } from 'framer-motion';
import React from 'react';

// Data is moved to a constant. For a larger app, this could come from a CMS or API.
// Added a unique `id` for each project, which is a best practice for list keys.
const PROJECTS_DATA = [
  {
    id: 'tesla-clone',
    title: 'Tesla Website Clone',
    description: 'A feature-rich clone of the official Tesla website using Next.js, Tailwind CSS, and Framer Motion for smooth animations.',
    image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=2070&auto=format&fit=crop',
    link: 'https://tesla-clone-lyart-delta.vercel.app/'
  },
  {
    id: 'ev-showroom',
    title: 'EV Showroom',
    description: 'A bespoke, premium EV showroom website designed with a focus on responsive layout and an elegant user experience.',
    image: 'https://images.unsplash.com/photo-1623079399942-368de709ea32?w=600&auto=format&fit=crop&q=60',
    link: 'https://dynamo-ten.vercel.app/'
  }
];

/**
 * ProjectCard Component
 * A memoized, reusable card for displaying project details.
 * `React.memo` prevents the component from re-rendering if its props haven't changed.
 * @param {object} project - The project data object.
 * @param {number} index - The index for staggered animation delay.
 */
const ProjectCard = React.memo(({ project, index }) => {
  return (
    <motion.div
      className="group flex flex-col bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02] border border-white/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative h-64 w-full">
        {/*
          OPTIMIZATION: Reverted to the standard <img> tag to resolve the build error.
          - Added `loading="lazy"` for native browser lazy-loading to improve initial page load speed.
        */}
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label={`View the ${project.title} project`}
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
});

// Setting a display name for the component is good practice for debugging.
ProjectCard.displayName = 'ProjectCard';


/**
 * Projects Section Component
 * Displays a portfolio of projects in a responsive grid.
 */
export default function Projects() {
  return (
    <section id='projects' className="relative py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Creative Portfolio
        </motion.h2>
        
        {/* RESPONSIVENESS: Grid now adapts from 1 to 2 columns on medium screens and up. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

