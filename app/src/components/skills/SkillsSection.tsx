'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, sectionFadeUp } from '@/lib/animations';
import { SkillCard } from './SkillCard';
import { useTechRepository } from '@/hooks/useRepositories';

export default function SkillsSection() {
  const techRepo = useTechRepository();
  const skills = techRepo.getSkills();

  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
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
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((s) => (
            <SkillCard key={s.title} skill={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
