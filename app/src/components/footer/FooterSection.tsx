'use client';

import { motion } from 'framer-motion';
import { sectionFadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { useProfileRepository } from '@/hooks/useRepositories';
import { useTilt } from '@/hooks/useTilt';
import { memo } from 'react';

const SocialIcon = memo(function SocialIcon({ social }: { social: { label: string; href: string; icon: React.ReactNode } }) {
  const [ref] = useTilt<HTMLAnchorElement>({ intensity: 1.5 });

  return (
    <motion.a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="footer-social tilt-card"
      ref={ref}
      aria-label={social.label}
      variants={staggerItem}
    >
      <div className="tilt-card-inner">
        {social.icon}
      </div>
    </motion.a>
  );
});

export default function FooterSection() {
  const { getSocials } = useProfileRepository();
  const socials = getSocials();

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
            <SocialIcon key={s.label} social={s} />
          ))}
        </motion.div>
      </div>
    </footer>
  );
}