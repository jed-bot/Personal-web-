'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { staggerItem } from '@/lib/animations';
import type { SkillCategory } from '@/core/types';
import { useTilt } from '@/hooks/useTilt';

interface SkillCardProps {
  skill: SkillCategory;
}

export const SkillCard = memo(function SkillCard({ skill }: SkillCardProps) {
  const [ref] = useTilt<HTMLDivElement>({ intensity: 1.2 });

  return (
    <motion.div variants={staggerItem}>
      <div ref={ref} className="card skill-card glass-deep tilt-card">
        <div className="tilt-card-inner">
          <div className="skill-icon">{skill.icon}</div>
          <h3>{skill.title}</h3>
          <div className="skill-tags">
            {skill.tags.map(t => (
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
});