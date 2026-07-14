"use client";
import { navLinks } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const { scrolled, active } = useActiveSection(navLinks);
  const barRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className="scroll-progress-bar" ref={barRef} />
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo" onClick={() => setOpen(false)}>
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
          <button
            className={`nav-hamburger${open ? " open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`nav-mobile${open ? " open" : ""}`} onClick={() => setOpen(false)}>
        <div className="nav-mobile-inner" onClick={(e) => e.stopPropagation()}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-mobile-link${active === l.href ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
