"use client";

import { useRef, useEffect } from "react";

interface UseTiltOptions {
  intensity?: number;
  springFactor?: number;
}

export default function useTilt<T extends HTMLElement = HTMLDivElement>(
  options: UseTiltOptions = {}
) {
  const { intensity = 1, springFactor = 0.08 } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const target = { x: 50, y: 50 };
    const current = { x: 50, y: 50 };
    let raf = 0;
    let isHovering = false;
    let isRunning = false;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const selfRef = () => {
      current.x = lerp(current.x, target.x, springFactor);
      current.y = lerp(current.y, target.y, springFactor);

      const mx = current.x;
      const my = current.y;

      el.style.setProperty("--mx", String(mx));
      el.style.setProperty("--my", String(my));

      const rotY = ((mx - 50) / 50) * 8 * intensity;
      const rotX = ((my - 50) / 50) * -8 * intensity;

      el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(4px) scale3d(1.02,1.02,1.02)`;

      const distFromCenter = Math.sqrt(
        Math.pow(mx - 50, 2) + Math.pow(my - 50, 2)
      );
      el.style.setProperty("--glare-opacity", String(Math.min(distFromCenter / 50, 0.6) * (isHovering ? 1 : 0)));

      const settled =
        Math.abs(current.x - target.x) < 0.05 &&
        Math.abs(current.y - target.y) < 0.05;

      if (settled && !isHovering) {
        el.style.removeProperty("--mx");
        el.style.removeProperty("--my");
        el.style.removeProperty("--glare-opacity");
        el.style.transform = "";
        el.classList.remove("is-tilting");
        isRunning = false;
        return;
      }

      raf = requestAnimationFrame(selfRef);
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        raf = requestAnimationFrame(selfRef);
      }
    };

    const onEnter = () => {
      isHovering = true;
      el.classList.add("is-tilting");
      startLoop();
    };

    const onLeave = () => {
      isHovering = false;
      target.x = 50;
      target.y = 50;
      startLoop();
    };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      target.x = Math.max(0, Math.min(100, x));
      target.y = Math.max(0, Math.min(100, y));
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousemove", onMove);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [intensity, springFactor]);

  return ref;
}
