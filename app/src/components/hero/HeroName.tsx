'use client';

const nameWords = ['Jed Nikko'];
const surnameLetters = 'San Agustin'.split('');

export function HeroName() {
  return (
    <h1 className="hero-name kinetic-heading">
      <span className="kinetic-word">
        {nameWords[0].split('').map((ch, ci) => (
          <span
            key={ci}
            className="kinetic-letter hero-letter"
            style={{ '--i': ci } as React.CSSProperties}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </span>
      <br />
      <span className="accent kinetic-word">
        {surnameLetters.map((ch, ci) => (
          <span
            key={ci}
            className="kinetic-letter hero-letter"
            style={{ '--i': ci + 4 } as React.CSSProperties}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </span>
    </h1>
  );
}