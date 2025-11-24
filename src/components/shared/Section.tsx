import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'sand' | 'sage' | 'earth';
  padding?: 'normal' | 'large' | 'small';
}

export default function Section({
  children,
  className = '',
  background = 'default',
  padding = 'normal',
}: SectionProps) {
  const backgrounds = {
    default: 'var(--color-off-white)',
    sand: 'var(--color-sand)',
    sage: 'var(--color-sage-light)',
    earth: 'var(--color-earth-light)',
  };

  const paddings = {
    small: 'py-12 md:py-16',
    normal: 'py-16 md:py-24',
    large: 'py-24 md:py-32',
  };

  return (
    <section
      className={`${paddings[padding]} ${className}`}
      style={{ backgroundColor: backgrounds[background] }}
    >
      <Container>{children}</Container>
    </section>
  );
}
