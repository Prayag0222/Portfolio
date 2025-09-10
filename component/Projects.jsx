"use client";

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Tesla Clone',
    description: 'A full clone of Tesla website using Next.js, Tailwind CSS, and Framer Motion.',
    image: 'https://images.unsplash.com/photo-1602524811124-5e63d6c9e3d1',
    link: '#'
  },
  {
    title: 'EV Showroom',
    description: 'My own EV showroom website built with premium design and responsive layout.',
    image: 'https://images.unsplash.com/photo-1616628180693-cf63f7f8f84f',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id='projects' className="relative py-24 px-6 bg-gray-900 text-white">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-12 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 hover:shadow-3xl transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2, duration: 1 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 drop-shadow">{project.title}</h3>
              <p className="text-lg text-white/90 mb-4">{project.description}</p>
              <a href={project.link} className="inline-block bg-white text-indigo-600 font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}