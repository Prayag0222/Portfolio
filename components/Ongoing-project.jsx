import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, AlertCircle, Layers, Database, Server, ShieldCheck, Layout, Code2 } from 'lucide-react';

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function OngoingProjectShowcase() {
  const project = {
    title: "Full-Stack E-Commerce Engine",
    subtitle: "Enterprise-Grade Seller Platform & Marketplace Architect",
    status: "Active Development",
    scope: "Architecting a scalable, multi-tenant e-commerce platform with a focus on robust security, role-based access control (RBAC), and a high-performance seller dashboard. The system is designed to handle complex product catalogs and high-volume transactions.",
    technical_implementation: "The core is built on a RESTful API using Node.js and Express, interacting with a MongoDB database. Security is paramount, implemented via secure, HttpOnly JWTs for stateless authentication. The frontend is a highly responsive Next.js application, leveraging React for dynamic UIs and Tailwind CSS for a polished design system.",
    highlights: [
      { icon: ShieldCheck, text: "Secure JWT Authentication (HttpOnly Cookies)" },
      { icon: Layers, text: "Granular Dual-Role RBAC (Admin/Seller/User)" },
      { icon: Server, text: "Scalable RESTful API Architecture" },
      { icon: Database, text: "Optimized MongoDB Schema Design" },
      { icon: Layout, text: "Responsive Seller Dashboard & Analytics UI" },
    ],
    tech: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'Mongoose'],
    images: [
      { src: "/images/screenshot1.png", label: "Seller Dashboard Analytics" },
      { src: "/images/screenshot4.png", label: "Secure Authentication Flow" },
      { src: "/images/screenshot3.png", label: "Mobile-First Marketplace UI" }
    ]
  };

  return (
    <section className="py-24 px-6 bg-[#020617] relative overflow-hidden">
      
      {/* --- OPTIMIZED BACKGROUNDS --- */}
      {/* We use translate-Z to force these heavy blurs onto the GPU to prevent repaints */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 transform-gpu" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2 transform-gpu" />
      
      {/* Lightweight CSS Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/50" />
          <span className="text-indigo-400 font-mono text-sm uppercase tracking-widest flex items-center gap-3 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20">
            <Loader2 className="animate-spin w-4 h-4" />
            Current Engineering Focus
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/50" />
        </motion.div>

        {/* Main Content Card */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers slightly earlier
          className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative will-change-transform"
        >
          {/* Subtle glowing border effect */}
          <div className="absolute inset-0 border-2 border-transparent rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 opacity-30 pointer-events-none" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* LEFT COLUMN: Professional Details */}
            <div className="lg:col-span-5 p-10 md:p-12 flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 relative z-10">
              
              {/* Pulsing Status Badge */}
              <div className="absolute top-8 right-8 lg:top-12 lg:right-12 flex items-center gap-2">
                 <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">{project.status}</span>
              </div>

              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-3 leading-tight">{project.title}</h2>
                <p className="text-indigo-400 font-mono text-sm uppercase tracking-wider font-medium">{project.subtitle}</p>
              </motion.div>

              <div className="space-y-8">
                <motion.div variants={itemVariants}>
                  <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <AlertCircle size={16} className="text-indigo-400" />
                    Project Scope
                  </h4>
                  <p className="text-slate-400 text-base leading-relaxed font-light">
                    {project.scope}
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Code2 size={16} className="text-purple-400" />
                    Technical Implementation
                  </h4>
                  <p className="text-slate-400 text-base leading-relaxed font-light">
                    {project.technical_implementation}
                  </p>
                </motion.div>
              </div>

              {/* Key Features List */}
              <motion.div variants={itemVariants} className="mt-10 p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
                  Key Engineering Features
                </h4>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <motion.li 
                      key={idx}
                      variants={itemVariants}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <div className="mt-0.5 p-1 rounded-full bg-emerald-500/10 text-emerald-400">
                        <highlight.icon size={14} />
                      </div>
                      {highlight.text}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack Pills */}
              <motion.div variants={containerVariants} className="flex flex-wrap gap-2 mt-10">
                {project.tech.map(t => (
                  <motion.span key={t} variants={pillVariants} className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-300 bg-slate-800/80 rounded-full border border-white/10 shadow-sm">
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Visual Showcase */}
            <div className="lg:col-span-7 bg-slate-950/50 relative p-10 md:p-12 flex flex-col justify-center overflow-hidden">
              
              {/* Decorative Background Element */}
              <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2 transform-gpu" />

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-12 gap-6 relative z-10 items-start"
              >
                {/* Main Large Image */}
                <motion.div 
                  variants={imageVariants}
                  className="relative col-span-12 lg:col-span-8 aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
                  whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img
                    src={project.images[0].src}
                    alt={project.images[0].label}
                    className="w-full h-full absolute inset-0 object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Label Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
                    <span className="text-sm text-white font-bold">{project.images[0].label}</span>
                  </div>
                </motion.div>

                {/* Secondary Images Column */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                  {project.images.slice(1, 3).map((img, i) => (
                    <motion.div 
                      key={i}
                      variants={imageVariants}
                      className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-lg group cursor-pointer"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                      <img
                        src={img.src}
                        alt={img.label}
                        className="w-full h-full absolute inset-0 object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <span className="text-xs text-white font-bold block text-center">{img.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 text-center relative z-10">
                <p className="text-xs text-slate-500 flex items-center justify-center gap-2 font-medium bg-white/5 py-2 px-4 rounded-full inline-flex">
                  <AlertCircle size={14} className="text-amber-400" />
                  Development build preview. Features and UI are subject to continuous iteration.
                </p>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 