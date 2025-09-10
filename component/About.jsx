"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id='about' className="relative py-24 px-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
      >
            <motion.h2
            className="text-5xl font-extrabold mb-6 drop-shadow-lg tracking-wide"
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            >
            About Me
            </motion.h2>
        <motion.p
          className="text-xl md:text-2xl leading-relaxed mb-6 drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I am a passionate web developer, crafting modern, responsive, and visually stunning websites. I have experience building projects like the Tesla Clone and my own EV showroom website. My goal is to deliver premium quality work that clients trust at first glance.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl leading-relaxed drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I love working with Next.js, React, Tailwind CSS, and Framer Motion to create interactive and high-end web experiences.
        </motion.p>
      </motion.div>
    </section>
  );
}
