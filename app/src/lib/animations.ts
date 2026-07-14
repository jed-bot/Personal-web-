"use client";
import type { Variants, Transition } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const spring: Transition = { type: "spring", stiffness: 300, damping: 20 };
const springGentle: Transition = { type: "spring", stiffness: 120, damping: 14 };
const springSnappy: Transition = { type: "spring", stiffness: 400, damping: 25 };

// ── Hero ────────────────────────────────────────────────────────────
export const heroVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
export const heroChild = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};
export const heroPortrait = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease, delay: 0.2 } },
};

// ── Sections ────────────────────────────────────────────────────────
export const sectionFadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};
export const sectionFadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
};
export const sectionFadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
};
export const sectionScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
};

// ── Stagger ─────────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
};

// ── Cards ───────────────────────────────────────────────────────────
export const cardHover = {
  rest: { y: 0, scale: 1, boxShadow: "0 8px 20px rgba(0,0,0,0.25)" },
  hover: {
    y: -6,
    scale: 1.015,
    boxShadow: "0 16px 48px rgba(0,0,0,0.3), 0 0 30px rgba(34,197,94,0.12)",
    transition: spring,
  },
};
export const cardTilt = {
  rest: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: { rotateX: 0, rotateY: 0, scale: 1.015, transition: spring },
};
export const featureCardHover = {
  rest: { x: 0, borderColor: "rgba(255,255,255,0.08)" },
  hover: { x: 4, borderColor: "rgba(34,197,94,0.3)", transition: spring },
};

// ── Buttons ─────────────────────────────────────────────────────────
export const magneticHover = {
  rest: { scale: 1, x: 0, y: 0 },
  hover: { scale: 1.02, transition: spring },
};
export const btnPrimaryHover = {
  rest: { y: 0, boxShadow: "0 8px 20px rgba(0,0,0,0.25)" },
  hover: {
    y: -2,
    boxShadow: "0 10px 32px rgba(34,197,94,0.25), 0 0 20px rgba(34,197,94,0.1)",
    transition: spring,
  },
};
export const btnSecondaryHover = {
  rest: { y: 0, borderColor: "rgba(255,255,255,0.08)", color: "#FFFFFF" },
  hover: {
    y: -2,
    borderColor: "rgba(34,197,94,0.5)",
    color: "#22C55E",
    transition: spring,
  },
};

// ── Icons ───────────────────────────────────────────────────────────
export const iconHover = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 4, transition: springSnappy },
};
export const iconFloat: Variants = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};
export const iconFloatSlow: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

// ── Text ────────────────────────────────────────────────────────────
export const textRevealLine: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.5, ease } },
};
export const textRevealChar: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease } },
};

// ── Page transitions ────────────────────────────────────────────────
export const pageFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease } },
};
export const pageSlideUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

// ── Nav ─────────────────────────────────────────────────────────────
export const navVariants = {
  top: { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20, mass: 0.8 } },
};

// ── Scroll progress ─────────────────────────────────────────────────
export const scrollProgressWidth: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.1, ease: "linear" } },
};

// ── Background effects ──────────────────────────────────────────────
export const meshOrb: Variants = {
  animate: {
    x: [0, 24, -16, 0],
    y: [0, -30, 16, 0],
    scale: [1, 1.1, 0.92, 1],
    transition: { duration: 20, repeat: Infinity, ease: "easeInOut" },
  },
};
export const meshOrbAlt: Variants = {
  animate: {
    x: [0, -30, 20, 0],
    y: [0, 24, -28, 0],
    scale: [1, 0.9, 1.12, 1],
    transition: { duration: 25, repeat: Infinity, ease: "easeInOut" },
  },
};

// ── Shared spring configs (for inline use) ──────────────────────────
export const springHover = spring;
export const springGentleConfig = springGentle;
export const springSnappyConfig = springSnappy;
export const easeConfig = ease;

// ── Float cards (Case Study) ────────────────────────────────────────
export const floatCardAnim: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

// ── Contact ─────────────────────────────────────────────────────────
export const contactChannelHover = {
  rest: { x: 0, color: "#B4BECF" },
  hover: { x: 4, color: "#FFFFFF", transition: spring },
};

// ── Footer ──────────────────────────────────────────────────────────
export const footerSocialHover = {
  rest: { y: 0, borderColor: "rgba(255,255,255,0.08)" },
  hover: {
    y: -3,
    borderColor: "rgba(34,197,94,0.4)",
    boxShadow: "0 0 16px rgba(34,197,94,0.12)",
    transition: spring,
  },
};
