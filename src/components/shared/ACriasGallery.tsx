'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ACriasGallery() {
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
        threshold: 0.3,
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
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-center items-end gap-5 max-w-5xl mx-auto mt-16"
    >
      <div
        suppressHydrationWarning
        className={`w-full md:w-1/4 relative h-64 mb-5 transition-all duration-1000 ease-out ${
          mounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{ transitionDelay: '100ms' }}
      >
        <Image
          src="/photos/child-looking.jpg"
          alt="Child exploring"
          fill
          className="object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div
        suppressHydrationWarning
        className={`w-full md:w-2/5 relative h-96 transition-all duration-1000 ease-out ${
          mounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{ transitionDelay: '300ms' }}
      >
        <Image
          src="/photos/kids-playing.jpg"
          alt="Children playing in nature"
          fill
          className="object-cover shadow-xl"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
      <div
        suppressHydrationWarning
        className={`w-full md:w-1/5 relative h-72 mb-20 transition-all duration-1000 ease-out ${
          mounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{ transitionDelay: '500ms' }}
      >
        <Image
          src="/photos/child-holding.jpg"
          alt="Child in forest"
          fill
          className="object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 20vw"
        />
      </div>
    </div>
  );
}
