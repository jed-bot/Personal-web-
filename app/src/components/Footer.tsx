"use client";
import { motion } from "framer-motion";
import { sectionFadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { socials } from "@/data/profile";

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
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label={s.label}
              variants={staggerItem}
              whileHover={{ y: -4, borderColor: "rgba(34,197,94,0.4)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
