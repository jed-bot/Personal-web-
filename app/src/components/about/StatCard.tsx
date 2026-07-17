'use client';

import { motion } from 'framer-motion';
import { useTilt } from '@/hooks/useTilt';
import { staggerItem } from '@/lib/animations';
import { AnimatedCounter } from './AnimatedCounter';

interface StatCardProps {
  stat: { num: number; suffix?: string; label: string };
  index: number;
}

export function StatCard({ stat, index }: StatCardProps) {
  const [ref] = useTilt<HTMLDivElement>({ intensity: 0.6 });

  return (
    <motion.div
      className="about-stat tilt-card"
      ref={ref}
      variants={staggerItem}
    >
      <div className="tilt-card-inner">
        <AnimatedCounter target={stat.num} suffix={stat.suffix || ''} />
        <div className="about-stat-label">{stat.label}</div>
      </div>
    </motion.div>
  );
}