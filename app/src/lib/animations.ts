"use client";
import type { Variants, Transition } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

/* ── Sections ─────────────────────────────────────────────────────── */
export const sectionFadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 100, damping: 16 } },
};
export const sectionFadeLeft: Variants = {
  hidden: { opacity: 0, x: -40, filter: "blur(6px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 100, damping: 16 } },
};
export const sectionFadeRight: Variants = {
  hidden: { opacity: 0, x: 40, filter: "blur(6px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 100, damping: 16 } },
};

/* ── Stagger ──────────────────────────────────────────────────────── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 14, mass: 0.8 },
  },
};

/* ── Shared configs ───────────────────────────────────────────────── */
export const easeConfig = easeOut;
