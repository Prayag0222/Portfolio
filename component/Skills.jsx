// SkillsSection.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* ---------- Inline SVG icon components (lightweight, no external requests) ---------- */

const JsIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 128 128" aria-hidden>
    <rect width="128" height="128" rx="20" fill="#F7DF1E" />
    <path d="M46 94l9-6c1 6 4 10 10 10 5 0 8-2 8-9V53h12v40c0 15-9 22-23 22-13 0-22-7-26-18zM83 94l9-6c1 6 4 10 10 10 5 0 8-2 8-9V53h12v40c0 15-9 22-23 22-13 0-22-7-26-18z" fill="#000"/>
  </svg>
);

const NodeIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 128 128" aria-hidden>
    <rect width="128" height="128" rx="20" fill="#3C873A" />
    <path d="M64 28l36 20v40l-36 20L28 88V48l36-20z" fill="#06372F"/>
  </svg>
);

const GitIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" aria-hidden>
    <rect width="24" height="24" rx="4" fill="#0f172a"/>
    <path d="M7 7h3l6 6-3 3-6-6v-3z" fill="#fff"/>
  </svg>
);

const ResponsiveIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="4" width="14" height="16" rx="2" fill="#0f172a"/>
    <rect x="19" y="6" width="2" height="12" rx="1" fill="#0369a1"/>
    <circle cx="10" cy="18" r="0.8" fill="#fff"/>
  </svg>
);

const SeoIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" aria-hidden>
    <rect width="24" height="24" rx="4" fill="#0f172a"/>
    <path d="M10 14l6-6" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="15" cy="9" r="5" stroke="#34d399" strokeWidth="1.6" fill="none" />
  </svg>
);

const FigmaIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 128 128" aria-hidden>
    <rect width="128" height="128" rx="20" fill="#0f172a" />
    <g transform="translate(36,24)">
      <circle cx="18" cy="12" r="12" fill="#F24E1E"/>
      <rect x="18" y="0" width="12" height="24" rx="6" fill="#A259FF"/>
      <circle cx="18" cy="36" r="12" fill="#FF7262"/>
      <circle cx="6" cy="12" r="6" fill="#1ABCFE"/>
      <circle cx="18" cy="12" r="6" fill="#0f172a"/>
    </g>
  </svg>
);

const PhotoshopIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 128 128" aria-hidden>
    <rect width="128" height="128" rx="20" fill="#001E36"/>
    <text x="64" y="78" textAnchor="middle" fontSize="52" fill="#31A8FF" fontFamily="Arial">Ps</text>
  </svg>
);

const PremiereIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 128 128" aria-hidden>
    <rect width="128" height="128" rx="20" fill="#3A1F6C"/>
    <text x="64" y="78" textAnchor="middle" fontSize="42" fill="#FF8A00" fontFamily="Arial">Pr</text>
  </svg>
);

const EditIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" aria-hidden>
    <rect width="24" height="24" rx="4" fill="#0f172a"/>
    <path d="M5 20l7-3 3-7 4-4-4-4-4 4-7 3v7z" fill="#f59e0b"/>
  </svg>
);

const VoiceIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" aria-hidden>
    <rect width="24" height="24" rx="4" fill="#0f172a"/>
    <path d="M12 5a3 3 0 00-3 3v4a3 3 0 006 0V8a3 3 0 00-3-3z" fill="#14B8A6"/>
    <path d="M19 13v1a7 7 0 01-14 0v-1" stroke="#0ea5a4" strokeWidth="1.4" fill="none"/>
  </svg>
);

const AiIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" aria-hidden>
    <rect width="24" height="24" rx="4" fill="#0f172a"/>
    <path d="M6 7h12v10H6z" fill="#06b6d4"/>
    <text x="12" y="16" textAnchor="middle" fill="#020617" fontSize="10" fontFamily="Arial">AI</text>
  </svg>
);

const SocialIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" aria-hidden>
    <rect width="24" height="24" rx="4" fill="#0f172a"/>
    <circle cx="12" cy="10" r="3" fill="#ff66b3"/>
    <path d="M4 20c2-3 6-3 8-2s6 1 8 2" stroke="#ff66b3" strokeWidth="1.4" fill="none"/>
  </svg>
);

/* ---------- data ---------- */
const skills = [
  { name: 'JavaScript', level: 90, type: 'Web', icon: <JsIcon /> },
  { name: 'Node.js & Express', level: 70, type: 'Web', icon: <NodeIcon /> },
  { name: 'GitHub', level: 85, type: 'Web', icon: <GitIcon /> },
  { name: 'Responsive Design', level: 90, type: 'Web', icon: <ResponsiveIcon /> },
  { name: 'SEO Basics', level: 75, type: 'Web', icon: <SeoIcon /> },
  { name: 'UI / UX (Figma)', level: 85, type: 'Design', icon: <FigmaIcon /> },
  { name: 'Photoshop', level: 70, type: 'Design', icon: <PhotoshopIcon /> },
  { name: 'Premiere Pro', level: 75, type: 'Video', icon: <PremiereIcon /> },
  { name: 'Editing (Reels)', level: 85, type: 'Video', icon: <EditIcon /> },
  { name: 'Voiceover & Screen Rec', level: 80, type: 'Video', icon: <VoiceIcon /> },
  { name: 'AI / ChatGPT tools', level: 85, type: 'Tools', icon: <AiIcon /> },
  { name: 'Social Media Marketing', level: 60, type: 'Tools', icon: <SocialIcon /> },
];

/* ---------- variants ---------- */
const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

/* ---------- component ---------- */
export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tools & Technologies I Use
        </motion.h2>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((s, idx) => (
            <motion.article
              key={s.name + idx}
              variants={item}
              className="relative rounded-xl bg-slate-800/60 border border-slate-700 p-5 flex flex-col items-center text-center shadow-md hover:shadow-xl transform hover:-translate-y-2 transition"
            >
              <div className="mb-2">{s.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-slate-50">{s.name}</h3>

              <div className="w-full mt-2">
                <div
                  className="w-full h-3 bg-slate-700 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={s.level}
                  aria-label={`${s.name} skill level`}
                >
                  <motion.div
                    className={
                      `h-full ${s.type === 'Web' ? 'bg-gradient-to-r from-indigo-500 via-teal-400 to-cyan-400' :
                                s.type === 'Design' ? 'bg-gradient-to-r from-emerald-400 to-teal-400' :
                                s.type === 'Video' ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                                'bg-gradient-to-r from-cyan-400 to-blue-500'}`
                    }
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1.1, ease: 'easeInOut' }}
                    style={{ minWidth: '6%' }}
                  />
                </div>
              
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <p className="text-slate-400 max-w-2xl mx-auto">
            I build responsive websites, landing pages and visuals — if you'd like any custom sample or portfolio demo, <a className="text-teal-300 underline" href="#contact">get in touch</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
