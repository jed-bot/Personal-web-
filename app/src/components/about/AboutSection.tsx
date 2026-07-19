'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { sectionFadeUp, sectionFadeLeft, staggerContainer, staggerItem } from '@/lib/animations';
import type { SkillCategory } from '@/core/types';
import { StatCard } from './StatCard';
import { StackGroup } from './StackGroup';
import { useTechRepository, useProfileRepository } from '@/hooks/useRepositories';

export default function AboutSection() {
  const techRepo = useTechRepository();
  const profileRepo = useProfileRepository();

  const stack = techRepo.getStack();
  const stats = profileRepo.getStats();

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
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
              viewport={{ once: true, margin: '-80px' }}
              style={{ y: stackY, willChange: 'transform' } as any}
            >
            {stack.map((s) => (
              <StackGroup key={s.category} group={s} />
            ))}
          </motion.div>

          <motion.div className="about-text" style={{ y: textY, willChange: 'transform' } as any}>
            <motion.span
              className="tag"
              variants={sectionFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              About Me
            </motion.span>
            <div style={{ height: '1rem' }} />
            <motion.h3
              variants={sectionFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.1 }}
            >
              Crafting Digital Experiences That Matter
            </motion.h3>
            <div style={{ height: '0.75rem' }} />
            <motion.p
              variants={sectionFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
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
              viewport={{ once: true, margin: '-80px' }}
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
              viewport={{ once: true, margin: '-60px' }}
              style={{ y: statsY, perspective: '800px', transformStyle: 'preserve-3d', willChange: 'transform' } as any}
            >
              {stats.map((s, i) => (
                <StatCard key={s.label} stat={s} index={i} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
