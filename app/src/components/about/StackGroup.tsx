'use client';

import type { TechCategory } from '@/core/types';

interface StackGroupProps {
  group: TechCategory;
}

export function StackGroup({ group }: StackGroupProps) {
  return (
    <div className="about-stack-group" data-stagger="">
      <h4 className="about-stack-cat">{group.category}</h4>
      <div className="about-stack-tags">
        {group.items.map((t, i) => (
          <span key={t.name} className="tag tag-icon" style={{ '--d': i } as React.CSSProperties}>
            <span className="tag-icon-svg">{t.icon}</span>
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}