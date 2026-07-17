'use client';

import { useRef, useEffect, useState } from 'react';
import { animate, easeOut } from 'framer-motion';

interface CaseStudyStatProps {
  target: number;
  suffix?: string;
}

export function CaseStudyStat({ target, suffix = '' }: CaseStudyStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState('0');
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(0, target, {
            duration: 1.2,
            ease: easeOut,
            onUpdate: (v) => setDisplay(isDecimal ? v.toFixed(1) : String(Math.round(v))),
          });
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [target, isDecimal]);

  return <span ref={ref} className="case-stat-num">{display}{suffix}</span>;
}