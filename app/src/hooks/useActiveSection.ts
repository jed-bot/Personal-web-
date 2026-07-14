"use client";
import { useState, useEffect } from "react";
import type { NavLink } from "@/types";

export function useActiveSection(links: NavLink[]) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(links[0]?.href ?? "#about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = links.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive("#" + sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  return { scrolled, active };
}
