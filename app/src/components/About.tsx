"use client";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, sectionFadeUp, sectionFadeLeft } from "@/lib/animations";
import { stack } from "@/data/tech";
import { aboutStats } from "@/data/profile";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const dur = 1200;
          const tick = (now: number) => {
            const t = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = eased * target;
            setDisplay(isDecimal ? val.toFixed(1) : String(Math.round(val)));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, isDecimal]);

  return (
    <span ref={ref} className="about-stat-num">
      {display}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-stack"
            variants={sectionFadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {stack.map((s) => (
              <div key={s.category} className="about-stack-group">
                <h4 className="about-stack-cat">{s.category}</h4>
                <div className="about-stack-tags">
                  {s.items.map((t) => (
                    <span key={t.name} className="tag tag-icon">
                      <span className="tag-icon-svg">{t.icon}</span>
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="about-text">
            <motion.span
              className="tag"
              variants={sectionFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              About Me
            </motion.span>
            <motion.h3
              variants={sectionFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 }}
            >
              Crafting Digital Experiences That Matter
            </motion.h3>
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
            >
              {aboutStats.map((s) => (
                <motion.div key={s.label} className="about-stat" variants={staggerItem}>
                  <AnimatedCounter target={s.num} suffix={s.suffix || ""} />
                  <div className="about-stat-label">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
