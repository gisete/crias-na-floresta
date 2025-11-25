'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface HeroProps {
  type: 'video' | 'image';
  videoSrc?: string;
  imageSrc?: string;
  alt?: string;
  variant?: 'homepage' | 'page'; // New prop to distinguish hero styles
  logoSrc?: string; // Only used with 'homepage' variant
  title?: string; // Only used with 'page' variant
}

export default function Hero({
  type,
  videoSrc,
  imageSrc,
  alt,
  variant = 'page',
  logoSrc,
  title,
}: HeroProps) {
  // Homepage variant with full screen hero and logo
  if (variant === 'homepage') {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {type === 'video' && videoSrc ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-75"
            >
              <source src={videoSrc} type="video/mp4" />
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={alt || ''}
                  fill
                  className="object-cover brightness-75"
                  priority
                  quality={90}
                />
              )}
            </video>
          ) : (
            imageSrc && (
              <Image
                src={imageSrc}
                alt={alt || ''}
                fill
                className="object-cover brightness-75"
                priority
                quality={90}
              />
            )
          )}
        </div>

        {/* Centered Logo */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
          {logoSrc && (
            <Image
              src={logoSrc}
              alt="Crias na Floresta"
              width={500}
              height={500}
              className="w-64 md:w-96 lg:w-[500px] h-auto object-contain drop-shadow-2xl"
              priority
            />
          )}
        </div>
      </section>
    );
  }

  // Page variant with full screen hero and title
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {type === 'video' && videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-75"
          >
            <source src={videoSrc} type="video/mp4" />
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={alt || ''}
                fill
                className="object-cover brightness-75"
                priority
                quality={90}
              />
            )}
          </video>
        ) : (
          imageSrc && (
            <Image
              src={imageSrc}
              alt={alt || ''}
              fill
              className="object-cover brightness-75"
              priority
              quality={90}
            />
          )
        )}
      </div>

      {/* Centered Title */}
      {title && (
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-light-beige px-6">
          <h1 className="text-5xl md:text-8xl !text-light-beige font-thin text-center drop-shadow-2xl">
            {title}
          </h1>
        </div>
      )}
    </section>
  );
}
