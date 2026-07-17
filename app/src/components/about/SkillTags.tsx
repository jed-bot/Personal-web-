'use client';

interface SkillTagsProps {
  items: { name: string; icon: React.ReactNode }[];
}

export function SkillTags({ items }: SkillTagsProps) {
  return (
    <div className="about-stack-tags">
      {items.map((t, i) => (
        <span key={t.name} className="tag tag-icon" style={{ '--d': i } as React.CSSProperties}>
          <span className="tag-icon-svg">{t.icon}</span>
          {t.name}
        </span>
      ))}
    </div>
  );
}