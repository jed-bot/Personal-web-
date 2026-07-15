"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, staggerItem, sectionFadeUp, sectionFadeLeft } from "@/lib/animations";
import { stack } from "@/data/tech";
import { aboutStats } from "@/data/profile";
import { useRef, useEffect } from "react";
import useTilt from "@/hooks/useTilt";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const dur = 1200;
          const tick = (now: number) => {
            const t = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = eased * target;
            el.textContent = (isDecimal ? val.toFixed(1) : String(Math.round(val))) + suffix;
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, isDecimal, suffix]);

  return (
    <span ref={ref} className="about-stat-num">
      0{suffix}
    </span>
  );
}

function StatCard({ s }: { s: (typeof aboutStats)[number] }) {
  const tiltRef = useTilt<HTMLDivElement>({ intensity: 0.6 });

  return (
    <motion.div
      className="about-stat tilt-card"
      ref={tiltRef}
      variants={staggerItem}
    >
      <div className="tilt-card-inner">
        <AnimatedCounter target={s.num} suffix={s.suffix || ""} />
        <div className="about-stat-label">{s.label}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const stackY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const textY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const statsY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section className="section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-stack"
            variants={sectionFadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ y: stackY } as any}
          >
            {stack.map((s) => (
              <div key={s.category} className="about-stack-group" data-stagger="">
                <h4 className="about-stack-cat">{s.category}</h4>
                <div className="about-stack-tags">
                  {s.items.map((t, i) => (
                    <span key={t.name} className="tag tag-icon" style={{ "--d": i } as React.CSSProperties}>
                      <span className="tag-icon-svg">{t.icon}</span>
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div className="about-text" style={{ y: textY } as any}>
            <motion.span
              className="tag"
              variants={sectionFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              About Me
            </motion.span>
            <div style={{ height: "1rem" }} />
            <motion.h3
              variants={sectionFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 }}
            >
              Crafting Digital Experiences That Matter
            </motion.h3>
            <div style={{ height: "0.75rem" }} />
            <motion.p
              variants={sectionFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.15 }}
            >
              I&apos;m a full-stack developer with a passion for building software
              that solves real problems. I work across the entire stack — from
              designing intuitive mobile interfaces to engineering scalable
              backend systems.
            </motion.p>
            <motion.p
              variants={sectionFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.2 }}
            >
              With hands-on experience in React Native, Node.js, Docker,
              CI/CD pipelines, and machine learning, I bring a holistic
              approach to every project. I believe great software is built at
              the intersection of clean code and thoughtful design.
            </motion.p>

            <motion.div
              className="about-stats"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              style={{ y: statsY, perspective: "800px", transformStyle: "preserve-3d" } as any}
            >
              {aboutStats.map((s) => (
                <StatCard key={s.label} s={s} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
