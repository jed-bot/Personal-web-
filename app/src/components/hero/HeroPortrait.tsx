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
  filter: 'blur(60px)',
  opacity: 0.18,
  animation: 'morphBlob1 8s ease-in-out infinite alternate',
};

const blob2Style: React.CSSProperties = {
  position: 'absolute',
  bottom: '5%',
  right: '-15%',
  width: '65%',
  height: '65%',
  filter: 'blur(50px)',
  opacity: 0.12,
  animation: 'morphBlob2 10s ease-in-out infinite alternate',
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
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={blob1Style}>
          <defs>
            <linearGradient id="blobGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E5E5E5" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGrad1)"
            d="M44.5,-51.2C56.3,-41.5,63.5,-27.1,66.8,-11.5C70.1,4.1,69.5,21,61.5,33.8C53.5,46.7,38.2,55.5,22.2,60.5C6.2,65.6,-10.5,66.9,-25.8,62.1C-41.1,57.3,-55,46.4,-61.7,32.5C-68.4,18.6,-68,1.7,-63.5,-12.6C-59,-26.9,-50.4,-38.6,-39,-48.3C-27.6,-58,-13.8,-65.7,1.3,-67.4C16.4,-69.1,32.7,-64.8,44.5,-51.2Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={blob2Style}>
          <defs>
            <linearGradient id="blobGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5E5E5" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGrad2)"
            d="M39.9,-47.3C51.5,-36.8,59.5,-23.3,62.3,-8.2C65.1,6.9,62.7,23.6,54.1,36.1C45.5,48.6,30.7,56.9,14.8,61.1C-1.1,65.3,-18.1,65.4,-32.4,59.3C-46.7,53.2,-58.3,40.9,-62.7,26.3C-67.1,11.7,-64.3,-5.2,-57.3,-18.6C-50.3,-32,-39,-41.9,-26.5,-52.1C-14,-62.3,-0.3,-72.8,12.3,-72.1C24.9,-71.4,28.3,-57.8,39.9,-47.3Z"
            transform="translate(100 100)"
          />
        </svg>
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