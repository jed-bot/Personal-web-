"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { sectionFadeUp } from '@/lib/animations';
import { useCarousel } from '@/hooks/useCarousel';
import { screenshots, techBadges, features, caseStudyStats, floatCards, APK_URL, GITHUB_URL } from '@/data/caseStudy';
import { ChevronLeftIcon, ChevronRightIcon, DownloadIcon } from '@/icons/ui';
import { GitHubIcon } from '@/icons/social';
import { FeatureCard } from './FeatureCard';
import { FloatCard } from './FloatCard';
import { CaseStudyStat } from './CaseStudyStat';

export default function CaseStudySection() {
  const { current, prev, next, goTo } = useCarousel(screenshots.length);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diff > threshold) next();
    else if (diff < -threshold) prev();
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section-label">Featured Project</span>
          <h2 className="section-title">Lutong Bahay</h2>
          <p className="section-subtitle">
            AI-Powered Filipino Recipe Recognition
          </p>
        </motion.div>

        <motion.div
          className="case-study reveal-blur"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="case-study-bg">
            <div className="case-study-glow" />
          </div>
          <div className="case-study-inner">
            <div className="case-study-phones parallax-slow" style={{ perspective: '1000px', transformStyle: 'preserve-3d' } as React.CSSProperties}>
              <div className="phone-mockup phone-mockup--back phone-mockup--blur-1">
                <Image
                  src="/Screenshot_3.jpg"
                  alt="Lutong Bahay app screenshot"
                  width={220}
                  height={477}
                  sizes="170px"
                  loading="lazy"
                />
              </div>
              <div className="phone-mockup phone-mockup--back phone-mockup--blur-2">
                <Image
                  src="/Screenshot_4.jpg"
                  alt="Lutong Bahay app screenshot"
                  width={220}
                  height={477}
                  sizes="170px"
                  loading="lazy"
                />
              </div>

              <div className="phone-gallery">
                <button
                  className="phone-arrow phone-arrow--left"
                  onClick={prev}
                  aria-label="Previous screenshot"
                >
                  <ChevronLeftIcon />
                </button>

                <div
                  className="phone-mockup phone-mockup--main"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  style={{ touchAction: 'pan-y', cursor: 'grab' } as React.CSSProperties}
                >
                  <div className="phone-mockup-glow" />
                  <Image
                    key={current}
                    src={screenshots[current].src}
                    alt={screenshots[current].alt}
                    className="phone-mockup-img"
                    width={280}
                    height={607}
                    sizes="(max-width: 768px) 160px, (max-width: 1024px) 180px, 220px"
                    priority={current === 0}
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
                    className={`phone-dot${i === current ? ' active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Screenshot ${i + 1}`}
                  />
                ))}
              </div>

              {floatCards.map((fc) => (
                <FloatCard key={fc.label} {...fc} />
              ))}
            </div>

            <div className="case-study-content reveal-up">
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

              <div className="tech-badges" data-stagger="">
                {techBadges.map((t, i) => (
                  <span key={t.name} className="tech-badge" style={{ '--d': i } as React.CSSProperties}>
                    {t.icon} {t.name}
                  </span>
                ))}
              </div>

              <div className="feature-highlights" data-stagger="" style={{ perspective: '800px', transformStyle: 'preserve-3d' } as React.CSSProperties}>
                {features.map((f, i) => (
                  <FeatureCard key={f.title} feature={f} index={i} />
                ))}
              </div>

              <div className="case-study-stats" data-stagger="">
                {caseStudyStats.map((s, i) => (
                  <div key={s.label} className="case-stat" style={{ '--d': i } as React.CSSProperties}>
                    <CaseStudyStat target={s.num} suffix={s.suffix || ''} />
                    <div className="case-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="case-study-actions">
                <a
                  href={APK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-pop"
                >
                  Download APK
                  <DownloadIcon />
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-pop"
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
