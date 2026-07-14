"use client";
import { useState, useEffect, useCallback } from "react";

export function useMouse() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [onMove]);

  return pos;
}

export function useRelativeMouse(ref: React.RefObject<HTMLElement | null>) {
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
