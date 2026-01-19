'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ImageData {
  src: string;
  alt: string;
}

interface AnimatedImageGridProps {
  images: ImageData[];
  layout?: 'equal' | 'featured' | 'offset';
  threshold?: number;
  className?: string;
}

export default function AnimatedImageGrid({
  images,
  layout = 'featured',
  threshold = 0.3,
  className = '',
}: AnimatedImageGridProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  const getLayoutClasses = () => {
    if (layout === 'equal') {
      return 'flex flex-col md:flex-row justify-center items-center gap-5';
    }
    if (layout === 'offset') {
      return 'flex flex-col md:flex-row items-start justify-center gap-4 md:gap-4';
    }
    return 'flex flex-col md:flex-row justify-center items-center gap-5';
  };

  const getImageContainerClasses = (index: number, total: number) => {
    const baseClasses = 'relative transition-all duration-1000 ease-out';
    const visibilityClasses =
      mounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16';

    if (layout === 'equal') {
      const width = `md:w-1/${total}`;
      return `${baseClasses} w-full ${width} h-96 ${visibilityClasses}`;
    }

    if (layout === 'offset') {
      if (total === 3) {
        if (index === 0) {
          return `${baseClasses} w-full md:w-1/4 h-80 md:h-96 md:translate-y-44 ${
            mounted && isVisible ? 'opacity-100' : 'opacity-0 translate-y-32'
          }`;
        }
        if (index === 1) {
          return `${baseClasses} w-full md:w-3/5 z-10 h-[400px] md:h-[500px] translate-y-20 md:translate-y-32 ${
            mounted && isVisible ? 'opacity-100' : 'opacity-0 translate-y-52'
          }`;
        }
        return `${baseClasses} w-full md:w-1/4 h-120 translate-y-0 ${
          mounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
        }`;
      }
    }

    // Featured layout (default): left-small, center-large, right-small
    if (total === 3) {
      if (index === 0) return `${baseClasses} w-full md:w-1/4 h-96 ${visibilityClasses}`;
      if (index === 1) return `${baseClasses} w-full md:w-2/5 h-96 ${visibilityClasses}`;
      return `${baseClasses} w-full md:w-1/4 h-96 ${visibilityClasses}`;
    }

    return `${baseClasses} w-full md:w-1/3 h-96 ${visibilityClasses}`;
  };

  const getImageClasses = (index: number) => {
    if (layout === 'featured') {
      if (index === 1) return 'object-cover shadow-xl';
      return 'object-cover shadow-lg';
    }
    return 'object-cover shadow-lg';
  };

  const getDelay = (index: number) => {
    const delays = ['100ms', '300ms', '500ms', '600ms'];
    return delays[index] || '100ms';
  };

  const getSizes = (index: number, total: number) => {
    if (layout === 'featured' && total === 3) {
      if (index === 1) return '(max-width: 768px) 100vw, 40vw';
      return '(max-width: 768px) 100vw, 25vw';
    }
    if (layout === 'offset' && total === 3) {
      if (index === 1) return '(max-width: 768px) 100vw, 60vw';
      return '(max-width: 768px) 100vw, 25vw';
    }
    return `(max-width: 768px) 100vw, ${Math.floor(100 / total)}vw`;
  };

  return (
    <div ref={sectionRef} className={`${getLayoutClasses()} ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          suppressHydrationWarning
          className={getImageContainerClasses(index, images.length)}
          style={{ transitionDelay: getDelay(index) }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={getImageClasses(index)}
            sizes={getSizes(index, images.length)}
          />
        </div>
      ))}
    </div>
  );
}
