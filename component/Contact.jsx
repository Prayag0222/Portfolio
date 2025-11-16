"use client";

import React, { useState } from "react";

/**
 * ContactSection.jsx
 * Single-file contact section with form (FormSubmit), WhatsApp CTA, mailto and social links.
 *
 * How to use:
 * 1. Replace PHONE, EMAIL, LINKEDIN_URL, GITHUB_URL below.
 * 2. If you want your form submissions emailed, set `FORM_ACTION` to:
 *    https://formsubmit.co/youremail@example.com  (or create your own FormSubmit endpoint)
 * 3. Optional: Replace icons with your preferred SVGs.
 */

const PHONE = "918989819484"; // no plus sign, only digits for wa.me/tel links
const DISPLAY_PHONE = "+91 8989819484"; // how you want the number displayed on UI
const EMAIL = "raj.prayag222@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/prayag-yadav-a84b87384/";
const GITHUB_URL = "https://github.com/Prayag0222";
// FormSubmit endpoint (no backend required)
const FORM_ACTION = "https://formsubmit.co/your-email@example.com"; // change this

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, done: false, error: null });

  function handleChange(e) {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function validate() {
    if (!formState.name.trim()) return "Please enter your name.";
    if (!formState.email.trim() || !/^\S+@\S+\.\S+$/.test(formState.email)) return "Enter a valid email.";
    if (!formState.message.trim() || formState.message.length < 10) return "Message must be at least 10 characters.";
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
      // Use FormSubmit (simple) — form posts directly to the action URL.
      // We'll submit using fetch so we can show inline success message.
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);
      // optional hidden fields for FormSubmit: _next, _subject, _captcha
      formData.append("_subject", `New contact from Portfolio (${formState.name})`);
      formData.append("_honey", ""); // honeypot for spam
      formData.append("_next", window.location.href); // redirect fallback

      const res = await fetch(FORM_ACTION, { method: "POST", body: formData, mode: "no-cors" });

      // mode:no-cors prevents us from reading response, but POST will succeed.
      // We'll optimistically assume success:
      setStatus({ submitting: false, done: true, error: null });
      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ submitting: false, done: false, error: "Failed to send. Try again later." });
    }
  }

  const waLink = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hi Prayag, I want to discuss a website project.")}`;

  return (
    <section id="contact" className="relative py-20 px-5 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <p className="mt-2 text-gray-300 max-w-xl mx-auto">
            Fast response for website projects, quick fixes, and custom landing pages. Prefer WhatsApp? Tap the green button.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Card */}
          <div className="bg-gray-800/40 p-6 rounded-2xl border border-white/6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Get in touch</h3>

            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <strong>Phone:</strong>
                <div className="mt-1">
                  <a href={`tel:+${PHONE}`} className="text-white hover:underline">{DISPLAY_PHONE}</a>
                </div>
              </div>

              <div>
                <strong>Email:</strong>
                <div className="mt-1">
                  <a href={`mailto:${EMAIL}`} className="text-white hover:underline">{EMAIL}</a>
                </div>
              </div>

              <div>
                <strong>Work & socials:</strong>
                <div className="mt-2 flex gap-3">
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-xs px-3 py-2 border rounded text-white">LinkedIn</a>
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-xs px-3 py-2 border rounded text-white">GitHub</a>
                </div>
              </div>

              <div>
                <strong>Quick action:</strong>
                <div className="mt-2 flex gap-3">
                  <a href={waLink} target="_blank" rel="noreferrer" className="px-3 py-2 bg-green-600 rounded text-white">Message on WhatsApp</a>
                  <a href={`mailto:${EMAIL}?subject=Website%20Inquiry`} className="px-3 py-2 border rounded text-white">Email me</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-800/40 p-6 rounded-2xl border border-white/6 shadow-sm" action={FORM_ACTION} method="POST">
            {/* Hidden input for FormSubmit */}
            <input type="hidden" name="_subject" value={`New contact from Portfolio`} />
            <input type="hidden" name="_next" value={typeof window !== "undefined" ? window.location.href : ""} />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <label className="block text-sm text-gray-300 mb-2">
              Your name
              <input
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="mt-2 block w-full bg-gray-900/60 border border-white/6 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="e.g., Ramesh Kumar"
                required
              />
            </label>

            <label className="block text-sm text-gray-300 mb-2">
              Email
              <input
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="mt-2 block w-full bg-gray-900/60 border border-white/6 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="block text-sm text-gray-300 mb-2">
              Message
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows="5"
                className="mt-2 block w-full bg-gray-900/60 border border-white/6 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Tell me about your website or the fix you need..."
                required
              />
            </label>

            <div className="mt-4 flex items-center gap-3">
              <button
                type="submit"
                disabled={status.submitting}
                className="px-4 py-2 bg-purple-600 rounded text-white font-semibold disabled:opacity-60"
              >
                {status.submitting ? "Sending…" : "Send Message"}
              </button>

              <a href={waLink} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded text-white">
                Message on WhatsApp
              </a>
            </div>

            <div className="mt-4 text-sm">
              {status.error && <p className="text-rose-400">{status.error}</p>}
              {status.done && <p className="text-green-400">Thanks — message sent. I will reply soon.</p>}
              {!status.done && !status.error && <p className="text-gray-400">Prefer quick replies? Use WhatsApp button.</p>}
            </div>
          </form>
        </div>
      </div>

      {/* Floating WhatsApp Button (mobile-friendly) */}
      <a
        href={`https://wa.me/${PHONE}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-green-600 text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM15.5 11.5l-1.2 2.5a.5.5 0 01-.45.3H10.6a.5.5 0 01-.45-.3L8.9 11.5" /></svg>
      </a>
    </section>
  );
}
