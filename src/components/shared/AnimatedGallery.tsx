'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AnimatedGallery() {
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
        threshold: 0.5, // Trigger when 30% of the section is visible
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
    <section className="pb-24 overflow-hidden" ref={sectionRef}>
      <div className="transform -translate-y-20 flex flex-col md:flex-row items-start justify-center gap-4 md:gap-4 w-full 2xl:max-w-[90%] mx-auto">
        {/* Left Image: Vertically Centered relative to the group */}
        <div
          suppressHydrationWarning
          className={`w-full md:w-1/4 relative h-80 md:h-96 transform translate-y-0 md:translate-y-44 transition-all duration-700 ease-out ${
            mounted && isVisible ? 'opacity-100' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <Image
            src="/photos/child-looking.jpg"
            alt="Kids playing"
            fill
            className="object-cover shadow-lg"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        {/* Center Image: Pushed down */}
        <div
          suppressHydrationWarning
          className={`w-full md:w-3/5 z-10 relative h-[400px] md:h-[500px] transform translate-y-20 md:translate-y-32 transition-all duration-700 ease-out ${
            mounted && isVisible ? 'opacity-100' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <Image
            src="/photos/kids-playing.jpg"
            alt="Family in forest"
            fill
            className="object-cover shadow-xl"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>

        {/* Right Image: Sits at the top */}
        <div
          suppressHydrationWarning
          className={`w-full md:w-1/4 relative h-120 transform translate-y-0 transition-all duration-700 ease-out ${
            mounted && isVisible ? 'opacity-100' : 'opacity-0 translate-y-20'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <Image
            src="/photos/child-holding.jpg"
            alt="Climbing tree"
            fill
            className="object-cover shadow-lg"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      </div>
    </section>
  );
}
