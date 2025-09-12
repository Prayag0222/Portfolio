"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

// SVG Icon Components for better readability and reuse
const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const UserIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MessageSquareIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API endpoint
    console.log('Form data submitted:', formData);
    setStatus('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
  };
  
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  return (
    <section id='contact' className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-green-500/30 rounded-full blur-3xl opacity-50"></div>

      <motion.div 
        className="max-w-4xl mx-auto z-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-4 tracking-tight"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12"
          variants={itemVariants}
        >
          Have a project in mind, a question, or just want to say hello? Drop me a line. I'm excited to hear from you and explore how we can create something amazing together.
        </motion.p>

        <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700"
            variants={itemVariants}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900/50 border border-gray-600 rounded-lg py-3 pr-4 pl-12 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
              />
            </div>
            <div className="relative">
              <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900/50 border border-gray-600 rounded-lg py-3 pr-4 pl-12 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
              />
            </div>
            <div className="relative">
                <MessageSquareIcon className="absolute left-4 top-5 h-5 w-5 text-gray-400" />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-900/50 border border-gray-600 rounded-lg py-3 pr-4 pl-12 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 resize-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-indigo-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-500 hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
            {status && <p className="text-center text-green-400 mt-4">{status}</p>}
          </form>
        </motion.div>

        <motion.div className="text-center mt-16" variants={itemVariants}>
            <p className="text-gray-400 mb-6">Or connect with me on social media</p>
            <div className="flex justify-center items-center space-x-8">
              {/* Replace # with your actual social media links */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <LinkedinIcon className="w-8 h-8"/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="GitHub">
                <GithubIcon className="w-8 h-8"/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
                <InstagramIcon className="w-8 h-8"/>
              </a>
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
