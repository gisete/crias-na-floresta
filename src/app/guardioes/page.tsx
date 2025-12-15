'use client';

import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/shared/Hero';
import Container from '@/components/shared/Container';
import Image from 'next/image';

export default function QuemSomos() {
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
        imageSrc="/photos/hero-a-floresta.jpg"
        alt="Guardiões da Floresta"
        variant="page"
        title="Guardiões da Floresta"
      />

      {/* QUEM SOMOS SECTION */}
      <section className="py-32 px-6 bg-light-beige text-smoke-gray">
        <Container>
          <h2 className="text-5xl md:text-6xl text-center mb-16 text-fog-gray max-w-md mx-auto">
            Sobre Nós
          </h2>

          {/* Dual Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="relative h-[400px] md:h-[550px] w-full">
              <Image
                src="/photos/marta.jpg"
                alt="Marta"
                fill
                className="object-cover rounded-sm shadow-sm"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-[400px] md:h-[550px] w-full">
              <Image
                src="/photos/kids-jumping-adult.jpg"
                alt="Pedro e as crianças"
                fill
                className="object-cover rounded-sm shadow-sm"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Centered Text Content */}
          <div className="max-w-4xl mx-auto text-center font-light leading-relaxed space-y-12 text-base">
            <p className="opacity-90">
              <strong className="font-bold text-smoke-gray opacity-100 block">
                A Marta, Educadora de Infância, formada e certificada em Forest School Leader,
                coração e raiz da Crias.
              </strong>
              Tem o dom de escutar a natureza, as crianças e as suas famílias com a mesma presença
              de transformar a nossa floresta encantada onde a alma floresce e o brincar é vida.
              Acredita que a infância é um território sagrado, onde o tempo pertence a cada criança.
            </p>

            <p className="opacity-90">
              <strong className="font-bold text-smoke-gray opacity-100 block">
                O Pedro é alma e chama.
              </strong>
              A sua sabedoria, fruto de uma profunda ligação e formação ambiental, faz com que
              reconheça cada planta, árvore e som da floresta — conhece-lhes o nome, o aroma e o
              tempo de cada uma como quem escuta o coração da natureza. O Pedro é natureza, guardião
              das histórias e do tempo que corre devagar. É presença constante, porto seguro e
              inspiração para todos os que fazem parte desta comunidade. Com serenidade e
              criatividade sustenta, juntamente com a Marta, esta floresta de sentido e propósito.
            </p>
          </div>
        </Container>
      </section>

      {/* MANIFESTO SECTION */}
      <section className="py-32 bg-mossy-green text-light-beige">
        <Container className="max-w-6xl">
          {/* Changed grid ratio to 40% / 60% to make the image column smaller */}
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-16 relative items-center">
            {/* Left Column (Image & Title) */}
            <div className="flex flex-col relative md:pr-12">
              {/* Vertical Line Separator */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[80%] w-px bg-light-beige/30"></div>

              <h2 className="text-5xl md:text-7xl leading-[0.9] mb-12 !text-light-beige">
                Nosso
                <br />
                Manifesto
              </h2>

              {/* Image Container - Aspect ratio preserves the look but follows column width */}
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
                  src="/photos/kids-looking.jpg"
                  alt="Manifesto"
                  fill
                  className="object-cover rounded-sm filter sepia-[15%]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Right Column - Text (Takes up more space now) */}
            <div className="space-y-6 font-light text-base leading-relaxed opacity-90 pl-0 md:pl-4">
              <p>
                A sociedade urbana, hoje em dia, opta cada vez mais por formas de contacto simbólico
                com o ambiente natural, num processo de extinção da experiência que parece correr em
                paralelo com a própria perda global de biodiversidade.
              </p>

              <p>
                O contacto direto com a Natureza na primeira infância contribui para o
                desenvolvimento harmonioso do potencial psicocognitivo e constitui uma via
                estrutural para a formação de uma sensibilidade atenta à beleza do mundo. Para a
                criança, é menos importante saber do que sentir: os anos da primeira infância são
                aqueles em que se prepara o solo.
              </p>

              <blockquote className="font-cormorant text-2xl md:text-3xl italic my-12 leading-tight text-white opacity-100">
                Há cada vez menos Natureza disponível — e as crianças estão, também elas, cada vez
                mais longe dela.
              </blockquote>

              <p>
                Uma vez despertas as emoções — o sentido do belo, o entusiasmo, a empatia, a
                piedade, a admiração e o amor — nasce o desejo de conhecimento. Para que esta
                empatia floresça, os adultos de referência precisam também de a viver: com os pés na
                terra, o coração aberto e o olhar atento. Quando demonstram respeito e encanto pela
                Natureza, oferecem à criança a possibilidade de aprender, de cultivar o cuidado e a
                gratidão.
              </p>

              <p>
                O exemplo, vivido e partilhado, é a ponte que alimenta esta ligação profunda. Assim,
                a Natureza deixa de ser apenas um cenário: torna-se extensão da infância, casa,
                espelho e companheira de crescimento.
              </p>

              <p>
                O contacto direto com o meio natural afeta a criança de um modo que nenhuma
                experiência simbólica pode substituir. A riqueza dessa relação primordial modela e
                amplifica toda a multidimensionalidade humana: o sentir, o pensar, o comunicar,
                entre tantos outros aspetos.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* A NOSSA DIFERENÇA SECTION */}
      <section className="pt-32 bg-light-beige">
        <Container className="max-w-6xl">
          <h2 className="text-5xl md:text-6xl text-center mb-16 text-fog-gray">
            A Nossa Diferença
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6 font-light text-base leading-relaxed text-smoke-gray">
              <p>
                A nossa floresta é cuidada e nutrida, todos os dias, por nós. É uma profunda
                dedicação e compromisso. Está fora do nosso alcance mudar o mundo. Aliás é
                completamente irreal.
              </p>
              <p>
                Mas acreditamos que a mudança começa no interior de cada um e no círculo mais
                próximo de influência. O que nos diferencia não é trazermos crias para a natureza.
              </p>

              <p className="font-medium text-mossy-green">
                É como nos relacionamos com a natureza. É olhar para a natureza com igualdade. É a
                empatia que temos para com a natureza humana e não humana. É posicionarmos em
                equilíbrio com o que nos rodeia.
              </p>

              <p>
                Trata-se de proximidade e conexão. É um regresso às nossa origens e ancestralidade.
                É enraizamento e simplicidade.
              </p>

              <p className="italic text-fog-gray text-lg mt-4">
                É esta forma de estar que diferencia o Crias na Floresta.
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-square md:aspect-[4/5]">
              <Image
                src="/photos/holding-basket.jpg"
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
      <section className="py-32 pb-38 bg-light-beige">
        <Container>
          <h2 className="text-5xl md:text-6xl text-center mb-12 text-fog-gray">
            A Nossa Comunidade
          </h2>
          <div className="relative w-full h-[400px] md:h-[600px] max-w-5xl mx-auto">
            <Image
              src="/photos/group-gathering.jpg"
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
