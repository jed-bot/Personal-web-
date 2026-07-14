import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

export default function Home() {
  return (
    <main>
      <ParticleField />
      <div className="noise-overlay" aria-hidden="true" />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <CaseStudy />
      <Contact />
      <Footer />
    </main>
  );
}
