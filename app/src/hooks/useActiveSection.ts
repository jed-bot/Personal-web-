'use client';

import { useState, useEffect } from 'react';
import type { NavLink } from '@/core/types';

export function useActiveSection(links: NavLink[]) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(links[0]?.href ?? '#about');

  useEffect(() => {
    const elements = links.map(l => ({
      href: l.href,
      el: document.getElementById(l.href.replace('#', '')),
    }));

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrolled(y > 60);

          for (let i = elements.length - 1; i >= 0; i--) {
            const { href, el } = elements[i];
            if (el && el.getBoundingClientRect().top <= 200) {
              setActive(href);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [links]);

  return { scrolled, active };
}