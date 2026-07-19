'use client';

import { useRef } from 'react';
import Image from 'next/image';

const blobContainerStyle: React.CSSProperties = {
  position: 'absolute',
  inset: '-40px',
  zIndex: 0,
  pointerEvents: 'none',
  overflow: 'hidden',
  borderRadius: 'var(--radius-2xl)',
};

const blob1Style: React.CSSProperties = {
  position: 'absolute',
  top: '10%',
  left: '-10%',
  width: '70%',
  height: '70%',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
  filter: 'blur(40px)',
  animation: 'morphBlob1 8s ease-in-out infinite alternate',
  willChange: 'transform, border-radius',
};

const blob2Style: React.CSSProperties = {
  position: 'absolute',
  bottom: '5%',
  right: '-15%',
  width: '65%',
  height: '65%',
  background: 'linear-gradient(225deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
  filter: 'blur(35px)',
  animation: 'morphBlob2 10s ease-in-out infinite alternate',
  willChange: 'transform, border-radius',
};

const portraitInnerStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 1,
  transformStyle: 'preserve-3d',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
};

export function HeroPortrait() {
  const portraitRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="hero-portrait"
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      } as React.CSSProperties}
    >
      <div style={blobContainerStyle}>
        <div style={blob1Style} />
        <div style={blob2Style} />
      </div>

      <div ref={portraitRef} style={portraitInnerStyle}>
        <div className="hero-portrait-ring" />
        <div className="hero-portrait-glow" />
        <Image
          src="/pfp.jpg"
          alt="Jed Nikko San Agustin"
          className="hero-portrait-img"
          width={420}
          height={420}
          sizes="(max-width: 768px) 260px, (max-width: 1024px) 340px, 420px"
          priority
        />
      </div>
    </div>
  );
}