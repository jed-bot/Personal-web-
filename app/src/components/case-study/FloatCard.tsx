'use client';

interface FloatCardProps {
  icon: React.ReactNode;
  label: string;
  className: string;
}

export function FloatCard({ icon, label, className }: FloatCardProps) {
  return (
    <div className={`float-card ${className}`}>
      {icon}
      {label}
    </div>
  );
}