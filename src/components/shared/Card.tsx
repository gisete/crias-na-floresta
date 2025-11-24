import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl p-8 ${hover ? 'transition-transform duration-300 hover:scale-105 hover:shadow-xl' : ''} ${className}`}
      style={{
        backgroundColor: 'var(--color-white)',
        boxShadow: '0 4px 6px -1px rgba(61, 79, 58, 0.1), 0 2px 4px -1px rgba(61, 79, 58, 0.06)',
      }}
    >
      {children}
    </div>
  );
}
