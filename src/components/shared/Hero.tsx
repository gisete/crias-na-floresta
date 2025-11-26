'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export interface HeroProps {
  type: 'video' | 'image';
  videoSrc?: string;
  imageSrc?: string;
  placeholderSrc?: string; // Blurred placeholder for video loading
  alt?: string;
  variant?: 'homepage' | 'page'; // New prop to distinguish hero styles
  logoSrc?: string; // Only used with 'homepage' variant
  title?: string; // Only used with 'page' variant
  objectPosition?: string; // Custom object-position for video/image
}

export default function Hero({
  type,
  videoSrc,
  imageSrc,
  placeholderSrc,
  alt,
  variant = 'page',
  logoSrc,
  title,
  objectPosition = 'center center',
}: HeroProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Preload video if type is video
    if (type === 'video' && videoSrc) {
      const video = document.createElement('video');
      video.src = videoSrc;
      video.onloadeddata = () => {
        setVideoLoaded(true);
      };
      video.load();
    }
  }, [type, videoSrc]);
  // Homepage variant with full screen hero and logo
  if (variant === 'homepage') {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Media with blur-up loading */}
        <div className="absolute inset-0">
          {type === 'video' && videoSrc ? (
            <>
              {/* Blurred placeholder image */}
              {placeholderSrc && (
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    videoLoaded ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ zIndex: 1 }}
                >
                  <Image
                    src={placeholderSrc}
                    alt={alt || ''}
                    fill
                    className="object-cover brightness-75 blur-md scale-110"
                    style={{ objectPosition }}
                    priority
                    quality={50}
                  />
                </div>
              )}

              {/* Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className={`w-full h-full object-cover brightness-75 transition-opacity duration-700 ${
                  videoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectPosition, zIndex: 2 }}
                onLoadedData={() => setVideoLoaded(true)}
              >
                <source src={videoSrc} type="video/mp4" />
                {/* Fallback to image if video fails */}
                {imageSrc && (
                  <Image
                    src={imageSrc}
                    alt={alt || ''}
                    fill
                    className="object-cover brightness-75"
                    style={{ objectPosition }}
                    priority
                    quality={90}
                  />
                )}
              </video>
            </>
          ) : (
            imageSrc && (
              <Image
                src={imageSrc}
                alt={alt || ''}
                fill
                className="object-cover brightness-75"
                style={{ objectPosition }}
                priority
                quality={90}
              />
            )
          )}
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-5" />

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
      {/* Background Media with blur-up loading */}
      <div className="absolute inset-0">
        {type === 'video' && videoSrc ? (
          <>
            {/* Blurred placeholder image */}
            {placeholderSrc && (
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  videoLoaded ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ zIndex: 1 }}
              >
                <Image
                  src={placeholderSrc}
                  alt={alt || ''}
                  fill
                  className="object-cover brightness-75 blur-md scale-110"
                  style={{ objectPosition }}
                  priority
                  quality={50}
                />
              </div>
            )}

            {/* Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className={`w-full h-full object-cover brightness-75 transition-opacity duration-700 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ objectPosition, zIndex: 2 }}
              onLoadedData={() => setVideoLoaded(true)}
            >
              <source src={videoSrc} type="video/mp4" />
              {/* Fallback to image if video fails */}
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={alt || ''}
                  fill
                  className="object-cover brightness-75"
                  style={{ objectPosition }}
                  priority
                  quality={90}
                />
              )}
            </video>
          </>
        ) : (
          imageSrc && (
            <Image
              src={imageSrc}
              alt={alt || ''}
              fill
              className="object-cover brightness-75"
              style={{ objectPosition }}
              priority
              quality={90}
            />
          )
        )}
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-5" />

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
