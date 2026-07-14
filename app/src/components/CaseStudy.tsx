"use client";
import { motion, animate } from "framer-motion";
import { sectionFadeUp, staggerContainer, staggerItem, easeConfig } from "@/lib/animations";
import { useCarousel } from "@/hooks/useCarousel";
import { screenshots, techBadges, features, caseStudyStats, floatCards, APK_URL, GITHUB_URL } from "@/data/case-study";
import { ChevronLeftIcon, ChevronRightIcon, DownloadIcon } from "@/icons/ui";
import { GitHubIcon } from "@/icons/social";
import { useRef, useState, useEffect } from "react";

function CaseStudyStat({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(0, target, {
            duration: 1.2,
            ease: easeConfig,
            onUpdate: (v) => setDisplay(isDecimal ? v.toFixed(1) : String(Math.round(v))),
          });
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, isDecimal]);

  return <span ref={ref} className="case-stat-num">{display}{suffix}</span>;
}

function FloatCard({ icon, label, className }: { icon: React.ReactNode; label: string; className: string }) {
  return (
    <div className={`float-card ${className}`}>
      {icon}
      {label}
    </div>
  );
}

export default function CaseStudy() {
  const { current, prev, next, goTo } = useCarousel(screenshots.length);

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="section-label">Featured Project</span>
          <h2 className="section-title">Lutong Bahay</h2>
          <p className="section-subtitle">
            AI-Powered Filipino Recipe Recognition
          </p>
        </motion.div>

        <motion.div
          className="case-study"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="case-study-bg">
            <div className="case-study-glow" />
          </div>
          <div className="case-study-inner">
            <div className="case-study-phones">
              <div className="phone-mockup phone-mockup--back phone-mockup--blur-1">
                <img src="/Screenshot_3.jpg" alt="" />
              </div>
              <div className="phone-mockup phone-mockup--back phone-mockup--blur-2">
                <img src="/Screenshot_4.jpg" alt="" />
              </div>

              <div className="phone-gallery">
                <button
                  className="phone-arrow phone-arrow--left"
                  onClick={prev}
                  aria-label="Previous screenshot"
                >
                  <ChevronLeftIcon />
                </button>

                <div className="phone-mockup phone-mockup--main">
                  <div className="phone-mockup-glow" />
                  <img
                    key={current}
                    src={screenshots[current].src}
                    alt={screenshots[current].alt}
                    className="phone-mockup-img"
                  />
                </div>

                <button
                  className="phone-arrow phone-arrow--right"
                  onClick={next}
                  aria-label="Next screenshot"
                >
                  <ChevronRightIcon />
                </button>
              </div>

              <div className="phone-dots">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    className={`phone-dot${i === current ? " active" : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Screenshot ${i + 1}`}
                  />
                ))}
              </div>

              {floatCards.map((fc) => (
                <FloatCard key={fc.label} {...fc} />
              ))}
            </div>

            <div className="case-study-content">
              <span className="case-study-label">Lutong Bahay</span>
              <h2 className="case-study-title">
                Filipino Recipe<br />Recognition App
              </h2>
              <p className="case-study-subtitle">
                React Native &bull; Node.js &bull; Computer Vision
              </p>
              <p className="case-study-desc">
                A cross-platform mobile application built with React Native and Node.js
                that uses computer vision to identify ingredients and recommend Filipino
                recipes. Developed as a complete capstone project — from UI design and
                backend APIs to AI integration and deployment.
              </p>

              <div className="tech-badges">
                {techBadges.map((t) => (
                  <span key={t.name} className="tech-badge">
                    {t.icon} {t.name}
                  </span>
                ))}
              </div>

              <div className="feature-highlights">
                {features.map((f) => (
                  <div key={f.title} className="feature-card">
                    <div className="feature-card-icon">{f.icon}</div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="case-study-stats">
                {caseStudyStats.map((s) => (
                  <div key={s.label} className="case-stat">
                    <CaseStudyStat target={s.num} suffix={s.suffix || ""} />
                    <div className="case-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="case-study-actions">
                <a
                  href={APK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Download APK
                  <DownloadIcon />
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  View Source
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
