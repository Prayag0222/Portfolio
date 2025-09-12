'use client';

import { motion } from 'framer-motion';

// --- ICONS ---
// Simple SVG icons for skills to keep everything self-contained.
const ReactIcon = () => (
  <svg className="w-6 h-6 mr-2" viewBox="-11.5 -10.23 23 20.46" fill="currentColor">
    <circle r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NextJsIcon = () => (
    <svg className="w-6 h-6 mr-2" viewBox="0 0 128 128" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128ZM44.3314 96.0667V31.9333H51.2647V88.8333L83.6647 31.9333H90.598L58.198 88.8333L51.2647 96.0667H44.3314Z" fill="white"/>
    </svg>
);

const TailwindIcon = () => (
    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 54 33">
        <path d="M13.5 0C6.042 0 0 6.042 0 13.5s6.042 13.5 13.5 13.5S27 20.958 27 13.5 20.958 0 13.5 0zM40.5 0C33.042 0 27 6.042 27 13.5S33.042 27 40.5 27 54 20.958 54 13.5 47.958 0 40.5 0z" fill="#38BDF8"></path>
    </svg>
);

const FramerMotionIcon = () => (
    <svg className="w-6 h-6 mr-2" viewBox="0 0 14 21" fill="none">
        <path d="M7 0L0 7V14L7 21L14 14V0L7 0Z" fill="#E10098"></path>
        <path d="M0 7L7 14L14 7" fill="#0055FF"></path>
    </svg>
);


// --- COMPONENTS ---

// Component for the animated background effect (unchanged from original)
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-gray-950 to-purple-950 opacity-95"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-gradient-radial from-violet-600/30 to-transparent blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-gradient-radial from-blue-600/30 to-transparent blur-3xl opacity-20 animate-pulse-fast"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-gradient-radial from-purple-600/30 to-transparent blur-3xl opacity-20 animate-pulse-slow"></div>
      </div>
    </div>
  );
}

// Reusable component for displaying skills
function SkillBadge({ icon, children }) {
    return (
        <div className="flex items-center bg-gray-800/50 text-sky-200 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-base font-medium">
            {icon}
            <span>{children}</span>
        </div>
    );
}

// Variants for staggered animations (unchanged from original)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// The main About section component, now with skills and a CTA button
function About() {
  return (
    <section id='about' className="relative py-24 px-6 text-white min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <motion.p
            className="text-lg md:text-xl leading-relaxed mb-4 max-w-2xl"
            variants={itemVariants}
          >
            I am a passionate web developer, crafting modern, responsive, and visually stunning websites. I have experience building projects like the Tesla Clone and my own EV showroom website. My goal is to deliver premium quality work that clients trust at first glance.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            I love working with the latest technologies to create interactive and high-end web experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="my-10 h-px w-2/3 bg-white/20" />

          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
          >
            My Skills
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
              <SkillBadge icon={<ReactIcon />}>React</SkillBadge>
              <SkillBadge icon={<NextJsIcon />}>Next.js</SkillBadge>
              <SkillBadge icon={<TailwindIcon />}>Tailwind CSS</SkillBadge>
              <SkillBadge icon={<FramerMotionIcon />}>Framer Motion</SkillBadge>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <button className="bg-sky-500/80 hover:bg-sky-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-sky-500/20 backdrop-blur-sm border border-sky-400/50 transition-all duration-300 transform hover:scale-105">
                Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="font-sans antialiased bg-gray-950 min-h-screen">
      <About />
      <style>
        {`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }
        @keyframes pulse-fast {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.35;
          }
        }
        .animate-pulse-slow {
            animation: pulse-slow 8s infinite ease-in-out;
        }
        .animate-pulse-fast {
            animation: pulse-fast 5s infinite ease-in-out;
        }
        `}
      </style>
    </div>
  );
}
