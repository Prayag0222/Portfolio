// AboutSection.jsx
'use client';

import { motion } from 'framer-motion';

// small icons (kept inline for simplicity)
const ReactIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="-11.5 -10.23 23 20.46" fill="currentColor" aria-hidden>
    <circle r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextJsIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 128 128" fill="none" aria-hidden>
    <path fillRule="evenodd" clipRule="evenodd" d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM44.3314 96.0667V31.9333H51.2647V88.8333L83.6647 31.9333H90.598L58.198 88.8333L51.2647 96.0667H44.3314Z" fill="white"/>
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 54 33" aria-hidden>
    <path d="M13.5 0C6.042 0 0 6.042 0 13.5s6.042 13.5 13.5 13.5S27 20.958 27 13.5 20.958 0 13.5 0zM40.5 0C33.042 0 27 6.042 27 13.5S33.042 27 40.5 27 54 20.958 54 13.5 47.958 0 40.5 0z" fill="#38BDF8"></path>
  </svg>
);

const FramerMotionIcon = () => (
  <svg className="w-5 h-5 mr-2" viewBox="0 0 14 21" fill="none" aria-hidden>
    <path d="M7 0L0 7V14L7 21L14 14V0L7 0Z" fill="#E10098"></path>
    <path d="M0 7L7 14L14 7" fill="#0055FF"></path>
  </svg>
);

// small skill badge
function SkillBadge({ icon, children }) {
  return (
    <div className="flex items-center bg-slate-800/60 text-slate-100 backdrop-blur-sm border border-slate-700 rounded-lg px-3 py-2 text-sm font-medium">
      {icon}
      <span>{children}</span>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

// Replace with your actual WhatsApp number
const WA_LINK = 'https://wa.me/918989819484?text=Hi%20Prayag%2C%20I%20need%20a%20one-page%20website.';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 px-6 sm:py-24">
      {/* subtle teal accent shape (lightweight) */}
      <div aria-hidden className="absolute -right-36 top-6 w-96 h-96 rounded-full bg-teal-600/12 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          About me
        </motion.h2>

        <motion.p
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          <motion.span variants={itemVariants}>
            I'm <strong className="text-teal-300">Prayag</strong>, a full-stack web developer focused on fast,
            mobile-first websites and conversion-focused landing pages. I build clean, responsive sites that local
            shops and startups can use right away — typically in <strong>24–48 hours</strong>.
          </motion.span>
        </motion.p>

        <motion.p variants={itemVariants} className="mt-3 text-sm text-slate-400 max-w-xl mx-auto">
          Built examples:{" "}
          <a className="text-teal-300 underline" href="https://dynamo-ten.vercel.app" target="_blank" rel="noreferrer">Dynamo (EV demo)</a>{" "}
          ·{" "}
          <a className="text-teal-300 underline" href="https://tesla-clone-lyart-delta.vercel.app" target="_blank" rel="noreferrer">Tesla clone</a>
        </motion.p>

        <motion.div variants={itemVariants} className="mt-6 flex items-center justify-center gap-3">
          <a href="#services" className="inline-flex items-center px-5 py-3 rounded-md bg-teal-500 hover:bg-teal-600 text-slate-900 font-semibold shadow">
            View Services
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-3 rounded-md border border-slate-700 text-slate-200 hover:bg-slate-700/40">
            Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 border-t border-slate-700/50 pt-8">
          <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Skills
          </motion.h3>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            <SkillBadge icon={<ReactIcon />}>React</SkillBadge>
            <SkillBadge icon={<NextJsIcon />}>Next.js</SkillBadge>
            <SkillBadge icon={<TailwindIcon />}>Tailwind CSS</SkillBadge>
            <SkillBadge icon={<FramerMotionIcon />}>Framer Motion</SkillBadge>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-teal-500 hover:bg-teal-600 text-slate-900 rounded-full font-semibold shadow-lg">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
