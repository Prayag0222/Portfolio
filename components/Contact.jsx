'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Github, Linkedin, MessageCircle, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';

// --- CONFIG ---
const PHONE = "918989819484"; 
const DISPLAY_PHONE = "+91 89898 19484";
const EMAIL = "raj.prayag222@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/prayag-yadav-a84b87384/";
const GITHUB_URL = "https://github.com/Prayag0222";
const LOCATION = "Bhopal, India";
const FORM_ACTION = "https://formsubmit.co/raj.prayag222@gmail.com"; 
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Prayag, I just viewed your portfolio. I have a project in mind and would like to discuss your availability."
);
const WHATSAPP_LINK = `https://wa.me/${PHONE}?text=${WHATSAPP_MESSAGE}`;

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// --- COMPONENT ---
function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, done: false, error: null });

  function handleChange(e) {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
  }


  // Basic validation
  function validate() {
    if (!formState.name.trim()) return "Name is required.";
    if (!formState.email.trim() || !/^\S+@\S+\.\S+$/.test(formState.email)) return "Valid email is required.";
    if (!formState.message.trim() || formState.message.length < 10) return "Message must be at least 10 chars.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ submitting: false, done: false, error });
      return;
    }

    setStatus({ submitting: true, done: false, error: null });

    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);
      formData.append("_subject", `Portfolio Lead: ${formState.name}`);
      formData.append("_honey", "");
      formData.append("_next", window.location.href);

      // Using no-cors mode for formsubmit.co since we can't read the response anyway in client-side only
      await fetch(FORM_ACTION, { method: "POST", body: formData, mode: "no-cors" });

      // Simulate success (since no-cors is opaque)
      setTimeout(() => {
        setStatus({ submitting: false, done: true, error: null });
        setFormState({ name: "", email: "", message: "" });
      }, 1000);
    } catch (err) {
      setStatus({ submitting: false, done: false, error: "Transmission failed. Please try again." });
    }
  }

  return (
    <section id="contact" className="section-fade py-24 bg-[#020617] relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
        >
          
          {/* LEFT COLUMN: Contact Info */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase">Get In Touch</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                Let's build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">legendary together.</span>
              </h2>
              <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-md">
                Whether you have a specific project in mind or just want to chat about the latest tech, my inbox is always open.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 space-y-6">
              {/* Contact Item: Email */}
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all duration-300">
                  <Mail className="w-5 h-5 text-slate-300 group-hover:text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Email</p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">{EMAIL}</p>
                </div>
              </a>

              {/* Contact Item: Phone */}
              <a href={`tel:+${PHONE}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-all duration-300">
                  <Phone className="w-5 h-5 text-slate-300 group-hover:text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Phone</p>
                  <p className="text-white font-medium group-hover:text-purple-400 transition-colors">{DISPLAY_PHONE}</p>
                </div>
              </a>

              {/* Contact Item: Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Location</p>
                  <p className="text-white font-medium">{LOCATION}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 flex gap-4">
               <SocialBtn href={GITHUB_URL} icon={Github} label="GitHub" />
               <SocialBtn href={LINKEDIN_URL} icon={Linkedin} label="LinkedIn" />
               <SocialBtn href={WHATSAPP_LINK} icon={MessageCircle} label="WhatsApp" />
            </motion.div>
          </div>


          {/* RIGHT COLUMN: Premium Form */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20" />
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              
              <h3 className="text-2xl font-bold text-white mb-6">Send a message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Feedback Messages */}
                <AnimatePresence mode="wait">
                  {status.error && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
                      {status.error}
                    </motion.div>
                  )}
                  {status.done && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-2">
                      <CheckCircle2 size={16} /> Message sent successfully!
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting || status.done}
                  className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                    status.done 
                    ? 'bg-emerald-500 text-white cursor-default' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 text-white'
                  }`}
                  onSubmit={handleSubmit}
                >
                  {status.submitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : status.done ? (
                    <>Sent <CheckCircle2 size={20} /></>
                  ) : (
                    <>Send Message <ArrowRight size={20} /></>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Floating WhatsApp Button (Bottom Right) */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-8 right-8 z-50 group"
      >
        <span className="absolute -top-12 right-0 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg whitespace-nowrap">
          Chat on WhatsApp
        </span>
        <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 ring-4 ring-[#25D366]/30">
          <MessageCircle className="w-7 h-7 text-white fill-current" />
        </div>
      </motion.a>

    </section>
  );
}

// --- SUBCOMPONENT: SOCIAL BUTTON ---
const SocialBtn = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 hover:border-white/20 transition-all duration-300"
    aria-label={label}
  >
    <Icon size={20} />
  </a>
);

export default function App() {
  return <ContactSection />;
}