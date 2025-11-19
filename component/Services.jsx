"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * ServicesSection.jsx
 * Single-file Services & Pricing section for a freelancer portfolio.
 *
 * Quick edits:
 * - Replace waNumber with your number (no + or spaces).
 * - Change currencySymbol or package prices if needed.
 * - Import & render <ServicesSection /> where you want the section to appear.
 */

const waNumber = "91XXXXXXXXXX"; // replace with your number (no +)
const currencySymbol = "₹";

const PACKAGES = [
  {
    id: "onepage",
    title: "One-Page Business Website",
    price: 800,
    delivery: "24–48 hours",
    benefits:["One-Page — Ready for WhatsApp orders & maps — 24–48 hr delivery."],
    bullets: [
      "Mobile-first responsive design",
      "Hero, About, Services, Gallery, Contact + Google Maps",
      "WhatsApp contact button & SEO meta tags",
      "Deployed on Vercel / Netlify",
      "1 revision included",
    ],
    tag: "Best for local shops",
  },
  {
    id: "landing",
    title: "Landing Page / Product Page",
    price: 1800,
    delivery: "2–3 days",
    bullets: [
      "High-converting layout (CTA focus)",
      "Animations with Framer Motion (if requested)",
      "Responsive across devices & fast performance",
      "Google-friendly structure (meta + OG images)",
      "2 revisions included",
    ],
    tag: "Best for promos & product launches",
  },
  {
    id: "fixes",
    title: "Quick Fixes & Redesign",
    price: 400,
    delivery: "Same day / 24 hours",
    bullets: [
      "Responsive issues & CSS bugs",
      "Small React / component fixes",
      "Layout alignment & image optimization",
      "Vercel / Netlify deployment help",
    ],
    tag: "Ideal for urgent fixes",
  },
];

function PriceBadge({ price }) {
  return (
    <div className="inline-flex items-baseline gap-1">
      <span className="text-2xl font-bold">{currencySymbol}{price}</span>
      <span className="text-xs text-gray-400">starting</span>
    </div>
  );
}

/* Prefill WhatsApp message for ordering a package */
function waLinkFor(pkgTitle) {
  const txt = `Hi Prayag, I want the "${pkgTitle}" package. Please share details.`;
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(txt)}`;
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Services & Pricing</h2>
          <p className="mt-3 text-center text-gray-300 max-w-2xl mx-auto">
            Fast, professional web solutions for shops, creators, and startups. Clear prices, quick delivery, and friendly support.
          </p>
        </motion.div>

        {/* Packages grid */}
        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-gray-800/30 border border-white/6 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{pkg.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{pkg.tag}</p>
                </div>
                <PriceBadge price={pkg.price} />
              </div>

              <p className="mt-4 text-gray-300 text-sm">{pkg.benefits} </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-300 flex-1">
                {pkg.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="inline-block w-6 h-6 bg-white/6 rounded-full text-xs flex items-center justify-center text-gray-200">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-300 text-sm">Keep the limited ₹500 first-3 clients promo </p>

              <div className="mt-6 flex gap-3 items-center">
                <a
                  href={waLinkFor(pkg.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
                >
                  Order via WhatsApp
                </a>

                <button
                  onClick={() => window.location.hash = "#contact"}
                  className="ml-auto text-sm px-3 py-2 border border-white/8 rounded-md text-white hover:bg-white/5"
                >
                  Ask a question
                </button>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Delivery: <strong className="text-gray-200">{pkg.delivery}</strong>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How I work + FAQ */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h4 className="text-lg font-semibold">How I work</h4>
            <ol className="mt-4 space-y-3 text-gray-300">
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-semibold">1</div>
                <div>
                  <div className="font-semibold">Discuss</div>
                  <div className="text-sm text-gray-400">Share requirements on WhatsApp or contact form.</div>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-semibold">2</div>
                <div>
                  <div className="font-semibold">Build</div>
                  <div className="text-sm text-gray-400">I build the site and share a draft for review.</div>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-semibold">3</div>
                <div>
                  <div className="font-semibold">Deliver</div>
                  <div className="text-sm text-gray-400">I deploy the site and hand over files + support.</div>
                </div>
              </li>
            </ol>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h4 className="text-lg font-semibold">FAQ</h4>
            <div className="mt-4 space-y-3 text-sm text-gray-300">
              <div>
                <div className="font-medium">Do you take advance?</div>
                <div className="text-gray-400">Yes — typically ₹200 advance for one-page sites; rest on delivery.</div>
              </div>
              <div>
                <div className="font-medium ">How to pay?</div>
                <div className="text-gray-400">Pay via GPay/PhonePe – ₹200 advance, rest on delivery.</div>
              </div>

              <div>
                <div className="font-medium">Do you provide hosting?</div>
                <div className="text-gray-400">I can deploy on Vercel/Netlify or guide you to use any hosting. No extra charge for basic deployment.</div>
              </div>

              <div>
                <div className="font-medium">Can you add payments or booking?</div>
                <div className="text-gray-400">Yes — I can add payment gateways or booking features as custom work (price varies).</div>
              </div>

              <div>
                <div className="font-medium">How do I request changes?</div>
                <div className="text-gray-400">You can request the included revisions via WhatsApp; extra work is billed hourly.</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href={waLinkFor("One-Page Business Website")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md text-sm font-semibold hover:scale-[1.02]"
          >
            Order Now — Get Online in 24–48 hours
          </a>
        </div>
        <div className="mt-10 text-center">
          <a
            href={waLinkFor("One-Page Business Website")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md text-sm font-semibold hover:scale-[1.02]"
          >
           Limited: One-page site ₹500 — only for first 3 clients this week.
          </a>
        </div>
      </div>
    </section>
  );
}
