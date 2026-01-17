'use client';

import { useState } from 'react';
import Hero from '@/components/shared/Hero';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
}

interface PageContent {
  title: string;
  subtitle: string;
  eyebrow: string;
  heroImage: string;
}

interface GalleryClientProps {
  images: GalleryImage[];
  pageContent: PageContent;
}

export default function GalleryClient({ images, pageContent }: GalleryClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <div>
      <Hero
        type="image"
        imageSrc={pageContent.heroImage}
        alt="Galeria"
        variant="page"
        title="Galeria"
      />

      {/* Gallery Header */}
      <section className="pt-16 pb-12 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {pageContent.eyebrow && (
            <p className="text-sm uppercase tracking-widest text-fog-gray mb-4">
              {pageContent.eyebrow}
            </p>
          )}
          <div className="w-16 h-px bg-fog-gray mx-auto mb-6 md:mb-8 opacity-30"></div>
          <h1 className="text-5xl md:text-6xl mb-4 md:mb-6 font-cormorant">{pageContent.title}</h1>
          {pageContent.subtitle && (
            <p className="text-sm italic text-fog-gray">"{pageContent.subtitle}"</p>
          )}
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="pb-16 md:pb-32 px-6">
        <div className="max-w-[1200px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-8 relative cursor-pointer group transition-transform duration-400 hover:-translate-y-2"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-auto rounded-sm transition-all duration-400 filter sepia-[10%] contrast-95 group-hover:sepia-0 group-hover:contrast-100 group-hover:shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-mossy-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-sm">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 text-white text-4xl hover:text-fog-gray transition z-50"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-8 text-white text-5xl hover:text-fog-gray transition z-50"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-8 text-white text-5xl hover:text-fog-gray transition z-50"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
