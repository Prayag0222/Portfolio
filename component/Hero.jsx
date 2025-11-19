'use client';

import { motion } from 'framer-motion';

// Professional, cleaned-up Hero (one-file replacement)
// Replace 91XXXXXXXXXX with your WhatsApp number (no +, no spaces)
const WA_LINK = 'https://wa.me/918989819484?text=Hi%20Prayag%2C%20I%20need%20a%20one-page%20website.';

function Hero() {
  const titleText = "Hi — I’m Prayag.";
  const headingText = 'I build fast, mobile-first websites that get local shops online & accepting orders in 48 hours.';
  const subHeadingText =
    'Fast delivery • Affordable • SEO-ready • WhatsApp ordering integrated';

  // split into words for calmer hover effect
  const headingWords = headingText.split(' ');
  const subHeadingWords = subHeadingText.split(' ');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-slate-900 text-slate-50 px-6 md:px-12"
      aria-label="Hero section"
    >
      {/* Subtle animated gradient backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-800 opacity-98"
      />

      {/* Soft layered accent shape */}
      <div
        aria-hidden="true"
        className="absolute -right-44 -top-28 w-[520px] h-[520px] rounded-full blur-3xl opacity-22 bg-teal-500/30 transform-gpu rotate-12"
      />

      <div className="container mx-auto max-w-5xl text-center">
        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">{titleText}</span>
        </motion.h1>

        {/* Heading (word-level hover for calmer interaction) */}
        <motion.h2
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200/98 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
        >
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2 last:mr-0"
              whileHover={{ scale: 1.06, color: '#14B8A6' }} // teal-400 color for cleaner modern tone
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Subheading (constrained width for readability) */}
        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.24, duration: 0.6 }}
        >
          {subHeadingWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-1 last:mr-0"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.12 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* CTAs */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg bg-teal-500 hover:bg-teal-600 text-slate-900 font-semibold px-6 py-3 shadow-lg transition transform ring-0 hover:ring-2 hover:ring-teal-300/30"
            aria-label="View Services"
          >
            View Services
          </a>

          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 justify-center rounded-lg border border-teal-500 text-teal-400 hover:bg-teal-500/8 px-6 py-3 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
            aria-label="Chat on WhatsApp"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.12 }}
          >
            {/* WhatsApp icon (simple) */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="opacity-95"
            >
              <path
                d="M20.52 3.48A11.93 11.93 0 0012 1.5C6.21 1.5 1.5 6.21 1.5 12c0 2.11.62 4.07 1.7 5.7L1.5 22.5l4.39-1.15A11.96 11.96 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-1.89-.53-3.65-1.48-5.02z"
                fill="#14B8A6"
              />
              <path
                d="M17.2 14.05c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.18-.18.2-.36.23-.66.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.5-1.76-1.68-2.06-.17-.3-.02-.46.12-.6.12-.12.27-.3.4-.45.13-.15.17-.25.28-.42.1-.16.05-.3-.02-.45-.08-.15-.68-1.62-.93-2.24-.24-.59-.49-.51-.68-.52l-.58-.01c-.2 0-.52.07-.79.35-.27.28-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.28 5.15 4.6 3.03 1.33 3.03.89 3.57.84.54-.05 1.77-.72 2.02-1.41.25-.69.25-1.28.18-1.41-.08-.12-.28-.2-.58-.35z"
                fill="#06372F"
              />
            </svg>

            <span>Chat on WhatsApp</span>
          </motion.a>
        </div>

        <p className="mt-4 text-xs text-slate-400">Fast delivery • Affordable • Mobile friendly</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="relative font-sans antialiased min-h-screen bg-slate-900 text-slate-50">
      {/* subtle animated gradient (keeps perf good) */}
      <style>{`
        .soft-gradient {
          background: linear-gradient(180deg, rgba(15,23,42,0.97) 0%, rgba(2,6,23,0.95) 50%, rgba(15,23,42,0.98) 100%);
        }
      `}</style>

      <div className="soft-gradient fixed inset-0 -z-20" />
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
