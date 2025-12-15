'use client';

import { useState } from 'react';
import Hero from '@/components/shared/Hero';
import Image from 'next/image';

const galleryImages = [
  { src: '/gallery/crias-gallery-1.webp', alt: 'Criança a baloiçar numa corda na floresta' },
  { src: '/gallery/crias-gallery-2.webp', alt: 'Criança com expressão de surpresa a tapar a boca' },
  { src: '/gallery/crias-gallery-3.webp', alt: 'Criança a olhar para livro infantil "Vamos à caça do urso"' },
  { src: '/gallery/crias-gallery-4.webp', alt: 'Família e crianças sentadas numa estrutura de madeira na floresta' },
  { src: '/gallery/crias-gallery-5.webp', alt: 'Criança a brincar com carrinho de madeira e laranjas na floresta' },
  { src: '/gallery/crias-gallery-6.webp', alt: 'Bebé com mochila a preto e branco' },
  { src: '/gallery/crias-gallery-7.webp', alt: 'Criança descalça a brincar com utensílios de cozinha de madeira' },
  { src: '/gallery/crias-gallery-8.webp', alt: 'Criança deitada nas folhas de outono' },
  { src: '/gallery/crias-gallery-9.webp', alt: 'Duas crianças de costas a olhar para baloiço de madeira' },
  { src: '/gallery/crias-gallery-10.webp', alt: 'Criança envolta em manta com palavras sobre sonhar, viver, brincar e liberdade' },
  { src: '/gallery/crias-gallery-11.webp', alt: 'Pés de criança sobre tábua de madeira com folhas de outono flutuando na água' },
  { src: '/gallery/crias-gallery-12.webp', alt: 'Criança a escalar estrutura de madeira vista de cima' },
  { src: '/gallery/crias-gallery-13.webp', alt: 'Criança a bater panela com colher de pau' },
  { src: '/gallery/crias-gallery-14.webp', alt: 'Educadora e bebé sentados numa mesa de madeira ao pôr do sol' },
  { src: '/gallery/crias-gallery-15.webp', alt: 'Criança a explorar flores e sementes na natureza' },
  { src: '/gallery/crias-gallery-16.webp', alt: 'Grupo de crianças pequenas num abraço coletivo' },
  { src: '/gallery/crias-gallery-17.webp', alt: 'Crianças sentadas num tronco com movimento e energia' },
  { src: '/gallery/crias-gallery-18.webp', alt: 'Bebé e adulto a explorar galhos e paus na floresta' },
];

export default function Galeria() {
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
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
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
        imageSrc="/photos/boy-curious.jpg"
        alt="Galeria"
        variant="page"
        title="Galeria"
      />

      {/* Gallery Header */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-fog-gray mb-4">
            Memórias da Natureza
          </p>
          <div className="w-16 h-px bg-fog-gray mx-auto mb-8 opacity-30"></div>
          <h1 className="text-5xl md:text-6xl mb-6 font-cormorant">A Nossa Galeria</h1>
          <p className="text-sm italic text-fog-gray">"Onde a curiosidade encontra a liberdade."</p>
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-[1200px] mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
          {galleryImages.map((image, index) => (
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
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
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
            {currentImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
