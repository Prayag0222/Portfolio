"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const skills = [
  // Web Development
  { name: 'JavaScript', level: 90, type: 'Web' },
  { name: 'Node.js & Express', level: 70, type: 'Web' },
  { name: 'GitHub', level: 85, type: 'Web' },
  { name: 'Responsive Design', level: 90, type: 'Web' },
  { name: 'SEO Basics', level: 75, type: 'Web' },

  // Design
  { name: 'UI / UX Design', level: 85, type: 'Design' },
  { name: 'Photoshop', level: 85, type: 'Design' },
  { name: 'Figma', level: 60, type: 'Design' },

  // Multimedia / Video Editing
  { name: 'Premiere Pro (Motion Graphics)', level: 80, type: 'Video' },
  { name: 'YouTube / Reels Editing', level: 85, type: 'Video' },
  { name: 'Screen Recording & Voiceover', level: 80, type: 'Video' },

  // Tools / Marketing
  { name: 'ChatGPT / Gemini', level: 85, type: 'Tools' },
  { name: 'Social Media Marketing', level: 60, type: 'Tools' }
];

export default function Skills() {
  const skillRefs = useRef([]);

  useEffect(() => {
    skillRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);

  return (
    <section id='skills' className="relative py-24 px-6 bg-gray-900 text-white">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={el => skillRefs.current[index] = el}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl p-4 flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-2 text-center">{skill.name}</h3>
            <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-4 ${skill.type === 'Web' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : skill.type === 'Design' ? 'bg-gradient-to-r from-green-400 to-green-600' : skill.type === 'Video' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 'bg-gradient-to-r from-cyan-400 to-blue-500'}`}
                style={{ width: `${skill.level}%`, transition: 'width 1s' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}