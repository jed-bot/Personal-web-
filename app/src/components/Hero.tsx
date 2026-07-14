"use client";
import { motion } from "framer-motion";
import { FadeUp } from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div className="hero-text">
          <FadeUp>
            <div className="hero-greeting">
              <span className="hero-greeting-dot" />
              Hello, I&apos;m
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="hero-name">
              Jed Nikko<br />
              <span className="accent">San Agustin</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="hero-title">Full-Stack Developer</p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="hero-desc">
              I build end-to-end solutions that are fast, scalable, and
              thoughtfully designed. From mobile apps to cloud infrastructure,
              I turn complex problems into clean software.
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </FadeUp>
        </div>
        <div className="hero-portrait">
          <FadeUp delay={0.2}>
            <div className="hero-portrait-ring" />
            <div className="hero-portrait-glow" />
            <img src="/pfp.jpg" alt="Jed Nikko San Agustin" className="hero-portrait-img" />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
