"use client";
import type { Variants, Transition } from "framer-motion";

/* ── Premium spring configs ───────────────────────────────────────── */
const easeOut = [0.16, 1, 0.3, 1] as const;
const easeSmooth = [0.25, 0.1, 0.25, 1] as const;
const spring: Transition = { type: "spring", stiffness: 350, damping: 30 };
const springGentle: Transition = { type: "spring", stiffness: 150, damping: 18, mass: 0.8 };
const springSnappy: Transition = { type: "spring", stiffness: 500, damping: 32 };
const springFloat: Transition = { type: "spring", stiffness: 80, damping: 12, mass: 1.4 };
const springPress: Transition = { type: "spring", stiffness: 600, damping: 20 };

/* ── Hero ─────────────────────────────────────────────────────────── */
export const heroVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};
export const heroChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};
export const heroPortrait = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: easeOut, delay: 0.2 } },
};

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
export const sectionScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(4px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 100, damping: 16 } },
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

/* ── Cards ────────────────────────────────────────────────────────── */
export const cardHover = {
  rest: { y: 0, scale: 1, rotateX: 0, rotateY: 0 },
  hover: { y: -6, scale: 1.01, rotateX: 0, rotateY: 0, transition: spring },
};
export const cardTilt = {
  rest: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: { rotateX: 0, rotateY: 0, scale: 1.01, transition: spring },
};
export const featureCardHover = {
  rest: { x: 0, borderColor: "rgba(255,255,255,0.06)" },
  hover: { x: 6, borderColor: "rgba(34,197,94,0.3)", transition: spring },
};

/* ── Buttons ──────────────────────────────────────────────────────── */
export const magneticHover = {
  rest: { scale: 1, x: 0, y: 0 },
  hover: { scale: 1.03, transition: springSnappy },
};
export const btnPrimaryHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -2, scale: 1.01, transition: spring },
  tap: { y: 1, scale: 0.97, transition: springPress },
};
export const btnSecondaryHover = {
  rest: { y: 0, scale: 1, borderColor: "rgba(255,255,255,0.06)", color: "#FFFFFF" },
  hover: {
    y: -2,
    scale: 1.01,
    borderColor: "rgba(34,197,94,0.5)",
    color: "#22C55E",
    transition: spring,
  },
  tap: { y: 1, scale: 0.97, transition: springPress },
};

/* ── Icons ────────────────────────────────────────────────────────── */
export const iconHover = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 4, transition: springSnappy },
};
export const iconFloat: Variants = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 5, repeat: Infinity, ease: easeSmooth },
  },
};
export const iconFloatSlow: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 7, repeat: Infinity, ease: easeSmooth },
  },
};

/* ── Text ─────────────────────────────────────────────────────────── */
export const textRevealLine: Variants = {
  hidden: { y: "105%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: easeOut } },
};
export const textRevealChar: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: easeOut } },
};

/* ── Page ─────────────────────────────────────────────────────────── */
export const pageFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
};
export const pageSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

/* ── Nav ──────────────────────────────────────────────────────────── */
export const navVariants = {
  top: { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 130, damping: 24, mass: 0.9 } },
};

/* ── Scroll progress ──────────────────────────────────────────────── */
export const scrollProgressWidth: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.1, ease: "linear" } },
};

/* ── Background effects ───────────────────────────────────────────── */
export const meshOrb: Variants = {
  animate: {
    x: [0, 30, -20, 0],
    y: [0, -36, 20, 0],
    scale: [1, 1.1, 0.92, 1],
    transition: { duration: 24, repeat: Infinity, ease: easeSmooth },
  },
};
export const meshOrbAlt: Variants = {
  animate: {
    x: [0, -36, 24, 0],
    y: [0, 30, -34, 0],
    scale: [1, 0.9, 1.12, 1],
    transition: { duration: 30, repeat: Infinity, ease: easeSmooth },
  },
};

/* ── Shared configs ───────────────────────────────────────────────── */
export const springHover = spring;
export const springGentleConfig = springGentle;
export const springSnappyConfig = springSnappy;
export const springPressConfig = springPress;
export const easeConfig = easeOut;

/* ── Float cards ──────────────────────────────────────────────────── */
export const floatCardAnim: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, repeat: Infinity, ease: easeSmooth },
  },
};

/* ── Contact ──────────────────────────────────────────────────────── */
export const contactChannelHover = {
  rest: { x: 0, color: "#B4BECF" },
  hover: { x: 6, color: "#FFFFFF", transition: spring },
};

/* ── Footer ───────────────────────────────────────────────────────── */
export const footerSocialHover = {
  rest: { y: 0, borderColor: "rgba(255,255,255,0.06)" },
  hover: {
    y: -4,
    borderColor: "rgba(34,197,94,0.4)",
    transition: spring,
  },
};
