"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
const ringSpring = { stiffness: 200, damping: 20, mass: 0.8 };
const expandTargets = "a, button, .btn, .card, .skill-card, .feature-card, .tag, .footer-social, .hero-social-icon, .tech-badge, .contact-channel, .phone-dot, .phone-arrow, input, textarea, .nav-link, .nav-hamburger, [data-cursor]";

export default function Cursor() {
  const reduced = useReducedMotion();
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useMotionValue(0);
  const ringY = useMotionValue(0);
  const sx = useSpring(dotX, springConfig);
  const sy = useSpring(dotY, springConfig);
  const rx = useSpring(ringX, ringSpring);
  const ry = useSpring(ringY, ringSpring);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };
    const onEnter = () => { if (ringRef.current) ringRef.current.style.opacity = "1"; };
    const onLeave = () => { if (ringRef.current) ringRef.current.style.opacity = "0"; };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest(expandTargets);
      if (t && ringRef.current) {
        ringRef.current.style.width = "52px";
        ringRef.current.style.height = "52px";
        ringRef.current.style.borderColor = "var(--accent)";
        ringRef.current.style.background = "rgba(34,197,94,0.06)";
      }
    };
    const onOut = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "40px";
        ringRef.current.style.height = "40px";
        ringRef.current.style.borderColor = "rgba(255,255,255,0.2)";
        ringRef.current.style.background = "transparent";
      }
    };

    const attach = (root: Element | Document) => {
      root.querySelectorAll(expandTargets).forEach((el) => {
        (el as HTMLElement).addEventListener("mouseenter", onOver);
        (el as HTMLElement).addEventListener("mouseleave", onOut);
      });
    };

    attach(document);

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node instanceof HTMLElement) {
            attach(node);
            node.querySelectorAll(expandTargets).forEach((el) => {
              (el as HTMLElement).addEventListener("mouseenter", onOver);
              (el as HTMLElement).addEventListener("mouseleave", onOut);
            });
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      observer.disconnect();
    };
  }, [reduced, dotX, dotY, ringX, ringY]);

  const ringTransform = useMotionTemplate`translate(${rx}px, ${ry}px)`;
  const dotTransform = useMotionTemplate`translate(${sx}px, ${sy}px)`;

  if (reduced) return null;

  return (
    <>
      <motion.div
        ref={ringRef}
        className="cursor-ring"
        style={{ left: 0, top: 0, x: rx, y: ry }}
      />
      <motion.div
        ref={dotRef}
        className="cursor-dot"
        style={{ left: 0, top: 0, x: sx, y: sy }}
      />
    </>
  );
}
