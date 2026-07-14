"use client";
import { FadeUp, FadeLeft, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { icons } from "./TechIcons";

const stats = [
  { num: "3+", label: "Years Experience" },
  { num: "15+", label: "Projects Delivered" },
  { num: "10+", label: "Technologies" },
];

const stack = [
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

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <FadeLeft>
            <div className="about-stack">
              {stack.map((s) => (
                <div key={s.category} className="about-stack-group">
                  <h4 className="about-stack-cat">{s.category}</h4>
                  <div className="about-stack-tags">
                    {s.items.map((t) => (
                      <span key={t.name} className="tag tag-icon">
                        <span className="tag-icon-svg">{t.icon}</span>
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeLeft>
          <div className="about-text">
            <FadeUp>
              <span className="tag">About Me</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3>Crafting Digital Experiences That Matter</h3>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p>
                I&apos;m a full-stack developer with a passion for building software
                that solves real problems. I work across the entire stack — from
                designing intuitive mobile interfaces to engineering scalable
                backend systems.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p>
                With hands-on experience in React Native, Node.js, Docker,
                CI/CD pipelines, and machine learning, I bring a holistic
                approach to every project. I believe great software is built at
                the intersection of clean code and thoughtful design.
              </p>
            </FadeUp>
            <StaggerContainer>
              <div className="about-stats">
                {stats.map((s) => (
                  <StaggerItem key={s.label}>
                    <div className="about-stat">
                      <div className="about-stat-num">{s.num}</div>
                      <div className="about-stat-label">{s.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
