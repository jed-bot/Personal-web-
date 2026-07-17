'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@/icons/ui';

interface PhoneArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

export function PhoneArrows({ onPrev, onNext }: PhoneArrowsProps) {
  return (
    <>
      <button className="phone-arrow phone-arrow--left" onClick={onPrev} aria-label="Previous screenshot">
        <ChevronLeftIcon />
      </button>
      <button className="phone-arrow phone-arrow--right" onClick={onNext} aria-label="Next screenshot">
        <ChevronRightIcon />
      </button>
    </>
  );
}