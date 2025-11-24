import Hero from '@/components/shared/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quem Somos - Crias na Floresta',
  description: 'Conheça a nossa equipa e a nossa missão de conectar crianças com a natureza.',
};

export default function QuemSomos() {
  return (
    <div>
      <Hero
        type="image"
        imageSrc="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2560&auto=format&fit=crop"
        alt="Quem Somos"
        variant="page"
        title="Quem Somos"
      />

      <div className="pb-24 px-6 bg-[var(--color-beige)]">
        <div className="max-w-4xl mx-auto">

        <div className="space-y-8 text-sm md:text-base leading-relaxed font-light">
          <div>
            <h2 className="text-3xl md:text-4xl font-[var(--font-cormorant)] text-[var(--color-fog)] mb-6">
              A Nossa Missão
            </h2>
            <p className="text-[var(--color-dark-grey)] leading-relaxed">
              Na Crias na Floresta, acreditamos que a natureza é o melhor professor.
              A nossa missão é proporcionar às crianças experiências significativas ao ar livre,
              promovendo o seu desenvolvimento integral através da exploração, descoberta e conexão
              com o mundo natural.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl md:text-4xl font-[var(--font-cormorant)] text-[var(--color-fog)] mb-6">
              A Nossa Equipa
            </h2>
            <p className="text-[var(--color-dark-grey)] leading-relaxed">
              Somos um grupo de educadores apaixonados pela natureza e pelo desenvolvimento infantil.
              Com formação em educação ao ar livre, primeiros socorros e conhecimento profundo do
              ecossistema local, acompanhamos cada criança na sua jornada de descoberta.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
