"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "./ScrollReveal";
import { icons } from "./TechIcons";

const screenshots = [
  { src: "/Screenshot_1.png", alt: "Lutong Bahay - Home Screen" },
  { src: "/Screenshot_2.jpg", alt: "Lutong Bahay - Recipe View" },
  { src: "/Screenshot_3.jpg", alt: "Lutong Bahay - Camera Scan" },
  { src: "/Screenshot_4.jpg", alt: "Lutong Bahay - Results" },
];

const techBadges = [
  { name: "React Native", icon: icons.react },
  { name: "Node.js", icon: icons.nodejs },
  { name: "MongoDB", icon: icons.mongodb },
  { name: "YOLO", icon: icons.yolo },
  { name: "TensorFlow", icon: icons.tensorflow },
  { name: "Cosine Similarity", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4m-10-10h4m12 0h4"/></svg> },
];

const features = [
  {
    title: "Instant Recipe Recognition",
    desc: "Point your camera at any ingredient and get recipe suggestions in real-time.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/></svg>,
  },
  {
    title: "Filipino Cuisine Database",
    desc: "Hundreds of traditional and modern Filipino recipes with step-by-step instructions.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>,
  },
  {
    title: "Smart Meal Planning",
    desc: "AI-powered meal suggestions based on available ingredients and dietary preferences.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>,
  },
  {
    title: "Real-Time Image Processing",
    desc: "Server-side YOLO model processes camera input and returns results in under 50ms.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>,
  },
];

const stats = [
  { num: "100+", label: "Recipes" },
  { num: "92%", label: "Accuracy" },
  { num: "50ms", label: "Response" },
  { num: "4.8", label: "Rating" },
];

export default function CaseStudy() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? screenshots.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === screenshots.length - 1 ? 0 : i + 1));

  return (
    <section className="section" id="projects">
      <div className="container">
        <FadeUp>
          <div className="section-header">
            <span className="section-label">Featured Project</span>
            <h2 className="section-title">Lutong Bahay</h2>
            <p className="section-subtitle">
              AI-Powered Filipino Recipe Recognition
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="case-study">
            <div className="case-study-bg">
              <div className="case-study-glow" />
            </div>
            <div className="case-study-inner">
              {/* Phone Gallery */}
              <div className="case-study-phones">
                <div className="phone-mockup phone-mockup--back phone-mockup--blur-1">
                  <img src="/Screenshot_3.jpg" alt="" />
                </div>
                <div className="phone-mockup phone-mockup--back phone-mockup--blur-2">
                  <img src="/Screenshot_4.jpg" alt="" />
                </div>

                <div className="phone-gallery">
                  <button className="phone-arrow phone-arrow--left" onClick={prev} aria-label="Previous screenshot">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>

                  <div className="phone-mockup phone-mockup--main">
                    <div className="phone-mockup-glow" />
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={current}
                        src={screenshots[current].src}
                        alt={screenshots[current].alt}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      />
                    </AnimatePresence>
                  </div>

                  <button className="phone-arrow phone-arrow--right" onClick={next} aria-label="Next screenshot">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>

                {/* Dots */}
                <div className="phone-dots">
                  {screenshots.map((_, i) => (
                    <button
                      key={i}
                      className={`phone-dot${i === current ? " active" : ""}`}
                      onClick={() => setCurrent(i)}
                      aria-label={`Screenshot ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Floating Cards */}
                <div className="float-card float-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/></svg>
                  AI Recognition
                </div>
                <div className="float-card float-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/></svg>
                  Smart Matching
                </div>
              </div>

              {/* Content */}
              <div className="case-study-content">
                <span className="case-study-label">Lutong Bahay</span>
                <h2 className="case-study-title">
                  Filipino Recipe<br />Recognition App
                </h2>
                <p className="case-study-subtitle">
                  React Native • Node.js • Computer Vision
                </p>
                <p className="case-study-desc">
                  A cross-platform mobile application built with React Native and Node.js
                  that uses computer vision to identify ingredients and recommend Filipino
                  recipes. Developed as a complete capstone project — from UI design and
                  backend APIs to AI integration and deployment.
                </p>

                <div className="tech-badges">
                  {techBadges.map((t) => (
                    <motion.span
                      key={t.name}
                      className="tech-badge"
                      whileHover={{ y: -3, boxShadow: "0 0 20px rgba(34,197,94,0.25)" }}
                    >
                      {t.icon} {t.name}
                    </motion.span>
                  ))}
                </div>

                <div className="feature-highlights">
                  {features.map((f) => (
                    <motion.div
                      key={f.title}
                      className="feature-card"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="feature-card-icon">{f.icon}</div>
                      <div>
                        <h4>{f.title}</h4>
                        <p>{f.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="case-study-stats">
                  {stats.map((s) => (
                    <div key={s.label} className="case-stat">
                      <div className="case-stat-num">{s.num}</div>
                      <div className="case-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="case-study-actions">
                  <motion.a
                    href="https://drive.google.com/file/d/1AIKitbd8IKUUQ9kqYOtPaoyRT2bZ3wGJ/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    whileHover={{ y: -2, boxShadow: "0 0 30px rgba(34,197,94,0.25)" }}
                  >
                    Download APK
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>
                  </motion.a>
                  <motion.a
                    href="https://github.com/jed-bot-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    whileHover={{ y: -2 }}
                  >
                    View Source
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
