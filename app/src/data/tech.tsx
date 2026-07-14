"use client";
import type { TechCategory, SkillCategory } from "@/types";
import { icons } from "@/components/TechIcons";
import { MonitorIcon, ServerIcon, CloudIcon, BrainIcon } from "@/icons/ui";

export const stack: TechCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: icons.react },
      { name: "React Native", icon: icons.react },
      { name: "Next.js", icon: icons.nextjs },
      { name: "TypeScript", icon: icons.typescript },
      { name: "Tailwind CSS", icon: icons.tailwindcss },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: icons.nodejs },
      { name: "Express", icon: icons.express },
      { name: "NestJS", icon: icons.nestjs },
      { name: ".NET", icon: icons.dotnet },
      { name: "Python", icon: icons.python },
    ],
  },
  {
    category: "Cloud & Infra",
    items: [
      { name: "AWS", icon: icons.aws },
      { name: "Docker", icon: icons.docker },
      { name: "CI/CD", icon: icons.cicd },
    ],
  },
  {
    category: "Data & ML",
    items: [
      { name: "TensorFlow", icon: icons.tensorflow },
      { name: "YOLO", icon: icons.yolo },
      { name: "MongoDB", icon: icons.mongodb },
      { name: "PostgreSQL", icon: icons.postgresql },
      { name: "Redis", icon: icons.redis },
    ],
  },
];

export const skills: SkillCategory[] = [
  { title: "Frontend", tags: stack[0].items, icon: <MonitorIcon /> },
  { title: "Backend", tags: stack[1].items, icon: <ServerIcon /> },
  { title: "Cloud & DevOps", tags: stack[2].items, icon: <CloudIcon /> },
  { title: "Machine Learning", tags: [...stack[3].items, { name: "OpenCV", icon: icons.python }], icon: <BrainIcon /> },
];
