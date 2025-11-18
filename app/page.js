"use client";

import About from "../component/About";
import Hero from "../component/Hero";
import Services from "../component/Services";
import Projects from "../component/Projects";
import Skills from "../component/Skills";
import Contact from "../component/Contact";
import Navbar from "../component/Navbar";
import LenisWrapper from "../component/LenisWrapper";
import OngoingProjectShowcase from "../component/Ongoing-project";

export default function Home() {
  return (
    <LenisWrapper>
      <div className="relative  bg-gray-900 text-white">
        <Navbar />
        <main className="pt-24">
          <section id="home">
            <Hero />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="projects">
          <Projects/>
          </section>
          <section id="ongoing-projects">
            <OngoingProjectShowcase />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="contact">
            <Contact />
          </section>
          {/* Add your Projects section later */}
        </main>
      </div>
    </LenisWrapper>
  );
}