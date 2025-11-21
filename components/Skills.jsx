'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Video, Zap, Cpu, Search, Smartphone, Layout, PenTool, Mic, Globe, Share2 } from 'lucide-react';

// --- ICONS (Optimized & Styled) ---
const Icons = {
  JS: () => (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <rect width="128" height="128" rx="20" fill="#F7DF1E" />
      <path d="M46 94l9-6c1 6 4 10 10 10 5 0 8-2 8-9V53h12v40c0 15-9 22-23 22-13 0-22-7-26-18zM83 94l9-6c1 6 4 10 10 10 5 0 8-2 8-9V53h12v40c0 15-9 22-23 22-13 0-22-7-26-18z" fill="#000"/>
    </svg>
  ),
  Node: () => (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <path d="M64 16l46 26v52l-46 26-46-26V42z" fill="#333" />
      <path d="M64 28l36 20v40l-36 20L28 88V48l36-20z" fill="#3C873A"/>
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <path d="M64 128c-17.6 0-32-14.4-32-32 0-17.6 14.4-32 32-32 17.6 0 32 14.4 32 32 0 17.6-14.4 32-32 32z" fill="#0ACF83"/>
      <path d="M32 64c0-17.6 14.4-32 32-32 17.6 0 32 14.4 32 32s-14.4 32-32 32c-17.6 0-32-14.4-32-32z" fill="#A259FF"/>
      <path d="M32 32C32 14.4 46.4 0 64 0s32 14.4 32 32-14.4 32-32 32-32-14.4-32-32z" fill="#F24E1E"/>
      <path d="M64 0h32c17.6 0 32 14.4 32 32s-14.4 32-32 32H64V0z" fill="#FF7262"/>
      <path d="M64 64h32c17.6 0 32 14.4 32 32s-14.4 32-32 32H64V64z" fill="#1ABCFE"/>
    </svg>
  ),
  Ps: () => (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <rect width="128" height="128" rx="24" fill="#001E36"/>
      <text x="64" y="84" textAnchor="middle" fontSize="56" fontWeight="bold" fill="#31A8FF" fontFamily="sans-serif">Ps</text>
    </svg>
  ),
  Pr: () => (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <rect width="128" height="128" rx="24" fill="#330066"/>
      <text x="64" y="84" textAnchor="middle" fontSize="56" fontWeight="bold" fill="#DB96FD" fontFamily="sans-serif">Pr</text>
    </svg>
  ),
};

// --- DATA ---
const SKILLS_DATA = [
  { name: 'JavaScript', level: 95, category: 'Dev', icon: Icons.JS, color: 'bg-yellow-400' },
  { name: 'Node.js', level: 85, category: 'Dev', icon: Icons.Node, color: 'bg-green-500' },
  { name: 'React/Next.js', level: 90, category: 'Dev', icon: Code2, isLucide: true, color: 'bg-cyan-500' },
  { name: 'Responsive UI', level: 95, category: 'Dev', icon: Smartphone, isLucide: true, color: 'bg-blue-500' },
  { name: 'SEO Basics', level: 75, category: 'Dev', icon: Search, isLucide: true, color: 'bg-emerald-400' },
  { name: 'GitHub', level: 85, category: 'Dev', icon: Globe, isLucide: true, color: 'bg-slate-200' },
  
  { name: 'Figma', level: 85, category: 'Design', icon: Icons.Figma, color: 'bg-purple-500' },
  { name: 'Photoshop', level: 70, category: 'Design', icon: Icons.Ps, color: 'bg-blue-600' },
  { name: 'UI Principles', level: 80, category: 'Design', icon: Layout, isLucide: true, color: 'bg-pink-500' },
  
  { name: 'Premiere Pro', level: 75, category: 'Video', icon: Icons.Pr, color: 'bg-violet-600' },
  { name: 'Video Editing', level: 85, category: 'Video', icon: Video, isLucide: true, color: 'bg-orange-500' },
  { name: 'Voiceover', level: 80, category: 'Video', icon: Mic, isLucide: true, color: 'bg-teal-400' },
  
  { name: 'AI Tools', level: 90, category: 'Tools', icon: Zap, isLucide: true, color: 'bg-yellow-300' },
  { name: 'Marketing', level: 60, category: 'Tools', icon: Share2, isLucide: true, color: 'bg-rose-400' },
];

const TABS = ['All', 'Dev', 'Design', 'Video', 'Tools'];

function SkillsSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = SKILLS_DATA.filter(
    skill => activeTab === 'All' || skill.category === activeTab
  );

  return (
    <section id="skills" className="section-fade py-24 bg-[#020617] relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4"
          >
            Technical Proficiency
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Tools & Technologies
          </motion.h3>
        </div>

        {/* Animated Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === tab ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-slate-800 rounded-full border border-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-slate-900/50 border border-white/5 hover:border-white/10 p-5 rounded-2xl backdrop-blur-sm transition-all duration-300"
              >
                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-slate-800/50 border border-white/5 p-2.5 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                    {skill.isLucide ? (
                      <skill.icon className="w-full h-full text-slate-200" />
                    ) : (
                      <skill.icon />
                    )}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{skill.name}</h4>
                    <span className="text-xs text-slate-500 font-mono uppercase">{skill.category}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-white font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      className={`h-full rounded-full ${skill.color} opacity-80 shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
           <p className="text-slate-500 text-sm">
             Looking for a specific tool stack? <a href="#contact" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">Let's discuss your requirements.</a>
           </p>
        </div>

      </div>
    </section>
  );
}

// Ensure the component is exported as App for the previewer
export default function App() {
  return <SkillsSection />;
}