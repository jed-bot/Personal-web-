'use client';

import { motion } from 'framer-motion';
import { sectionFadeUp, staggerContainer, staggerItem, sectionFadeLeft, sectionFadeRight } from '@/lib/animations';
import { useProfileRepository } from '@/hooks/useRepositories';
import { CopyIcon, CheckIcon } from '@/icons/social';
import { useClipboard } from '@/hooks/useClipboard';

export default function ContactSection() {
  const profileRepo = useProfileRepository();
  const channels = profileRepo.getChannels();
  const email = profileRepo.getEmail();
  const { copied, ripples, copy } = useClipboard();

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
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
              viewport={{ once: true, margin: '-80px' }}
            >
              Get In Touch
            </motion.h3>
            <motion.div
              className="contact-channels"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {channels.map((c) => (
                <motion.a
                  key={c.href}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel"
                  variants={staggerItem}
                  whileHover={{ x: 6, color: '#fff' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
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
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="contact-copy-label">Quick Contact</p>
            <p className="contact-copy-desc">
              Click the button below to copy my email address to your clipboard.
            </p>
            <button
              type="button"
              className={`copy-btn ripple-btn btn-pop ${copied ? 'copy-btn--copied' : ''}`}
              onClick={(e) => copy(email, e)}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? 'Copied!' : email}
              {ripples.map((r) => (
                <span key={r.id} className="ripple" style={{ left: r.x, top: r.y }} />
              ))}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
