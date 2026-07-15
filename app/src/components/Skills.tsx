"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, sectionFadeUp } from "@/lib/animations";
import { skills } from "@/data/tech";
import useTilt from "@/hooks/useTilt";

function SkillCard({ s }: { s: (typeof skills)[number] }) {
  const tiltRef = useTilt<HTMLDivElement>({ intensity: 1.2 });

  return (
    <motion.div variants={staggerItem}>
      <div ref={tiltRef} className="card skill-card glass-deep tilt-card">
        <div className="tilt-card-inner">
          <div className="skill-icon">{s.icon}</div>
          <h3>{s.title}</h3>
          <div className="skill-tags">
            {s.tags.map((t) => (
              <span key={t.name} className="tag tag-icon">
                <span className="tag-icon-svg">{t.icon}</span>
                {t.name}
              </span>
            ))}
          </div>
        </div>
        <div className="skill-card-glow" />
        <div className="skill-card-reflection" />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-subtitle">
            A focused toolkit across frontend, backend, cloud, and machine learning.
          </p>
        </motion.div>
        <motion.div
          className="skills-vortex"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skills.map((s) => (
            <SkillCard key={s.title} s={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
