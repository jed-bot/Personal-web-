"use client";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, sectionFadeUp } from "@/lib/animations";
import { skills } from "@/data/tech";

export default function Skills() {
  return (
    <section className="section" id="skills">
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
          className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skills.map((s) => (
            <motion.div key={s.title} variants={staggerItem}>
              <div className="card skill-card">
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
                <div className="skill-card-glow" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
