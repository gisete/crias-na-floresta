'use client';

import Hero from '@/components/shared/Hero';
import Image from 'next/image';
import SessoesGallery from '@/components/shared/SessoesGallery';
import Container from '@/components/shared/Container';
import { getYouTubeEmbedUrl } from '@/lib/youtubeHelpers';

interface AFlorestaClientProps {
  pageContent: {
    heroImage: string;
    heroTitle: string;
    forestSchoolTitle: string;
    forestSchoolImages: Array<{
      src: string;
      alt: string;
    }>;
    forestSchoolContent: string;
    sentirTitle: string;
    features: Array<{
      icon: string;
      title: string;
      items: string[];
    }>;
    sessoesTitle: string;
    sessoesIntro: string;
    comoFuncionaStoryTitle: string;
    comoFuncionaStoryContent: string;
    comoFuncionaTitle: string;
    ageInfo: string;
    scheduleInfo: string;
    locationInfo: string;
    pricingInfo: string;
    monthlyPacksInfo: string;
    photoPacksInfo: string;
    disclaimer: string;
    inscricaoLink: string;
    videoTitle: string;
    videoUrl: string;
  };
}

export default function AFlorestaClient({ pageContent }: AFlorestaClientProps) {
  return (
    <div>
      <Hero
        type="image"
        imageSrc={pageContent.heroImage}
        alt={pageContent.heroTitle}
        variant="page"
        title={pageContent.heroTitle}
      />

      {/* FOREST SCHOOL - O QUE É */}
      <section className="pt-16 pb-16 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-center mb-12 md:mb-20 text-fog-gray">
            {pageContent.forestSchoolTitle}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 items-start">
            {/* Images Container */}
            <div className="flex gap-6 items-start">
              {/* Left Column: 2 Stacked Images */}
              <div className="flex flex-col gap-6 w-1/2">
                {/* Top Left - Landscape */}
                {pageContent.forestSchoolImages[0] && (
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={pageContent.forestSchoolImages[0].src}
                      alt={pageContent.forestSchoolImages[0].alt}
                      fill
                      className="object-cover rounded-sm shadow-sm"
                      sizes="(max-width: 768px) 50vw, 27vw"
                    />
                  </div>
                )}
                {/* Bottom Left - Portrait */}
                {pageContent.forestSchoolImages[1] && (
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={pageContent.forestSchoolImages[1].src}
                      alt={pageContent.forestSchoolImages[1].alt}
                      fill
                      className="object-cover rounded-sm shadow-sm"
                      sizes="(max-width: 768px) 50vw, 27vw"
                    />
                  </div>
                )}
              </div>

              {/* Right Column: 1 Offset Image */}
              <div className="w-1/2 mt-20">
                {/* Right - Portrait */}
                {pageContent.forestSchoolImages[2] && (
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={pageContent.forestSchoolImages[2].src}
                      alt={pageContent.forestSchoolImages[2].alt}
                      fill
                      className="object-cover rounded-sm shadow-sm"
                      sizes="(max-width: 768px) 50vw, 27vw"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Text Content */}
            <div
              className="mt-2 space-y-6 text-base leading-relaxed font-light text-smoke-gray"
              dangerouslySetInnerHTML={{ __html: pageContent.forestSchoolContent }}
            />
          </div>
        </div>
      </section>

      {/* FEATURES - APRENDER COM A FLORESTA */}
      <section className="bg-mossy-green text-light-beige py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="!text-light-beige text-4xl md:text-5xl text-center mb-10 md:mb-16">
            {pageContent.sentirTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {pageContent.features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-4 items-center md:items-start">
                <div className="relative w-24 h-24">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <h4 className="text-lg !text-light-beige uppercase tracking-wider text-center md:text-left">
                  {feature.title}
                </h4>
                <ul className="text-sm mt-2 opacity-90 space-y-4 list-disc pl-4 marker:text-light-beige/40">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SESSÕES */}
      <section className="pt-16 pb-16 md:py-32 px-6 bg-light-beige">
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-5xl md:text-6xl mb-6 md:mb-8 text-fog-gray">{pageContent.sessoesTitle}</h2>
          <p className="text-base leading-relaxed text-smoke-gray">{pageContent.sessoesIntro}</p>
        </div>

        <SessoesGallery />
      </section>

      {/* COMO FUNCIONA */}
      <section className="pb-16 pt-2 md:pb-32 md:pt-8 bg-light-beige px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-8 md:gap-12 items-start">
            {/* Left Column: Story Text (No Background) */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl pt-6 md:pt-12 text-fog-gray font-cormorant leading-[1.1] mb-6">
                {pageContent.comoFuncionaStoryTitle}
              </h3>

              <div
                className="space-y-4 text-base leading-relaxed text-smoke-gray font-light"
                dangerouslySetInnerHTML={{ __html: pageContent.comoFuncionaStoryContent }}
              />

              <div className="mt-8 mb-12 md:mb-0">
                <a
                  href={pageContent.inscricaoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-[0.2em] text-fog-gray border-b border-fog-gray pb-1 hover:opacity-60 transition"
                >
                  Inscreve-te &rarr;
                </a>
              </div>
            </div>

            {/* Right Column: Logistics + Pricing (With Green Background) */}
            <div className="bg-mossy-green text-light-beige p-8 md:p-12">
              <h3 className="!text-light-beige text-3xl md:text-4xl font-cormorant mb-10">
                {pageContent.comoFuncionaTitle}
              </h3>

              <div className="space-y-8 text-sm font-light">
                <div>
                  <strong className="block mb-3 text-white font-bold text-sm">Idade</strong>
                  <div
                    className="opacity-90"
                    dangerouslySetInnerHTML={{ __html: pageContent.ageInfo }}
                  />
                </div>

                <div>
                  <strong className="block mb-3 text-white font-bold text-sm">Horário</strong>
                  <div
                    className="opacity-90"
                    dangerouslySetInnerHTML={{ __html: pageContent.scheduleInfo }}
                  />
                </div>

                <div>
                  <strong className="block mb-3 text-white font-bold text-sm">Onde Estamos</strong>
                  <div
                    className="opacity-90"
                    dangerouslySetInnerHTML={{ __html: pageContent.locationInfo }}
                  />
                </div>

                <div>
                  <strong className="block mb-3 text-white font-bold text-sm">
                    Preçário (por criança):
                  </strong>
                  <div
                    className="opacity-90"
                    dangerouslySetInnerHTML={{ __html: pageContent.pricingInfo }}
                  />
                </div>

                <div>
                  <strong className="block mb-3 text-white font-bold text-sm">
                    Packs mensais:
                  </strong>
                  <div
                    className="opacity-90"
                    dangerouslySetInnerHTML={{ __html: pageContent.monthlyPacksInfo }}
                  />
                </div>

                <div>
                  <strong className="block mb-3 text-white font-bold text-sm">
                    Packs com registos fotográficos:
                  </strong>
                  <div
                    className="opacity-90"
                    dangerouslySetInnerHTML={{ __html: pageContent.photoPacksInfo }}
                  />
                </div>

                {/* Disclaimer */}
                {pageContent.disclaimer && (
                  <div
                    className="pt-4 text-xs italic opacity-60 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: pageContent.disclaimer }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="pb-16 md:pb-32 px-6 bg-light-beige">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl text-center mb-8 md:mb-12 text-fog-gray">
            {pageContent.videoTitle}
          </h2>
          <div className="relative w-full h-[300px] md:h-[600px] bg-smoke-gray shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={getYouTubeEmbedUrl(pageContent.videoUrl)}
              title={pageContent.videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
