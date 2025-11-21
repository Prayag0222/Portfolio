"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import OngoingProjectShowcase from "../components/Ongoing-project";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import LenisWrapper from "../components/LenisWrapper";

export default function Home() {
  return (
    <LenisWrapper>
      <div className="bg-[#020617] min-h-screen">
        <Navbar />
        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="ongoing-projects">
            <OngoingProjectShowcase />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
     </LenisWrapper>
  );
}
