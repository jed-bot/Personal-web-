'use client';

import { useRef, useEffect } from 'react';
import { HeroName } from './HeroName';
import { HeroPortrait } from './HeroPortrait';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let running = false;
    let rafId = 0;
    const current = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      current.x = lerp(current.x, target.x, 0.1);
      current.y = lerp(current.y, target.y, 0.1);

      const rx = current.x;
      const ry = current.y;

      hero.style.setProperty('--hero-rx', `${rx}deg`);
      hero.style.setProperty('--hero-ry', `${ry}deg`);

      const settled =
        Math.abs(current.x - target.x) < 0.01 &&
        Math.abs(current.y - target.y) < 0.01;

      if (settled && target.x === 0 && target.y === 0) {
        hero.style.setProperty('--hero-rx', '0deg');
        hero.style.setProperty('--hero-ry', '0deg');
        running = false;
        return;
      }

      rafId = requestAnimationFrame(animate);
    };

    const startLoop = () => {
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      target.x = y * -6;
      target.y = x * 6;
      startLoop();
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      startLoop();
    };

    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);
    return () => {
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-greeting reveal-up">
            <span className="hero-greeting-dot" />
            Hello, I&apos;m
          </div>

          <HeroName />

          <p className="hero-title reveal-up" style={{ '--d': 1 } as React.CSSProperties}>
            Full-Stack Developer
          </p>
          <p className="hero-desc reveal-up" style={{ '--d': 2 } as React.CSSProperties}>
            I build end-to-end solutions that are fast, scalable, and
            thoughtfully designed. From mobile apps to cloud infrastructure,
            I turn complex problems into clean software.
          </p>

          <div className="hero-actions reveal-up" style={{ '--d': 3 } as React.CSSProperties}>
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
            perspective: '1200px',
            transformStyle: 'preserve-3d',
          } as React.CSSProperties}
        >
          <HeroPortrait />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: BLOB_KEYFRAMES }} />
    </section>
  );
}

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
}
`;