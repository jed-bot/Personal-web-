"use client";
import type { Variants, Transition } from "framer-motion";

/* ── Refined easing & spring configs ──────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;
const easeOut = [0.16, 1, 0.3, 1] as const;
const easeSnap = [0.33, 1, 0.68, 1] as const;
const spring: Transition = { type: "spring", stiffness: 320, damping: 26 };
const springGentle: Transition = { type: "spring", stiffness: 140, damping: 16, mass: 0.8 };
const springSnappy: Transition = { type: "spring", stiffness: 440, damping: 28 };
const springFloat: Transition = { type: "spring", stiffness: 80, damping: 12, mass: 0.6 };

/* ── Hero ─────────────────────────────────────────────────────────── */
export const heroVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
export const heroChild = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOut },
  },
};
export const heroPortrait = {
  hidden: { opacity: 0, scale: 0.88, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeOut, delay: 0.3 },
  },
};

/* ── Sections ─────────────────────────────────────────────────────── */
export const sectionFadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};
export const sectionFadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};
export const sectionFadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};
export const sectionScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

/* ── Stagger ──────────────────────────────────────────────────────── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
};

/* ── Cards ────────────────────────────────────────────────────────── */
export const cardHover = {
  rest: { y: 0, scale: 1, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 60px rgba(0,0,0,0.35), 0 0 40px rgba(34,197,94,0.1)",
    transition: spring,
  },
};
export const cardTilt = {
  rest: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: { rotateX: 0, rotateY: 0, scale: 1.02, transition: spring },
};
export const featureCardHover = {
  rest: { x: 0, borderColor: "rgba(255,255,255,0.08)" },
  hover: { x: 6, borderColor: "rgba(34,197,94,0.35)", transition: spring },
};

/* ── Buttons ──────────────────────────────────────────────────────── */
export const magneticHover = {
  rest: { scale: 1, x: 0, y: 0 },
  hover: { scale: 1.03, transition: springSnappy },
};
export const btnPrimaryHover = {
  rest: { y: 0, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" },
  hover: {
    y: -3,
    boxShadow: "0 12px 40px rgba(34,197,94,0.3), 0 0 24px rgba(34,197,94,0.12)",
    transition: spring,
  },
};
export const btnSecondaryHover = {
  rest: { y: 0, borderColor: "rgba(255,255,255,0.08)", color: "#FFFFFF" },
  hover: {
    y: -3,
    borderColor: "rgba(34,197,94,0.5)",
    color: "#22C55E",
    transition: spring,
  },
};

/* ── Icons ────────────────────────────────────────────────────────── */
export const iconHover = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.12, rotate: 6, transition: springSnappy },
};
export const iconFloat: Variants = {
  animate: {
    y: [0, -7, 0],
    transition: { duration: 4.5, repeat: Infinity, ease: easeSnap },
  },
};
export const iconFloatSlow: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 6.5, repeat: Infinity, ease: easeSnap },
  },
};

/* ── Text ─────────────────────────────────────────────────────────── */
export const textRevealLine: Variants = {
  hidden: { y: "105%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.6, ease: easeOut } },
};
export const textRevealChar: Variants = {
  hidden: { y: 20, opacity: 0, rotateX: -30 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

/* ── Page transitions ─────────────────────────────────────────────── */
export const pageFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: easeOut } },
};
export const pageSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

/* ── Nav ──────────────────────────────────────────────────────────── */
export const navVariants = {
  top: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 22, mass: 0.9 },
  },
};

/* ── Scroll progress ──────────────────────────────────────────────── */
export const scrollProgressWidth: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.1, ease: "linear" } },
};

/* ── Background effects ───────────────────────────────────────────── */
export const meshOrb: Variants = {
  animate: {
    x: [0, 28, -18, 0],
    y: [0, -34, 18, 0],
    scale: [1, 1.12, 0.9, 1],
    transition: { duration: 22, repeat: Infinity, ease: easeSnap },
  },
};
export const meshOrbAlt: Variants = {
  animate: {
    x: [0, -34, 22, 0],
    y: [0, 28, -32, 0],
    scale: [1, 0.88, 1.14, 1],
    transition: { duration: 28, repeat: Infinity, ease: easeSnap },
  },
};

/* ── Shared spring configs (for inline use) ───────────────────────── */
export const springHover = spring;
export const springGentleConfig = springGentle;
export const springSnappyConfig = springSnappy;
export const easeConfig = ease;

/* ── Float cards (Case Study) ─────────────────────────────────────── */
export const floatCardAnim: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 5.5, repeat: Infinity, ease: easeSnap },
  },
};

/* ── Contact ──────────────────────────────────────────────────────── */
export const contactChannelHover = {
  rest: { x: 0, color: "#B4BECF" },
  hover: { x: 6, color: "#FFFFFF", transition: spring },
};

/* ── Footer ───────────────────────────────────────────────────────── */
export const footerSocialHover = {
  rest: { y: 0, borderColor: "rgba(255,255,255,0.08)" },
  hover: {
    y: -4,
    borderColor: "rgba(34,197,94,0.45)",
    boxShadow: "0 0 20px rgba(34,197,94,0.15)",
    transition: spring,
  },
};
