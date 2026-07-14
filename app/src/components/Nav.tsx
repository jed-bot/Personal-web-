"use client";
import { navLinks } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect, useRef } from "react";

export default function Nav() {
  const { scrolled, active } = useActiveSection(navLinks);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (barRef.current) {
            const h = document.documentElement.scrollHeight - window.innerHeight;
            barRef.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress-bar" ref={barRef} />
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            <span>J</span>ed.
          </a>
          <div className="nav-links">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link${active === l.href ? " active" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
