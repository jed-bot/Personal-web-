"use client";
import { useState, useEffect, useCallback, RefObject } from "react";

export function useMouse() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setMoving(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setMoving(false), 150);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      clearTimeout(timeout);
    };
  }, []);

  return { ...pos, moving };
}

export function useRelativeMouse(ref: RefObject<HTMLElement | null>) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setPos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    el.addEventListener("mousemove", onMove, { passive: true });
    return () => el.removeEventListener("mousemove", onMove);
  }, [ref]);

  return pos;
}

export function useTilt(ref: RefObject<HTMLElement | null>, intensity = 15) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ rotateX: -y * intensity, rotateY: x * intensity });
    };
    const onLeave = () => setTilt({ rotateX: 0, rotateY: 0 });
    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, intensity]);

  return tilt;
}
