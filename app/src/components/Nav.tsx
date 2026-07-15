"use client";
import { navLinks } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect, useState } from "react";
import useTilt from "@/hooks/useTilt";

function NavLink({ l, active }: { l: (typeof navLinks)[number]; active: boolean }) {
  const tiltRef = useTilt<HTMLAnchorElement>({ intensity: 0.4 });

  return (
    <a
      ref={tiltRef}
      href={l.href}
      className={`nav-link tilt-card${active ? " active" : ""}`}
      style={{ padding: "0.5rem 0.75rem", borderRadius: "var(--radius-sm)" } as React.CSSProperties}
    >
      {l.label}
    </a>
  );
}

export default function Nav() {
  const { scrolled, active } = useActiveSection(navLinks);
  const [open, setOpen] = useState(false);

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
      <div className="scroll-progress-bar" />
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo" onClick={() => setOpen(false)}>
            <span>J</span>ed.
          </a>
          <div className="nav-links">
            {navLinks.map((l) => (
              <NavLink key={l.href} l={l} active={active === l.href} />
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
