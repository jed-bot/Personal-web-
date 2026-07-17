'use client';

import { motion } from 'framer-motion';
import { useTilt } from '@/hooks/useTilt';
import type { Feature } from '@/core/types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const [ref] = useTilt<HTMLDivElement>({ intensity: 0.8 });

  return (
    <motion.div
      className="feature-card tilt-card"
      ref={ref}
      style={{ '--d': index } as React.CSSProperties}
    >
      <div className="tilt-card-inner" style={{ display: 'flex', gap: '1rem' }}>
        <div className="feature-card-icon">{feature.icon}</div>
        <div>
          <h4>{feature.title}</h4>
          <p>{feature.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}