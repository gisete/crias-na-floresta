'use client';

import Hero from '@/components/shared/Hero';
import ACriasGallery from '@/components/shared/ACriasGallery';
import TestimonialSlider from '@/components/shared/TestimonialSlider';
import Image from 'next/image';

interface HomeClientProps {
  pageContent: {
    heroVideoUrl: string;
    heroPlaceholder: string;
    heroFallbackImage: string;
    heroLogo: string;
    introTitle: string;
    introContent: string;
    introLinkText: string;
    introLinkUrl: string;
    quoteText: string;
    quoteIcon: string;
    juntaTeTitle: string;
    juntaTeContent: string;
    juntaTeImage: string;
    juntaTeLinkText: string;
    juntaTeLinkUrl: string;
    guardioesTitle: string;
    guardioesContent: string;
    guardioesImage: string;
    guardioesLinkText: string;
    guardioesLinkUrl: string;
    testimonialTitle: string;
    testimonialBackgroundImage: string;
    testimonials: Array<{
      quote: string;
      author?: string;
    }>;
  };
}

export default function HomeClient({ pageContent }: HomeClientProps) {
  return (
    <div>
      {/* HERO SECTION */}
      <Hero
        type="video"
        videoSrc={pageContent.heroVideoUrl}
        placeholderSrc={pageContent.heroPlaceholder}
        imageSrc={pageContent.heroFallbackImage}
        alt="Forest Background"
        variant="homepage"
        logoSrc={pageContent.heroLogo}
        objectPosition="center center"
      />

      {/* INTRO SECTION */}
      <section className="pt-16 pb-24 md:py-32 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl mb-8 md:mb-12">{pageContent.introTitle}</h2>

          <div
            className="space-y-6 md:space-y-8 text-base leading-relaxed font-light"
            dangerouslySetInnerHTML={{ __html: pageContent.introContent }}
          />

          <div className="mt-12 md:mt-16">
            <a
              href={pageContent.introLinkUrl}
              className="text-sm uppercase tracking-widest text-fog-gray border-b border-fog-gray pb-1 hover:opacity-70 transition duration-300"
            >
              {pageContent.introLinkText}
            </a>
          </div>
        </div>

        {/* Image Gallery */}
        <ACriasGallery />
      </section>

      {/* QUOTE SECTION */}
      <section className="pb-16 md:pb-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4 md:mb-6 flex justify-center opacity-50">
            <Image
              src={pageContent.quoteIcon}
              alt="Branches and leaves decoration"
              width={68}
              height={68}
              className="w-18 h-18 object-contain rotate-[50deg]"
            />
          </div>
          <blockquote className="font-cormorant text-fog-gray text-2xl md:text-3xl italic mb-4 md:mb-6 leading-snug">
            {pageContent.quoteText}
          </blockquote>
        </div>
      </section>

      {/* "JUNTA-TE A NÓS" */}
      <section className="relative w-full h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Big Background Image */}
        <Image
          src={pageContent.juntaTeImage}
          alt="Forest Adventure"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
        />

        {/* Centered Container Box */}
        <div className="relative z-10 bg-mossy-green text-light-beige p-10 md:p-12 max-w-[650px] mx-4 shadow-2xl">
          <h2 className="!text-light-beige text-4xl md:text-5xl mb-8 text-center">
            {pageContent.juntaTeTitle}
          </h2>

          <div
            className="space-y-6 text-base font-light leading-relaxed text-center"
            dangerouslySetInnerHTML={{ __html: pageContent.juntaTeContent }}
          />

          <div className="mt-10 text-center">
            <a
              href={pageContent.juntaTeLinkUrl}
              className="text-sm uppercase tracking-widest border-b border-light-beige border-opacity-50 pb-1 hover:text-white hover:border-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {pageContent.juntaTeLinkText}
            </a>
          </div>
        </div>
      </section>

      {/* "POR TRÁS" */}
      <section className="pt-16 pb-16 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1 relative h-[400px] md:h-[600px]">
            <Image
              src={pageContent.guardioesImage}
              alt="Team Member"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text Column */}
          <div className="order-1 md:order-2 md:pl-12">
            <h2 className="text-5xl md:text-6xl mb-8 md:mb-10">{pageContent.guardioesTitle}</h2>

            <div
              className="space-y-6 text-base leading-relaxed font-light"
              dangerouslySetInnerHTML={{ __html: pageContent.guardioesContent }}
            />

            <div className="mt-10 md:mt-12">
              <a
                href={pageContent.guardioesLinkUrl}
                className="text-sm uppercase tracking-widest text-fog-gray border-b border-fog-gray pb-1 hover:opacity-70 transition"
              >
                {pageContent.guardioesLinkText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="relative py-24 md:py-32 min-h-[700px] flex items-center overflow-hidden mb-24 md:mb-40">
        {/* Background Image */}
        <div className="absolute inset-0 md:left-[30%]">
          <Image
            src={pageContent.testimonialBackgroundImage}
            alt="Kids hands in dirt"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 70vw"
          />
        </div>

        {/* Content Box */}
        <div className="relative z-10 w-full max-w-[850px] mx-4 md:ml-40 bg-mossy-green text-light-beige p-8 md:p-12 md:px-4 md:py-16 shadow-2xl">
          <h3 className="!text-light-beige text-3xl md:text-4xl mb-8 text-center">
            {pageContent.testimonialTitle}
          </h3>

          <TestimonialSlider testimonials={pageContent.testimonials} />
        </div>
      </section>
    </div>
  );
}
