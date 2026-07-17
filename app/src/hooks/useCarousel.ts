'use client';

import { useState, useCallback } from 'react';

export function useCarousel(length: number) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent(i => (i === 0 ? length - 1 : i - 1)), [length]);
  const next = useCallback(() => setCurrent(i => (i === length - 1 ? 0 : i + 1)), [length]);
  const goTo = useCallback((index: number) => setCurrent(index), []);

  return { current, prev, next, goTo };
}