'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- Icon Components (Best Practice) ---
// By defining icons as components, we avoid security risks from dangerouslySetInnerHTML.
// This is a much safer and more standard way to handle icons in React.

const JavascriptIcon = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 mb-4 drop-shadow-sm" />;
const NodejsIcon = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12 mb-4 drop-shadow-sm" />;
const GitHubIcon = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12 mb-4 drop-shadow-sm" />;
const ResponsiveIcon = () => <svg xmlns="http://www.w.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-4 drop-shadow-sm"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>;
const SeoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-4 drop-shadow-sm"><path d="M3 3v18h18"/><path d="m18 12-4-4-6 6-4-4"/></svg>;
const FigmaIcon = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-12 h-12 mb-4 drop-shadow-sm" />;
const PhotoshopIcon = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" className="w-12 h-12 mb-4 drop-shadow-sm" />;
const PremiereProIcon = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" alt="Premiere Pro" className="w-12 h-12 mb-4 drop-shadow-sm" />;
const EditingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-4 drop-shadow-sm"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>;
const VoiceoverIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-4 drop-shadow-sm"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>;
const BotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-4 drop-shadow-sm"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>;
const MarketingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-4 drop-shadow-sm"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;


// --- Skills Data ---
// The `icon` property now holds a JSX component instead of an HTML string.
const skills = [
  // Web Development
  { name: 'JavaScript', level: 90, type: 'Web', icon: <JavascriptIcon /> },
  { name: 'Node.js & Express', level: 70, type: 'Web', icon: <NodejsIcon /> },
  { name: 'GitHub', level: 85, type: 'Web', icon: <GitHubIcon /> },
  { name: 'Responsive Design', level: 90, type: 'Web', icon: <ResponsiveIcon /> },
  { name: 'SEO Basics', level: 75, type: 'Web', icon: <SeoIcon /> },
  // Design
  { name: 'UI / UX Design', level: 85, type: 'Design', icon: <FigmaIcon /> },
  { name: 'Photoshop', level: 85, type: 'Design', icon: <PhotoshopIcon /> },
  { name: 'Figma', level: 60, type: 'Design', icon: <FigmaIcon /> },
  // Multimedia / Video Editing
  { name: 'Premiere Pro', level: 80, type: 'Video', icon: <PremiereProIcon /> },
  { name: 'YouTube / Reels Editing', level: 85, type: 'Video', icon: <EditingIcon /> },
  { name: 'Screen Recording & Voiceover', level: 80, type: 'Video', icon: <VoiceoverIcon /> },
  // Tools / Marketing
  { name: 'ChatGPT / Gemini', level: 85, type: 'Tools', icon: <BotIcon /> },
  { name: 'Social Media Marketing', level: 60, type: 'Tools', icon: <MarketingIcon /> }
];

// --- Main Component ---
function Skills() {
  // Animation variants for the container to orchestrate children animations.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for each skill card.
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      }
    },
  };

  return (
    <section id='skills' className="relative py-24 px-6 bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          My Skills
        </motion.h2>
        
        {/*
          We use Framer Motion for animations. This is cleaner and safer than using GSAP via the window object.
          The `motion.div` container uses `variants` to control the staggered animation of its children.
        */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-2xl p-6 flex flex-col items-center group relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Render the icon component directly */}
              {skill.icon}
              
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-100">{skill.name}</h3>
              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${skill.type === 'Web' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : skill.type === 'Design' ? 'bg-gradient-to-r from-green-400 to-green-600' : skill.type === 'Video' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 'bg-gradient-to-r from-cyan-400 to-blue-500'}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%`}}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="font-sans antialiased bg-gray-950 min-h-screen">
      {/* For a single-file component like this, lazy loading isn't necessary. 
        It's most effective when you have separate pages or very large, distinct components in different files.
      */}
      <Skills />
    </main>
  );
}
