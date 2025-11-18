"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OngoingProjectShowcase() {
  const project = {
    title: "Full-Stack Marketplace (In Progress)",
    subtitle: "Login, role-based access, product CRUD — work in progress",
    status: "In Progress",
    description: `This is a work-in-progress full-stack application demonstrating authentication, authorization, and product management for seller and user roles.\n\nKey features implemented so far: Login/Register, JWT-based auth, protected routes, CRUD for products (create/read/update/delete), seller dashboard skeleton, and role handling on backend.\n\nTech stack (frontend showcase): React, Tailwind CSS, Next.js routing (App Router compatible). Planned backend: Node.js, Express, MongoDB, JWT.`,
    highlights: [
      "Login & Register with JWT (backend integrated)",
      "User role + Seller role (protected routes)",
      "Product CRUD: Add / Edit / Delete",
      "Seller dashboard (UI & flows)",
      "Responsive UI ready for mobile",
    ],
    github: "https://github.com/Prayag0222/sasta-flipkart", // <- update
    demo: "#", // <- update when deployed
  };

  const copyRepo = async () => {
    try {
      await navigator.clipboard.writeText(project.github);
      // small feedback (can replace with nicer UI later)
      alert("GitHub link copied to clipboard");
    } catch {
      alert("Could not copy. Select and copy manually.");
    }
  };

  return (
    <section className="max-w-5xl mx-auto my-10 p-6 bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-xl">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex-1">
          <motion.h2
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="text-2xl md:text-3xl font-semibold text-white"
          >
            {project.title}
          </motion.h2>

          <p className="mt-2 text-sm text-gray-300 whitespace-pre-line">
            {project.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/30 text-yellow-300 text-sm font-semibold border border-yellow-400/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a1 1 0 01.894.553l3 6A1 1 0 0114 10H6a1 1 0 01-.894-1.447l3-6A1 1 0 0110 2z" />
              </svg>
              {project.status}
            </span>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-sm shadow"
            >
              View Code
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500 text-pink-300 text-sm hover:bg-pink-500/10 transition"
            >
              Demo (when deployed)
            </a>
          </div>

          <p className="mt-4 text-gray-200 text-sm whitespace-pre-line">
            {project.description}
          </p>

          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-green-600/40 text-green-300 text-base font-bold">
                  ✓
                </span>
                <span className="text-gray-200">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.github}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold shadow"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>

            <button
              onClick={copyRepo}
              className="px-4 py-2 rounded-lg border border-white/10 text-sm text-gray-200 hover:bg-white/10 transition"
            >
              Copy Repo Link
            </button>

            <a
              href={`https://wa.me/+918989819484?text=${encodeURIComponent(
                "Hi Prayag, I am interested in your ongoing project service"
              )}`}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition"
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>

        <div className="w-full md:w-56">
          <div className="rounded-lg overflow-hidden border border-white/10 bg-gray-800">
            <div className="relative w-full h-36">
              <Image
                src="/images/screenshot4.png"
                alt="Login/Register UI"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 224px"
              />
            </div>
            <div className="relative w-full h-36">
              <Image
                src="/images/screenshot1.png"
                alt="Dashboard & CRUD UI"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 224px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot gallery */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-white">Screenshots</h3>
        <p className="text-xs text-gray-400 mt-1">
          Some screens from the ongoing project build (auth, dashboard, CRUD).
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="rounded-lg overflow-hidden border border-white/10 bg-gray-800 relative h-40">
            <Image
              src="/images/screenshot4.png"
              alt="Login/Register UI"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-white/10 bg-gray-800 relative h-40">
            <Image
              src="/images/screenshot1.png"
              alt="Dashboard & CRUD UI"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-white/10 bg-gray-800 relative h-40">
            <Image
              src="/images/screenshot3.png"
              alt="Mobile Responsive UI"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>

        <div className="mt-3 text-xs text-gray-500">
          Tip: compress images (TinyPNG or similar) to keep the site fast.
        </div>
      </div>
    </section>
  );
}
