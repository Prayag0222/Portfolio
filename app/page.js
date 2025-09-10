"use client";

import About from "../component/About";
import Hero from "../component/Hero";
import Projects from "../component/Projects";
import Skills from "../component/Skills";
import Contact from "../component/Contact";
import Navbar from "../component/Navbar";
import LenisWrapper from "../component/LenisWrapper";

export default function Home() {
  return (
    <LenisWrapper>
      <div className="relative  bg-gray-900 text-white">
        <Navbar />
        <main className="pt-24">
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          {/* Add your Projects section later */}
          <Projects/>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </LenisWrapper>
  );
}