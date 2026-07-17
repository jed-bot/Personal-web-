'use client';

import { useRef, useEffect, useCallback } from 'react';

export interface UseTiltOptions {
  intensity?: number;
  springFactor?: number;
  maxAngle?: number;
  scale?: number;
  perspective?: number;
  glareEnabled?: boolean;
  maxGlareOpacity?: number;
}

export interface TiltState {
  x: number;
  y: number;
  isHovering: boolean;
  isAnimating: boolean;
}

export function useTilt<T extends HTMLElement = HTMLDivElement>(
  options: UseTiltOptions = {}
): [React.RefObject<T | null>, TiltState] {
  const {
    intensity = 1,
    springFactor = 0.08,
    maxAngle = 8,
    scale = 1.02,
    perspective = 900,
    glareEnabled = true,
    maxGlareOpacity = 0.6,
  } = options;

  const ref = useRef<T | null>(null);
  const targetRef = useRef({ x: 50, y: 50 });
  const currentRef = useRef({ x: 50, y: 50 });
  const stateRef = useRef<TiltState>({
    x: 50,
    y: 50,
    isHovering: false,
    isAnimating: false,
  });
  const rafRef = useRef(0);

  const updateElement = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    // Lerp inside the RAF tick — no separate setInterval needed
    currentRef.current.x += (targetRef.current.x - currentRef.current.x) * springFactor;
    currentRef.current.y += (targetRef.current.y - currentRef.current.y) * springFactor;

    const mx = currentRef.current.x;
    const my = currentRef.current.y;
    stateRef.current.x = mx;
    stateRef.current.y = my;

    el.style.setProperty('--mx', String(mx));
    el.style.setProperty('--my', String(my));

    const rotY = ((mx - 50) / 50) * maxAngle * intensity;
    const rotX = ((my - 50) / 50) * -maxAngle * intensity;

    el.style.transform = `perspective(${perspective}px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(4px) scale3d(${scale},${scale},${scale})`;

    if (glareEnabled) {
      const distFromCenter = Math.sqrt(
        Math.pow(mx - 50, 2) + Math.pow(my - 50, 2)
      );
      const glareOpacity = Math.min(distFromCenter / 50, maxGlareOpacity) * (stateRef.current.isHovering ? 1 : 0);
      el.style.setProperty('--glare-opacity', String(glareOpacity));
    }

    const settled =
      Math.abs(currentRef.current.x - targetRef.current.x) < 0.05 &&
      Math.abs(currentRef.current.y - targetRef.current.y) < 0.05;

    if (settled && !stateRef.current.isHovering) {
      el.style.removeProperty('--mx');
      el.style.removeProperty('--my');
      el.style.removeProperty('--glare-opacity');
      el.style.transform = '';
      el.classList.remove('is-tilting');
      stateRef.current.isAnimating = false;
      return;
    }

    rafRef.current = requestAnimationFrame(updateElement);
  }, [maxAngle, intensity, perspective, scale, glareEnabled, maxGlareOpacity, springFactor]);

  const startLoop = useCallback(() => {
    if (!stateRef.current.isAnimating) {
      stateRef.current.isAnimating = true;
      rafRef.current = requestAnimationFrame(updateElement);
    }
  }, [updateElement]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const onEnter = () => {
      stateRef.current.isHovering = true;
      el.classList.add('is-tilting');
      startLoop();
    };

    const onLeave = () => {
      stateRef.current.isHovering = false;
      targetRef.current = { x: 50, y: 50 };
      startLoop();
    };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      targetRef.current = {
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
      };
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mousemove', onMove);

    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [startLoop]);

  // No more permanent setInterval. Lerp now happens inside updateElement's RAF loop.
  // When no element is being hovered, zero RAFs run. Previously ~15 elements ran
  // setInterval(16ms) forever regardless of hover state.

  return [ref, stateRef.current];
}