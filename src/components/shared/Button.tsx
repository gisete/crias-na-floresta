import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full';

  const sizes = {
    small: 'px-6 py-2 text-sm',
    medium: 'px-8 py-3 text-base',
    large: 'px-10 py-4 text-lg',
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-sage)',
          color: 'var(--color-white)',
          border: '2px solid var(--color-sage)',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--color-earth)',
          color: 'var(--color-forest)',
          border: '2px solid var(--color-earth)',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-forest)',
          border: '2px solid var(--color-forest)',
        };
    }
  };

  const buttonContent = (
    <span className={`${baseStyles} ${sizes[size]} ${className}`} style={getVariantStyles()}>
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-90">
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="hover:opacity-90">
      {buttonContent}
    </button>
  );
}
