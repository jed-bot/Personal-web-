"use client";
import { motion } from "framer-motion";
import { heroVariants, heroChild, heroPortrait } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="hero">
      <GradientMesh />
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-greeting" variants={heroChild}>
            <span className="hero-greeting-dot" />
            Hello, I&apos;m
          </motion.div>
          <motion.h1 className="hero-name" variants={heroChild}>
            Jed Nikko<br />
            <span className="accent">San Agustin</span>
          </motion.h1>
          <motion.p className="hero-title" variants={heroChild}>
            Full-Stack Developer
          </motion.p>
          <motion.p className="hero-desc" variants={heroChild}>
            I build end-to-end solutions that are fast, scalable, and
            thoughtfully designed. From mobile apps to cloud infrastructure,
            I turn complex problems into clean software.
          </motion.p>
          <motion.div className="hero-actions" variants={heroChild}>
            <a href="#projects" className="btn btn-primary">
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </motion.div>
        </motion.div>

        <div className="hero-portrait">
          <motion.div
            className="hero-portrait-inner"
            variants={heroPortrait}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-portrait-ring" />
            <div className="hero-portrait-glow" />
            <img src="/pfp.jpg" alt="Jed Nikko San Agustin" className="hero-portrait-img" />
          </motion.div>
          <FloatingSocials />
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-indicator-line" />
      </div>
    </section>
  );
}

function FloatingSocials() {
  const links = [
    { label: "GitHub", href: "https://github.com/jed-bot", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jed-nikko-san-agustin-91239a327/", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { label: "Facebook", href: "https://www.facebook.com/jednikkooo", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
    { label: "Gmail", href: "mailto:jednikkosanagustin@gmail.com", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg> },
  ];

  return (
    <div className="hero-floating-socials">
      {links.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-icon"
          aria-label={s.label}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

function GradientMesh() {
  return (
    <div className="gradient-mesh" aria-hidden="true">
      <div className="gradient-mesh-orb gradient-mesh-orb--1" />
      <div className="gradient-mesh-orb gradient-mesh-orb--2" />
      <div className="gradient-mesh-orb gradient-mesh-orb--3" />
    </div>
  );
}
