'use client';

import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/shared/Hero';
import Container from '@/components/shared/Container';
import Image from 'next/image';

interface GuardioesClientProps {
  pageContent: {
    heroImage: string;
    heroTitle: string;
    aboutTitle: string;
    martaImage: string;
    pedroImage: string;
    martaBio: string;
    pedroBio: string;
    manifestoTitle: string;
    manifestoImage: string;
    manifestoContentPart1: string;
    manifestoQuote: string;
    manifestoContentPart2: string;
    differenceTitle: string;
    differenceContent: string;
    differenceImage: string;
    communityTitle: string;
    communityImage: string;
  };
}

export default function GuardioesClient({ pageContent }: GuardioesClientProps) {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* HERO */}
      <Hero
        type="image"
        imageSrc={pageContent.heroImage}
        alt={pageContent.heroTitle}
        variant="page"
        title={pageContent.heroTitle}
      />

      {/* QUEM SOMOS SECTION */}
      <section className="pt-16 pb-16 md:py-32 px-6 bg-light-beige text-smoke-gray">
        <Container>
          <h2 className="text-5xl md:text-6xl text-center mb-10 md:mb-16 text-fog-gray max-w-md mx-auto">
            {pageContent.aboutTitle}
          </h2>

          {/* Dual Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 md:mb-16 max-w-4xl mx-auto">
            <div className="relative h-[400px] md:h-[550px] w-full">
              <Image
                src={pageContent.martaImage}
                alt="Marta"
                fill
                className="object-cover rounded-sm shadow-sm"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-[400px] md:h-[550px] w-full">
              <Image
                src={pageContent.pedroImage}
                alt="Pedro e as crianças"
                fill
                className="object-cover rounded-sm shadow-sm"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Centered Text Content */}
          <div className="max-w-4xl mx-auto text-center font-light leading-relaxed space-y-12 text-base">
            <div
              className="opacity-90"
              dangerouslySetInnerHTML={{ __html: pageContent.martaBio }}
            />
            <div
              className="opacity-90"
              dangerouslySetInnerHTML={{ __html: pageContent.pedroBio }}
            />
          </div>
        </Container>
      </section>

      {/* MANIFESTO SECTION */}
      <section className="py-16 md:py-32 bg-mossy-green text-light-beige">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 relative items-start">
            {/* Vertical Line Separator - positioned relative to grid container */}
            <div className="hidden md:block absolute left-[calc(40%-0.5rem)] top-1/2 -translate-y-1/2 h-[80%] w-px bg-light-beige/30"></div>

            {/* Left Column (Image & Title) */}
            <div className="flex flex-col relative md:pr-12">

              <h2
                className="text-5xl md:text-7xl leading-[0.9] mb-8 md:mb-12 !text-light-beige"
                dangerouslySetInnerHTML={{ __html: pageContent.manifestoTitle }}
              />

              {/* Image Container */}
              <div
                ref={imageRef}
                suppressHydrationWarning
                className={`relative w-full aspect-[4/5] md:aspect-[3/4] transition-all duration-1000 ease-out ${
                  mounted && isImageVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-32'
                }`}
              >
                <Image
                  src={pageContent.manifestoImage}
                  alt="Manifesto"
                  fill
                  className="object-cover rounded-sm filter sepia-[15%]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="font-light text-base leading-relaxed opacity-90 pl-0 md:pl-4">
              <div className="space-y-8" dangerouslySetInnerHTML={{ __html: pageContent.manifestoContentPart1 }} />

              {pageContent.manifestoQuote && (
                <blockquote className="font-cormorant text-2xl md:text-3xl italic my-8 md:my-12 leading-tight text-white opacity-100">
                  {pageContent.manifestoQuote}
                </blockquote>
              )}

              <div className="space-y-8" dangerouslySetInnerHTML={{ __html: pageContent.manifestoContentPart2 }} />
            </div>
          </div>
        </Container>
      </section>

      {/* A NOSSA DIFERENÇA SECTION */}
      <section className="pt-16 md:pt-32 bg-light-beige">
        <Container className="max-w-6xl">
          <h2 className="text-5xl md:text-6xl text-center mb-10 md:mb-16 text-fog-gray">
            {pageContent.differenceTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text Content */}
            <div
              className="space-y-6 font-light text-base leading-relaxed text-smoke-gray"
              dangerouslySetInnerHTML={{ __html: pageContent.differenceContent }}
            />

            {/* Image */}
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={pageContent.differenceImage}
                alt="Mãos na terra"
                fill
                className="object-cover rounded-sm shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* A NOSSA COMUNIDADE SECTION */}
      <section className="pt-16 pb-16 md:py-32 md:pb-38 bg-light-beige">
        <Container>
          <h2 className="text-5xl md:text-6xl text-center mb-8 md:mb-12 text-fog-gray">
            {pageContent.communityTitle}
          </h2>
          <div className="relative w-full h-[300px] md:h-[600px] max-w-5xl mx-auto">
            <Image
              src={pageContent.communityImage}
              alt="Comunidade Crias na Floresta"
              fill
              className="object-cover rounded-sm shadow-lg"
              sizes="100vw"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
