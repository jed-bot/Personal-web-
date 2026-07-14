"use client";

import { useRef, useEffect, useState, useMemo } from "react";

const nameWords = ["Jed Nikko"];
const surnameLetters = "San Agustin".split("");

const socialLinks = [
  { label: "GitHub", href: "https://github.com/jed-bot", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jed-nikko-san-agustin-91239a327/", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: "Facebook", href: "https://www.facebook.com/jednikkooo", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { label: "Gmail", href: "mailto:jednikkosanagustin@gmail.com", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg> },
];

const blobContainerStyle: React.CSSProperties = {
  position: "absolute",
  inset: "-40px",
  zIndex: 0,
  pointerEvents: "none",
  overflow: "hidden",
  borderRadius: "var(--radius-2xl)",
};

const blob1Style: React.CSSProperties = {
  position: "absolute",
  top: "10%",
  left: "-10%",
  width: "70%",
  height: "70%",
  filter: "blur(60px)",
  opacity: 0.18,
  animation: "morphBlob1 8s ease-in-out infinite alternate",
};

const blob2Style: React.CSSProperties = {
  position: "absolute",
  bottom: "5%",
  right: "-15%",
  width: "65%",
  height: "65%",
  filter: "blur(50px)",
  opacity: 0.12,
  animation: "morphBlob2 10s ease-in-out infinite alternate",
};

const portraitInnerStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
  transformStyle: "preserve-3d",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const socialsContainerStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  zIndex: 2,
  pointerEvents: "none",
};

const socialIconStyles: React.CSSProperties[] = [
  { top: "10%", left: -12 },
  { top: "35%", right: -12 },
  { bottom: "35%", left: -12 },
  { bottom: "10%", right: -12 },
];

const BLOB_KEYFRAMES = `
@keyframes morphBlob1 {
  0% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; transform: rotate(0deg) scale(1); }
  50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(90deg) scale(1.05); }
  100% { border-radius: 30% 70% 50% 50% / 50% 60% 40% 50%; transform: rotate(180deg) scale(0.95); }
}
@keyframes morphBlob2 {
  0% { border-radius: 50% 50% 30% 70% / 50% 70% 30% 50%; transform: rotate(0deg) scale(1); }
  50% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(-120deg) scale(1.08); }
  100% { border-radius: 70% 30% 50% 50% / 30% 50% 70% 50%; transform: rotate(-240deg) scale(0.92); }
}`;

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setTilt({ x: y * -6, y: x * 6 });
    };

    const onLeave = () => setTilt({ x: 0, y: 0 });

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const portraitTransform = useMemo(
    () => `rotateX(${tilt.x * 0.5}deg) rotateY(${tilt.y * 0.5}deg)`,
    [tilt.x, tilt.y]
  );

  const socialIconBaseStyle: React.CSSProperties = useMemo(
    () => ({
      position: "absolute" as const,
      pointerEvents: "auto" as const,
      width: 44,
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-full)",
      border: "1px solid var(--border)",
      background: "var(--surface)",
      color: "var(--text-secondary)",
      boxShadow: "var(--shadow-md)",
      transition: "all 0.3s var(--ease-spring)",
    }),
    []
  );

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-greeting reveal-up">
            <span className="hero-greeting-dot" />
            Hello, I&apos;m
          </div>

          <h1 className="hero-name kinetic-heading">
            <span className="kinetic-word">
              {nameWords[0].split("").map((ch, ci) => (
                <span
                  key={ci}
                  className="kinetic-letter"
                  style={
                    {
                      "--i": ci,
                      display: "inline-block",
                      transform: `perspective(600px) rotateX(${tilt.x}deg)`,
                      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      transitionDelay: `${ci * 30}ms`,
                    } as React.CSSProperties
                  }
                >
                  {ch}
                </span>
              ))}
            </span>
            <br />
            <span className="accent kinetic-word">
              {surnameLetters.map((ch, ci) => (
                <span
                  key={ci}
                  className="kinetic-letter"
                  style={
                    {
                      "--i": ci + 4,
                      display: "inline-block",
                      transform: `perspective(600px) rotateX(${tilt.x}deg)`,
                      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      transitionDelay: `${(ci + 4) * 30}ms`,
                    } as React.CSSProperties
                  }
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </span>
          </h1>

          <p className="hero-title reveal-up" style={{ "--d": 1 } as React.CSSProperties}>
            Full-Stack Developer
          </p>
          <p className="hero-desc reveal-up" style={{ "--d": 2 } as React.CSSProperties}>
            I build end-to-end solutions that are fast, scalable, and
            thoughtfully designed. From mobile apps to cloud infrastructure,
            I turn complex problems into clean software.
          </p>

          <div className="hero-actions reveal-up" style={{ "--d": 3 } as React.CSSProperties}>
            <a href="#projects" className="btn btn-primary btn-pop">
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a href="#contact" className="btn btn-secondary btn-pop">Get In Touch</a>
          </div>
        </div>

        <div
          className="hero-portrait"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          } as React.CSSProperties}
        >
          <div style={blobContainerStyle}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              style={blob1Style}
            >
              <defs>
                <linearGradient id="blobGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22C55E" />
                  <stop offset="100%" stopColor="#4ADE80" />
                </linearGradient>
              </defs>
              <path fill="url(#blobGrad1)" d="M44.5,-51.2C56.3,-41.5,63.5,-27.1,66.8,-11.5C70.1,4.1,69.5,21,61.5,33.8C53.5,46.7,38.2,55.5,22.2,60.5C6.2,65.6,-10.5,66.9,-25.8,62.1C-41.1,57.3,-55,46.4,-61.7,32.5C-68.4,18.6,-68,1.7,-63.5,-12.6C-59,-26.9,-50.4,-38.6,-39,-48.3C-27.6,-58,-13.8,-65.7,1.3,-67.4C16.4,-69.1,32.7,-64.8,44.5,-51.2Z" transform="translate(100 100)" />
            </svg>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              style={blob2Style}
            >
              <defs>
                <linearGradient id="blobGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4ADE80" />
                  <stop offset="100%" stopColor="#22C55E" />
                </linearGradient>
              </defs>
              <path fill="url(#blobGrad2)" d="M39.9,-47.3C51.5,-36.8,59.5,-23.3,62.3,-8.2C65.1,6.9,62.7,23.6,54.1,36.1C45.5,48.6,30.7,56.9,14.8,61.1C-1.1,65.3,-18.1,65.4,-32.4,59.3C-46.7,53.2,-58.3,40.9,-62.7,26.3C-67.1,11.7,-64.3,-5.2,-57.3,-18.6C-50.3,-32,-39,-41.9,-26.5,-52.1C-14,-62.3,-0.3,-72.8,12.3,-72.1C24.9,-71.4,28.3,-57.8,39.9,-47.3Z" transform="translate(100 100)" />
            </svg>
          </div>

          <div
            style={{
              ...portraitInnerStyle,
              transform: portraitTransform,
              transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="hero-portrait-ring" />
            <div className="hero-portrait-glow" />
            <img src="/pfp.jpg" alt="Jed Nikko San Agustin" className="hero-portrait-img" />
          </div>

          <div className="hero-floating-socials" data-stagger="" style={socialsContainerStyle}>
            {socialLinks.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label={s.label}
                style={
                  {
                    "--d": i,
                    ...socialIconBaseStyle,
                    ...socialIconStyles[i],
                  } as React.CSSProperties
                }
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-indicator-line" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: BLOB_KEYFRAMES }} />
    </section>
  );
}
