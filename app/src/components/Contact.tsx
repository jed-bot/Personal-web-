"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { sectionFadeUp, staggerContainer, staggerItem, sectionFadeLeft, sectionFadeRight } from "@/lib/animations";
import { channels, EMAIL } from "@/data/profile";
import { CopyIcon, CheckIcon } from "@/icons/social";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rippleTimerRefs = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const copyEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    const rippleTimer = setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
      rippleTimerRefs.current.delete(id);
    }, 600);
    rippleTimerRefs.current.set(id, rippleTimer);

    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
      copiedTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
      copiedTimerRef.current = setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="contact-grid">
          <div className="contact-info">
            <motion.h3
              variants={sectionFadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              Get In Touch
            </motion.h3>
            <motion.div
              className="contact-channels"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {channels.map((c) => (
                <motion.a
                  key={c.href}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel"
                  variants={staggerItem}
                  whileHover={{ x: 6, color: "#fff" }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  {c.icon}
                  <span>{c.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="contact-copy"
            variants={sectionFadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="contact-copy-label">Quick Contact</p>
            <p className="contact-copy-desc">
              Click the button below to copy my email address to your clipboard.
            </p>
            <button
              type="button"
              className={`copy-btn ripple-btn btn-pop ${copied ? "copy-btn--copied" : ""}`}
              onClick={copyEmail}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? "Copied!" : EMAIL}
              {ripples.map((r) => (
                <span
                  key={r.id}
                  className="ripple"
                  style={{ left: r.x, top: r.y }}
                />
              ))}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
