"use client";
import type { SocialLink, ContactChannel, Stat, NavLink } from "@/types";
import { GitHubIcon, LinkedInIcon, FacebookIcon, GmailIcon } from "@/icons/social";

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/jed-bot-1", icon: <GitHubIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jed-nikko-san-agustin-91239a327/", icon: <LinkedInIcon /> },
  { label: "Facebook", href: "https://www.facebook.com/jednikkooo", icon: <FacebookIcon /> },
  { label: "Gmail", href: "mailto:jednikkosanagustin@gmail.com", icon: <GmailIcon /> },
];

export const channels: ContactChannel[] = [
  { label: "jednikkosanagustin@gmail.com", href: "mailto:jednikkosanagustin@gmail.com", icon: <GmailIcon /> },
  { label: "linkedin.com/in/jed-nikko-san-agustin", href: "https://www.linkedin.com/in/jed-nikko-san-agustin-91239a327/", icon: <LinkedInIcon /> },
  { label: "github.com/jed-bot-1", href: "https://github.com/jed-bot-1", icon: <GitHubIcon /> },
];

export const aboutStats: Stat[] = [
  { num: 3, suffix: "+", label: "Years Experience" },
  { num: 15, suffix: "+", label: "Projects Delivered" },
  { num: 10, suffix: "+", label: "Technologies" },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const EMAIL = "jednikkosanagustin@gmail.com";
