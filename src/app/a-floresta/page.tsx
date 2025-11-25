import Hero from '@/components/shared/Hero';
import Image from 'next/image';
import SessoesGallery from '@/components/shared/SessoesGallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crias Na Floresta | A Floresta',
  description:
    'Descubra o nosso espaço na floresta, onde as crianças aprendem e exploram através do Forest School.',
};

export default function AFloresta() {
  return (
    <div>
      <Hero
        type="image"
        imageSrc="/photos/hero-a-floresta.jpg"
        alt="A Floresta"
        variant="page"
        title="A Floresta"
      />

      {/* FOREST SCHOOL - O QUE É */}
      <section className="py-24 pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-center mb-20">Forest School</h1>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-16 items-start">
            {/* Images Container */}
            <div className="flex gap-6 items-start">
              {/* Left Column: 2 Stacked Images */}
              <div className="flex flex-col gap-6 w-1/2">
                {/* Top Left - Landscape */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/photos/marta-playing.jpg"
                    alt="Kids in forest"
                    fill
                    className="object-cover rounded-sm shadow-sm"
                    sizes="(max-width: 768px) 50vw, 27vw"
                  />
                </div>
                {/* Bottom Left - Portrait */}
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src="/photos/kids-looking.jpg"
                    alt="Playing in mud"
                    fill
                    className="object-cover rounded-sm shadow-sm"
                    sizes="(max-width: 768px) 50vw, 27vw"
                  />
                </div>
              </div>

              {/* Right Column: 1 Offset Image */}
              <div className="w-1/2 mt-20">
                {/* Right - Portrait */}
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src="/photos/kids-jumping-adult.jpg"
                    alt="Trees"
                    fill
                    className="object-cover rounded-sm shadow-sm"
                    sizes="(max-width: 768px) 50vw, 27vw"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="pt-10 space-y-6 text-sm leading-relaxed font-light">
              <p>
                O Forest School é uma abordagem que assente e princípios e pilares próprios baseados
                na conexão direta e constante com a natureza, olhando para o ser humano como um
                todo.
              </p>
              <p>
                O Forest School encanta, entusiasma, traz magia. Convida à reflexão e provoca.
                Transforma.
              </p>

              <p>
                Trata-se de um programa de sessões regulares ao longo do ano, em todas as estações
                do ano, independentemente das condições atmosféricas, permitindo às crianças e ao
                adulto desenvolver uma relação profunda e de recipriocidade com o mundo natural,
                humano e não humano compreendendo os seus ciclos, ritmos e transformações.
              </p>
              <p>
                No respeito, na liberdade e curiosidade, o Forest School proporciona à criança uma
                aprendizagem viva e significativa para toda a vida — pelo corpo, pelo coração e pela
                experiência. É um processo bonito e nutritivo.
              </p>
              <p>Mais do que uma metodologia, é uma forma de estar no mundo. </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES - APRENDER COM A FLORESTA */}
      <section className="bg-mossy-green text-light-beige py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="!text-light-beige text-4xl md:text-5xl text-center mb-16">
            Aprender Com A Floresta
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4">
              <svg className="w-10 h-10 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
                <path d="M12 22c4.97 0 9-4.03 9-9c0-4.97-9-13-9-13S3 8.03 3 13c0 4.97 4.03 9 9 9z" />
              </svg>
              <h4 className="text-sm !text-light-beige uppercase tracking-wider">Conexão</h4>
              <p className="text-sm opacity-90">
                A criança descobre árvores, insetos, água e pedras, percebendo que faz parte deste
                lugar vivo.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4">
              <svg className="w-10 h-10 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
                <path d="M12 3v19M5 10l7-7 7 7" />
                <path d="M18 14a6 6 0 0 1-12 0" />
              </svg>
              <h4 className="text-sm !text-light-beige uppercase tracking-wider">
                Sentidos Despertos
              </h4>
              <p className="text-sm opacity-90">
                Texturas, cheiros e sons da floresta convidam a observar com atenção, curiosidade e
                presença.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-4">
              <svg className="w-10 h-10 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
                <path d="M2 22l10-10 10 10M12 2L2 22" />
              </svg>
              <h4 className="text-sm !text-light-beige uppercase tracking-wider">Brincar Livre</h4>
              <p className="text-sm opacity-90">
                Galhos, folhas e lama tornam-se brinquedos abertos para imaginar, experimentar e
                criar sem pressa.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col gap-4">
              <svg className="w-10 h-10 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <h4 className="text-sm !text-light-beige uppercase tracking-wider">
                Autonomia e Confiança
              </h4>
              <p className="text-sm opacity-90">
                Ao enfrentar pequenos desafios na natureza, a criança aprende a confiar em si e a
                tomar decisões.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÕES */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-8">Sessões</h2>
          <p className="text-sm leading-relaxed">
            As sessões Forest School da Crias na Floresta foram pensadas para que bebês, crianças e
            cuidadores possam construir, juntos, uma relação regular com a natureza.
          </p>
        </div>

        <SessoesGallery />
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-12 pb-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12">
          {/* Left Text */}
          <div className="space-y-6 pt-8 text-sm leading-relaxed">
            <h3 className="text-3xl md:text-4xl leading-tight">
              Pode começar assim,
              <br />
              transformar-se nisto...
            </h3>
            <p>
              Pode haver cozinhas de lama, escaladas em troncos, construção de cabanas, observação
              de insetos, recolha de folhas ou momentos de silêncio a ouvir o vento nas árvores.
              Pode haver história, canções ou apenas o som do riso.
            </p>
            <p>
              Não falamos de "atividades" fechadas; falamos de possibilidades infinitas. O olhar
              atento do adulto facilita, apoia e garante segurança, sem ocupar o protagonismo da
              experiência.
            </p>

            <div className="pt-4">
              <a
                href="/inscricoes"
                className="text-xs uppercase tracking-widest text-fog-gray border-b border-fog-gray pb-1 hover:opacity-70 transition"
              >
                Inscreve-te &rarr;
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-mossy-green text-light-beige p-12">
            <h3 className="!text-light-beige text-3xl mb-10">Como Funciona</h3>

            <div className="space-y-6 text-sm">
              <div>
                <strong className="block mb-2">Idade</strong>
                <ul className="space-y-1 opacity-90">
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                    Para crianças dos 6 meses aos 3 anos
                  </li>
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                    Sessões regulares de 2 horas, sempre com o acompanhamento de um cuidador
                  </li>
                </ul>
              </div>

              <div>
                <strong className="block mb-2">Horário</strong>
                <ul className="space-y-1 opacity-90">
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                    Quartas-feiras e domingos
                  </li>
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                    Das 10h00 às 12h00
                  </li>
                </ul>
              </div>

              <div>
                <strong className="block mb-2">Onde Estamos</strong>
                <ul className="opacity-90">
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                    Caxias
                  </li>
                </ul>
              </div>

              <div>
                <strong className="block mb-2">Preçário</strong>
                <ul className="space-y-1 opacity-90">
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                    Sessão avulso: 14€
                  </li>
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                    1x por semana: 50€ / mês
                  </li>
                  <li className="pl-3 relative before:content-['•'] before:absolute before:left-0">
                    2x por semana: 100€ / mês
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="pb-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl text-center mb-12">Um Dia Na Floresta</h2>
          <div className="relative w-full h-[600px] bg-smoke-gray">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Z4xGgmCEWxE?rel=0"
              title="Um Dia Na Floresta"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
