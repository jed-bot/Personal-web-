"use client";
import { motion } from "framer-motion";
import { sectionFadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { socials } from "@/data/profile";
import useTilt from "@/hooks/useTilt";

function SocialIcon({ s }: { s: (typeof socials)[number] }) {
  const tiltRef = useTilt<HTMLAnchorElement>({ intensity: 1.5 });

  return (
    <motion.a
      key={s.label}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-social tilt-card"
      ref={tiltRef}
      aria-label={s.label}
      variants={staggerItem}
    >
      <div className="tilt-card-inner">
        {s.icon}
      </div>
    </motion.a>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <motion.p
          className="footer-text"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Jed Nikko San Agustin. All rights reserved.
        </motion.p>
        <motion.div
          className="footer-socials"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socials.map((s) => (
            <SocialIcon key={s.label} s={s} />
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
