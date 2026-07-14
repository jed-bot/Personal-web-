import { ReactNode } from "react";

export interface TechItem {
  name: string;
  icon: ReactNode;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface SkillCategory {
  title: string;
  tags: TechItem[];
  icon: ReactNode;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface ContactChannel {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface Stat {
  num: number;
  suffix?: string;
  label: string;
}

export interface Feature {
  title: string;
  desc: string;
  icon: ReactNode;
}

export interface Screenshot {
  src: string;
  alt: string;
}

export interface NavLink {
  label: string;
  href: string;
}
