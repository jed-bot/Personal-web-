'use client';

import type { Screenshot } from '@/core/types';

interface PhoneDotsProps {
  screenshots: Screenshot[];
  current: number;
  onGoTo: (index: number) => void;
}

export function PhoneDots({ screenshots, current, onGoTo }: PhoneDotsProps) {
  return (
    <div className="phone-dots">
      {screenshots.map((_, i) => (
        <button
          key={i}
          className={`phone-dot${i === current ? ' active' : ''}`}
          onClick={() => onGoTo(i)}
          aria-label={`Screenshot ${i + 1}`}
        />
      ))}
    </div>
  );
}