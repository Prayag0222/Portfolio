'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Cpu, Zap, Terminal, Database, Server, Sparkles } from 'lucide-react';

// --- ANIMATION VARIANTS ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  },
  hover: { 
    scale: 1.05, 
    y: -2,
    backgroundColor: "rgba(6, 182, 212, 0.1)", 
    borderColor: "rgba(6, 182, 212, 0.5)",
    color: "#22d3ee",
    transition: { duration: 0.2 }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const floatVariants = {
  animate: (i) => ({
    y: [0, -12, 0],
    rotate: [0, i % 2 === 0 ? 5 : -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.5,
    },
  }),
};

function About() {
  const skills = ['MongoDB', 'Express.js', 'React', 'Node.js', 'Next.js', 'TypeScript', 'Framer Motion', 'GSAP', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Zustand'];

  return (
    <section id="about" className="section-fade py-32 bg-[#020617] relative overflow-hidden">
      
      {/* --- OPTIMIZED BACKGROUND ANIMATIONS --- */}
      {/* 1. Added 'transform-gpu' to force hardware acceleration */}
      {/* 2. Added 'will-change-transform' to hint browser to optimize */}
      {/* 3. Removed 'rotate' animation on circles (it's visually invisible on round blurs but costs performance) */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="relative">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div variants={fadeUpVariants} className="flex items-center gap-2 mb-6">
                <span className="w-8 h-[1px] bg-cyan-500"></span>
                <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">About Me</span>
              </motion.div>

              <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                I help businesses ship <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">fast, polished software.</span>
              </motion.h2>

              <motion.p variants={fadeUpVariants} className="text-slate-400 text-lg leading-relaxed mb-8">
                I'm <span className="text-white font-semibold">Prayag</span>, a full‑stack developer focused on building products that work as good as they look. 
                <br /><br />
                My approach is simple: I don't just write code; I build solutions. Whether it's a complex EV showroom dashboard or a high-performance e-commerce platform, I focus on <span className="text-slate-200">speed, scalability, and user experience</span>.
              </motion.p>
              
              {/* Detailed Breakdown Section */}
              <motion.div variants={fadeUpVariants} className="mb-10 space-y-8 border-l-2 border-slate-800 pl-6 relative">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute left-[-2px] top-0 w-[2px] bg-gradient-to-b from-cyan-500 to-purple-500"
                />

                <div>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-2 group">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                      <Database className="w-5 h-5" />
                    </div>
                    The MERN Stack Specialist
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    I specialize in the <span className="text-emerald-400 font-medium">MERN Stack</span>. I architect full-stack applications from the ground up—designing schemas in MongoDB, building RESTful APIs with Express & Node, and crafting responsive frontends with React.
                  </p>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-2 group">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    Interactive & Motion Design
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Modern web development is about <em>feeling</em>. I use advanced animation libraries like <span className="text-purple-400 font-medium">Framer Motion</span> and <span className="text-purple-400 font-medium">GSAP</span> to create micro-interactions that elevate the user experience.
                  </p>
                </div>
              </motion.div>

              {/* Tech Stack Pills */}
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Technical Toolkit</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((tech) => (
                    <motion.span 
                      key={tech} 
                      variants={pillVariants}
                      whileHover="hover"
                      className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-full cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* RIGHT COLUMN: Visuals */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl group mb-8 perspective-1000 transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0" />
              
              {/* Static background pattern instead of animated opacity */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              
              <div className="absolute inset-0 flex items-center justify-center z-10">
                 <div className="relative w-32 h-32">
                   <motion.div 
                     animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                     transition={{ duration: 3, repeat: Infinity }}
                     className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl transform-gpu" 
                   />
                   
                   <div className="relative w-full h-full bg-slate-900 rounded-full border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                      <Terminal size={48} className="text-slate-200" />
                   </div>

                   {/* Floating Badges - Added transform-gpu */}
                   <motion.div custom={0} variants={floatVariants} animate="animate" className="absolute -top-6 -right-6 bg-slate-800 border border-white/10 p-3 rounded-xl shadow-xl transform-gpu">
                     <Database size={24} className="text-emerald-400" />
                   </motion.div>
                   
                   <motion.div custom={1} variants={floatVariants} animate="animate" className="absolute -bottom-4 -left-8 bg-slate-800 border border-white/10 p-3 rounded-xl shadow-xl transform-gpu">
                     <Code2 size={24} className="text-cyan-400" />
                   </motion.div>

                   <motion.div custom={2} variants={floatVariants} animate="animate" className="absolute top-1/2 -right-12 bg-slate-800 border border-white/10 p-2 rounded-lg shadow-xl transform-gpu">
                     <Server size={18} className="text-purple-400" />
                   </motion.div>
                 </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-20">
                <h3 className="text-2xl font-bold text-white">Prayag</h3>
                <p className="text-cyan-400 font-mono text-sm">MERN Stack Developer</p>
              </div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { title: 'Modern Frontend', icon: Layout, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'hover:border-cyan-500/30', desc: 'Responsive, accessible UIs built with React, Tailwind & Motion.' },
                { title: 'Robust Backend', icon: Database, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'hover:border-purple-500/30', desc: 'Secure, scalable APIs using Next.js, PostgreSQL & Prisma.' },
                { title: 'Performance', icon: Zap, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'hover:border-emerald-500/30', desc: 'Optimizing Core Web Vitals and API response times.' },
                { title: 'Clean Code', icon: Cpu, color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'hover:border-rose-500/30', desc: 'Turning complex business logic into maintainable code.' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={pillVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`p-4 rounded-xl bg-slate-900/50 border border-white/5 transition-colors group ${item.border}`}
                >
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={20} className={item.color} />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function App() {
  return <About />;
}