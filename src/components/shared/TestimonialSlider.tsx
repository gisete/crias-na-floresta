'use client';

import { useState } from 'react';

interface Testimonial {
  quote: string;
  author?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Wait for fade out, then change content, then fade in
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Wait for fade out, then change content, then fade in
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative z-20">
      {/* Navigation Arrows - Top on mobile, sides on desktop */}
      <div className="flex justify-between items-center mb-6 md:hidden">
        <button
          onClick={handlePrevious}
          className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 p-2.5"
          aria-label="Previous testimonial"
        >
          <svg
            width="45"
            height="14"
            viewBox="0 0 40 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM40 5.25L1 5.25V6.75L40 6.75V5.25Z"
              fill="#F2F0E6"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 p-2.5"
          aria-label="Next testimonial"
        >
          <svg
            width="45"
            height="14"
            viewBox="0 0 40 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z"
              fill="#F2F0E6"
            />
          </svg>
        </button>
      </div>

      {/* Desktop layout with arrows on sides */}
      <div className="hidden md:flex items-center gap-10">
        {/* Left Arrow - Desktop only */}
        <button
          onClick={handlePrevious}
          className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 p-2.5 flex-shrink-0"
          aria-label="Previous testimonial"
        >
          <svg
            width="45"
            height="14"
            viewBox="0 0 40 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM40 5.25L1 5.25V6.75L40 6.75V5.25Z"
              fill="#F2F0E6"
            />
          </svg>
        </button>

        {/* Quote Text - Desktop */}
        <div className="flex-1 min-w-0 h-[420px] flex flex-col justify-center">
          <div
            className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          >
            <p className="text-[15px] leading-[1.9] font-light opacity-90 max-w-[620px]">
              "{currentTestimonial.quote}"
            </p>
            {currentTestimonial.author && (
              <p className="text-[13px] mt-4 opacity-70 italic">— {currentTestimonial.author}</p>
            )}
          </div>
        </div>

        {/* Right Arrow - Desktop only */}
        <button
          onClick={handleNext}
          className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 p-2.5 flex-shrink-0"
          aria-label="Next testimonial"
        >
          <svg
            width="45"
            height="14"
            viewBox="0 0 40 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z"
              fill="#F2F0E6"
            />
          </svg>
        </button>
      </div>

      {/* Quote Text - Mobile (full width) */}
      <div className="md:hidden">
        <div
          className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
          <p className="text-sm leading-[1.9] font-light opacity-90">
            "{currentTestimonial.quote}"
          </p>
          {currentTestimonial.author && (
            <p className="text-xs mt-4 opacity-70 italic">— {currentTestimonial.author}</p>
          )}
        </div>
      </div>
    </div>
  );
}
