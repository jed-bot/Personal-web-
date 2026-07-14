"use client";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { icons } from "./TechIcons";

const skills = [
  {
    title: "Frontend",
    tags: [
      { name: "React", icon: icons.react },
      { name: "React Native", icon: icons.react },
      { name: "Next.js", icon: icons.nextjs },
      { name: "TypeScript", icon: icons.typescript },
      { name: "Tailwind CSS", icon: icons.tailwindcss },
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/></svg>
    ),
  },
  {
    title: "Backend",
    tags: [
      { name: "Node.js", icon: icons.nodejs },
      { name: "Express", icon: icons.express },
      { name: "NestJS", icon: icons.nestjs },
      { name: ".NET", icon: icons.dotnet },
      { name: "Python", icon: icons.python },
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 3V8L8 11V8L2 11Z"/><path d="M12 12V4"/><path d="m8 8 4-4 4 4"/></svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    tags: [
      { name: "AWS", icon: icons.aws },
      { name: "Docker", icon: icons.docker },
      { name: "CI/CD", icon: icons.cicd },
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
    ),
  },
  {
    title: "Machine Learning",
    tags: [
      { name: "TensorFlow", icon: icons.tensorflow },
      { name: "YOLO", icon: icons.yolo },
      { name: "OpenCV", icon: icons.python },
      { name: "PostgreSQL", icon: icons.postgresql },
      { name: "Redis", icon: icons.redis },
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>
    ),
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <FadeUp>
          <div className="section-header">
            <span className="section-label">Skills</span>
            <h2 className="section-title">What I Work With</h2>
            <p className="section-subtitle">
              A focused toolkit across frontend, backend, cloud, and machine learning.
            </p>
          </div>
        </FadeUp>
        <StaggerContainer>
          <div className="skills-grid">
            {skills.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  className="card skill-card"
                  whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.35), 0 0 40px rgba(34,197,94,0.25)" }}
                  transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                >
                  <div className="skill-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <div className="skill-tags">
                    {s.tags.map((t) => (
                      <span key={t.name} className="tag tag-icon">
                        <span className="tag-icon-svg">{t.icon}</span>
                        {t.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
