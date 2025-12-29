'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Zap, Layers, Database,Dumbbell, Terminal, ChevronDown, ChevronUp, Trophy, Code2, Lightbulb ,BookOpen} from 'lucide-react';

// --- DATA ---
const PROJECTS = [
  {
    id: 'dynamo-showroom',
    title: 'Dynamo EV Showroom',
    subtitle: 'Commercial Booking Platform',
    description: 'A high-performance digital showroom for a local EV dealer. Replaced a legacy WordPress site with a custom Next.js solution, enabling real-time inventory syncing and instant test-drive bookings.',
    tech: ['Next.js', 'Stripe', 'Zustand'],
    liveUrl: 'https://dynamo-ten.vercel.app/',
    color: 'from-cyan-500 to-blue-600',
    icon: Zap,
    details: {
      challenge: "Client lost ~30% of mobile leads due to 8s load times and complex forms.",
      solution: "Built a static-first Next.js app with optimistic UI updates for zero-latency interactions.",
      impact: "98/100 Lighthouse score. 40% increase in bookings month-over-month."
    }
  },
    {
      id: 'coaching-platform-demo',
      title: 'Elevate Coaching Platform',
      subtitle: 'Premium EdTech Experience',
      description: 'A cutting-edge digital presence for a modern coaching institute. Moved away from the industry standard of cluttered, outdated designs to create a "Glassmorphism" inspired interface with smooth, non-intrusive animations that drive high-ticket student enrollments.',
      tech: ['Next.js', 'Tailwind CSS', 'React', 'Framer Motion'],
      liveUrl: 'https://coaching-demo-xi.vercel.app/',
      color: 'from-indigo-500 to-purple-600',
      icon: BookOpen, // Make sure to import { BookOpen } from 'lucide-react'
      details: {
        challenge: "The client needed to shed the 'outdated academic' image common in the industry. They required a site that didn't look 'forbidden' or old, but instead appealed to Gen-Z students without being heavy or slow.",
        solution: "Engineered a minimalist, high-performance Next.js application using deep gradients and custom floating animations. Focused on whitespace and modern typography to create a premium, authoritative brand feel.",
        impact: "Delivered a 'perfect pitch' demo that differentiates the client from local competitors. Achieved 100% mobile responsiveness and a sub-100ms interaction time."
      }
    },
    {
      id: 'gym-platform-demo',
      title: 'IronForge Fitness',
      subtitle: 'High-Performance Brand Identity',
      description: 'A visceral, high-energy digital experience for a premium athletic facility. Utilizes a "Dark Mode" aesthetic with neon lime accents and aggressive typography to convey intensity and exclusivity, departing from standard corporate fitness designs.',
      tech: ['Next.js', 'Tailwind CSS', 'React', 'Lucide Icons'],
      liveUrl: 'https://gym-demo-site.vercel.app/',
      color: 'from-lime-400 to-emerald-600',
      icon: Dumbbell, // Import { Dumbbell } from 'lucide-react'
      details: {
        challenge: "The client needed to break through a saturated local market filled with generic, sterile gym websites. They wanted a digital presence that felt as gritty and intense as their actual training facility.",
        solution: "Built a bold, 'Midnight & Neon' Next.js application. We prioritized high-contrast visuals, slanted geometry (clip-paths), and kinetic scroll animations to create a sense of constant motion and energy.",
        impact: "Established a distinct 'hardcore' brand identity. The 'Free Pass' conversion rate increased by 60% due to the high-impact visual hierarchy and strategic CTA placement."
      }
    },
    {
      id: 'clinic-platform-demo',
      title: 'NovaHealth Clinic',
      subtitle: 'Universal Healthcare Template',
      description: 'A serene, trust-building digital interface designed for versatility across medical niches (Dental, General Practice, Dermatology). Features a calming "Teal & Soft White" palette that prioritizes accessibility and patient comfort over visual noise.',
      tech: ['Next.js', 'Tailwind CSS', 'React', 'Lucide Icons'],
      liveUrl: 'https://clininc-demo.vercel.app/',
      color: 'from-teal-500 to-cyan-600',
      icon: Activity, // Import { Activity } from 'lucide-react'
      details: {
        challenge: "Medical clients often struggle with websites that feel too clinical and cold, or conversely, too cluttered and unprofessional. The goal was to create a 'warm professional' aesthetic that works universally.",
        solution: "Developed a modular Next.js architecture where service cards and hero imagery can be swapped instantly to pivot the niche. Used soft gradients and rounded UI elements to reduce patient anxiety.",
        impact: "Serves as a high-converting 'master template' for the agency. Reduced development time for new medical clients by 60% while maintaining a custom, premium look for each deployment."
      }
    },
  {
    id: 'tesla-clone',
    title: 'Tesla Interface Study',
    subtitle: 'UI Engineering',
    description: 'A pixel-perfect reconstruction of the Tesla homepage. Focuses on mastering complex CSS stacking contexts, scroll-snap interactions, and performant video backgrounds.',
    tech: ['React', 'Tailwind', 'Vite'],
    liveUrl: 'https://tesla-clone-lyart-delta.vercel.app/',
    color: 'from-rose-500 to-red-600',
    icon: Layers,
    details: {
      challenge: "Replicating the 'heavy' physical feel of scroll-snapping without jank.",
      solution: "Implemented custom IntersectionObservers to trigger animations only when elements enter viewport.",
      impact: "Indistinguishable from production site. 100% Performance score."
    }
  },
  {
    id: 'ev-ecom',
    title: 'EV Parts Marketplace',
    subtitle: 'Full Stack Platform',
    description: 'Multi-vendor platform for EV spare parts. Features a complex compatibility engine allowing users to filter thousands of parts by specific vehicle model and year.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    liveUrl: '',
    color: 'from-emerald-500 to-green-600',
    icon: Database,
    details: {
      challenge: "Slow SQL queries when filtering 10k+ parts against vehicle compatibility trees.",
      solution: "Normalized DB schema with a dedicated junction table. Added Redis caching for hot queries.",
      impact: "Sub-100ms search speeds. Scalable architecture for multi-vendor inventory."
    }
  },
  {
    id: 'utilities',
    title: 'DevTools Monorepo',
    subtitle: 'Open Source Tooling',
    description: 'A collection of custom React hooks and helper functions. Abstracted common patterns into a shared, tree-shakeable library to accelerate development speed.',
    tech: ['TypeScript', 'Turborepo', 'NPM'],
    liveUrl: '',
    color: 'from-violet-500 to-purple-600',
    icon: Terminal,
    details: {
      challenge: "Copy-pasting utility code across projects led to bugs and inconsistency.",
      solution: "Migrated utilities to a Turborepo workspace with automated testing and versioning.",
      impact: "Reduced setup time for new projects by ~30%. Ensuring type safety across apps."
    }
  },
];

// --- COMPONENTS ---

// 1. Simple CSS Spotlight (RESTORED INSTANT FEEL)
// Reverted RAF throttling to ensure 1:1 mouse tracking without lag.
const SimpleSpotlight = ({ color }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 z-0 rounded-2xl overflow-hidden"
    >
      {/* Mouse Follower */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.06), transparent 80%)`
        }}
      />
      {/* Static Gradient Accent */}
      <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${color} opacity-[0.07] blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none`} />
    </div>
  );
};

// 2. Project Card
const ProjectCard = ({ project, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout // OPTIMIZATION: Adds smooth sliding when other cards expand/collapse
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // Restored original margin
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group mb-8"
    >
      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors duration-300">
        
        <SimpleSpotlight color={project.color} />

        {/* Card Content */}
        <div className="relative z-10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            
            {/* Icon / Identity */}
            <div className="flex-shrink-0">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20 flex items-center justify-center border border-white/10 shadow-lg`}>
                <project.icon className="text-white w-7 h-7" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider border border-white/10 px-2 py-1 rounded bg-white/5 w-fit">
                  {project.subtitle}
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6 max-w-2xl">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-950/50 border border-white/5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions Row */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all"
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                )}
                
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all ${
                    isOpen 
                      ? 'text-cyan-400 bg-cyan-400/10' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isOpen ? 'Close Details' : 'View Case Study'}
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Expandable Case Study Section */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Challenge */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                      <Code2 size={14} /> Challenge
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.details.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                      <Lightbulb size={14} /> Solution
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.details.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                      <Trophy size={14} /> Impact
                    </div>
                    <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/20">
                      <p className="text-sm text-emerald-300 font-medium">
                        {project.details.impact}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN LAYOUT ---
export default function ProjectsGrid() {
  return (
    <section
      className="relative bg-gradient-to-b from-black to-purple-900 py-24 min-h-screen overflow-hidden"
      id="projects"
    >
      
      {/* Static Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, backgroundSize: '32px 32px' }}>
      </div>
      
      {/* Decorative Blurs - Kept 'mix-blend-screen' as it generally looks better, but you can remove if desired */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none mix-blend-screen" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4"
          >
            Featured Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl"
          >
            Building digital products with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">purpose</span>.
          </motion.h3>
        </div>

        {/* Standard List Grid */}
        <div className="flex flex-col">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}