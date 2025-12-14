import Hero from '@/components/shared/Hero';
import Image from 'next/image';
import SessoesGallery from '@/components/shared/SessoesGallery';
import Container from '@/components/shared/Container';
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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-center mb-20 text-fog-gray">Forest School</h1>

          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16 items-start">
            {/* Images Container */}
            <div className="flex gap-6 items-start">
              {/* Left Column: 2 Stacked Images */}
              <div className="flex flex-col gap-6 w-1/2">
                {/* Top Left - Landscape */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/photos/floresta-galeria-2.webp"
                    alt="Kids in forest"
                    fill
                    className="object-cover rounded-sm shadow-sm"
                    sizes="(max-width: 768px) 50vw, 27vw"
                  />
                </div>
                {/* Bottom Left - Portrait */}
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src="/photos/floresta-gallery-3.webp"
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
                    src="/photos/floresta-gallery-1.webp"
                    alt="Trees"
                    fill
                    className="object-cover rounded-sm shadow-sm"
                    sizes="(max-width: 768px) 50vw, 27vw"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="pt-10 space-y-6 text-base leading-relaxed font-light text-smoke-gray">
              <p>
                O Forest School encanta, entusiasma, traz magia. Convida à reflexão e provoca.
                Transforma.
              </p>

              <p>
                Trata-se de um programa de sessões regulares ao longo do ano, em todas as estações,
                independentemente das condições atmosféricas, permitindo às crianças e ao adulto
                desenvolver uma relação profunda e de reciprocidade com o mundo natural, humano e
                não humano compreendendo os seus ciclos, ritmos e transformações.
              </p>
              <p>
                No respeito, na liberdade e no brincar, o Forest School proporciona à criança uma
                aprendizagem viva e significativa para toda a vida — pelo corpo, pelo coração e pela
                experiência. É um processo bonito e nutritivo.
              </p>
              <p>Mais do que uma metodologia, é uma forma de estar no mundo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES - APRENDER COM A FLORESTA */}
      <section className="bg-mossy-green text-light-beige py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="!text-light-beige text-4xl md:text-5xl text-center mb-16">
            Sentir A Floresta
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4">
              <svg className="w-10 h-10 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
                <path d="M12 22c4.97 0 9-4.03 9-9c0-4.97-9-13-9-13S3 8.03 3 13c0 4.97 4.03 9 9 9z" />
              </svg>
              <h4 className="text-md !text-light-beige uppercase tracking-wider">Escuta</h4>
              <p className="text-sm opacity-90">
                Abrandar, respirar e olhar em volta. O que vês? O que ouves? O silêncio da floresta
                é tudo menos vazio. É um silêncio vivo, cheio de pequenos movimentos que lembram que
                a vida pulsa mesmo quando tudo parece quieto. Os sentidos despertam. E aí começa a
                atenção plena. E a sensação de que algo em ti encontra o seu lugar.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4">
              <svg className="w-10 h-10 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
                <path d="M12 3v19M5 10l7-7 7 7" />
                <path d="M18 14a6 6 0 0 1-12 0" />
              </svg>
              <h4 className="text-md !text-light-beige uppercase tracking-wider">Cuidar</h4>
              <p className="text-sm opacity-90">
                Viver em sintonia com a natureza é vital para nos sentirmos otimistas e saudáveis.
                Lembra-nos ainda de que precisamos de ser pacientes para crescermos fortes assim
                como as árvores que levam centenas de anos a amadurecer, crescendo um bocadinho a
                cada dia.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-4">
              <svg className="w-10 h-10 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
                <path d="M2 22l10-10 10 10M12 2L2 22" />
              </svg>
              <h4 className="text-md !text-light-beige uppercase tracking-wider">Enraizar</h4>
              <p className="text-sm opacity-90">
                Temos muito a aprender com as árvores. A sua existência recorda-nos de que a vida
                deve levar-se com calma e da importância de cuidarmos uns dos outros sem nos
                esquecermos de nós próprios. Não vivas a correr. Cuida de ti. Descansa. Cultiva
                amizades. Sê autêntico. Espalha as tuas raízes.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col gap-4">
              <svg className="w-10 h-10 stroke-white fill-none stroke-[1.5]" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <h4 className="text-md !text-light-beige uppercase tracking-wider">Autonomia</h4>
              <p className="text-sm opacity-90">
                Podemos estender as nossas próprias raízes e crescer explorando o mundo à nossa
                volta. Centrar-nos e rodear-nos de pessoas que nos amam. Ao vivenciar desafios na
                natureza, as Crias constroem uma base sólida de confiança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÕES */}
      <section className="py-24 px-6 bg-light-beige">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-8 text-fog-gray">Sessões</h2>
          <p className="text-base leading-relaxed text-smoke-gray">
            As sessões Forest School da Crias na Floresta foram pensadas para que bebês, crianças e
            cuidadores possam construir, juntos, uma relação regular com a natureza.
          </p>
        </div>

        <SessoesGallery />
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-light-beige px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
            {/* Left Column: Story Text (No Background) */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl pt-12 text-fog-gray font-cormorant leading-[1.1] mb-6">
                Uma sessão Forest School…
              </h3>

              <div className="space-y-4 text-base leading-relaxed text-smoke-gray font-light">
                <p>… não parte de atividades pré-definidas, mas sim de infinitas possibilidades.</p>
                <p>E essa abertura exige um trabalho profundo de reflexão.</p>
                <p>
                  Praticante, aprendiz, lugar e recursos: no fundo, as sessões de Forest School são
                  influenciadas pelas relações entre o adulto, o contexto e os materiais
                  disponíveis. Pretende-se que exista responsividade entre estas dinâmicas, de modo
                  que nunca seja possível determinar em plenitude o que pode acontecer e o rumo que
                  a sessão pode levar.
                </p>
                <p>
                  {' '}
                  As relações vão sendo construídas e desenvolvidas, permitindo que, por vezes, seja
                  a criança a liderar, e noutras seja o próprio meio envolvente. Trata-se de uma
                  combinação viva de todas estas forças e de como interagem entre si.
                </p>
                <p>
                  Ao longo das sessões, as Crias exploram livremente, guiadas pelos seus interesses,
                  num ambiente cuidadosamente preparado por um educador sensível e atento - o que
                  distingue verdadeiramente um contexto de Forest School.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://linktr.ee/criasnafloresta?utm_source=linktree_profile_share&ltsid=4f33675b-3a69-4f1f-a42e-a8866159c4ca"
                  target="_blank"
                  className="text-sm uppercase tracking-[0.2em] text-fog-gray border-b border-fog-gray pb-1 hover:opacity-60 transition"
                >
                  Inscreve-te &rarr;
                </a>
              </div>
            </div>

            {/* Right Column: Logistics + Pricing (With Green Background) */}
            <div className="bg-mossy-green text-light-beige p-8 md:p-12">
              <h3 className="!text-light-beige text-3xl md:text-4xl font-cormorant mb-10">
                Como Funciona
              </h3>

              <div className="space-y-8 text-sm font-light">
                <div>
                  <strong className="block mb-3 text-white font-bold text-sm">Idade</strong>
                  <ul className="space-y-2 opacity-90 list-disc pl-4 marker:text-white/40">
                    <li>Dos 6 meses aos 4 anos</li>
                    <li>
                      Sessões regulares de 2 horas, sempre com o acompanhamento de apenas um
                      cuidador
                    </li>
                  </ul>
                </div>

                <div>
                  <strong className="block mb-3 text-white font-bold text-sm">Horário</strong>
                  <ul className="space-y-2 opacity-90 list-disc pl-4 marker:text-white/40">
                    <li>Segunda-feira, Quarta-feira, Sábado e Domingo - 10:00h às 12:00h</li>
                    <li>
                      Quarta-feira, Sábado e Domingo - 14:30h às 16:30h (horário de inverno) / 15h00
                      às 17h00 (horário de verão)
                    </li>
                  </ul>
                </div>

                <div>
                  <strong className="block mb-3 text-white font-bold text-sm">Onde Estamos</strong>
                  <ul className="space-y-2 opacity-90 list-disc pl-4 marker:text-white/40">
                    <li>Caxias, Oeiras, Lisboa</li>
                  </ul>
                </div>

                <div>
                  <strong className="block mb-3 text-white font-bold text-sm">
                    Preçário (por criança):
                  </strong>
                  <ul className="space-y-2 opacity-90 list-disc pl-4 marker:text-white/40">
                    <li>Sessão avulso - 14€</li>
                    <li>Sessão avulso + 3 registos fotográficos - 20€</li>
                  </ul>
                </div>
                <div>
                  <strong className="block mb-3 text-white font-bold text-sm">
                    Packs mensais:
                  </strong>
                  <ul className="space-y-2 opacity-90 list-disc pl-4 marker:text-white/40">
                    <li>Pack mensal 4 sessões - 50€</li>
                    <li>Pack mensal 8 sessões - 100€</li>
                    <li>Pack mensal 12 sessões - 150€</li>
                    <li>Pack mensal 16 sessões - 200€</li>
                  </ul>
                </div>

                <div>
                  <strong className="block mb-3 text-white font-bold text-sm">
                    Packs com registos fotográficos:
                  </strong>
                  <ul className="space-y-2 opacity-90 list-disc pl-4 marker:text-white/40">
                    <li>Pack mensal 4 sessões + 8 registos fotográficos - 66€</li>
                    <li>Pack mensal 8 sessões + 16 registos fotográficos - 132€</li>
                    <li>Pack mensal 12 sessões + 24 registos fotográficos - 198€</li>
                    <li>Pack mensal 16 sessões + 32 registos fotográficos - 264€</li>
                  </ul>
                </div>

                {/* Disclaimer */}
                <div className="pt-4 text-xs italic opacity-60 leading-relaxed space-y-1">
                  <p>
                    * Na aquisição do pack mensal é possível escolher dias diferentes para
                    participar, dentro do mês em questão.
                  </p>
                  <p>
                    * Os registos fotográficos devem ser adquiridos correspondentes às sessões
                    Forest School adquiridas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="pb-28 px-6 bg-light-beige">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl text-center mb-12 text-fog-gray">
            Um Dia Na Floresta
          </h2>
          <div className="relative w-full h-[600px] bg-smoke-gray shadow-2xl">
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
