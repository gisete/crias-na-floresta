import Hero from '@/components/shared/Hero';
import Container from '@/components/shared/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inscrições | Como Participar - Crias na Floresta',
  description:
    'Inscreva o seu filho no Crias na Floresta. Informações sobre horários, idades (6 meses a 4 anos), preços e como participar nas sessões Forest School em Caxias, Oeiras. Contacte-nos para mais informações.',
  keywords: [
    'inscrições forest school',
    'como participar',
    'preços forest school Portugal',
    'horários sessões',
    'contacto Crias na Floresta',
  ],
  openGraph: {
    title: 'Inscrições | Crias na Floresta',
    description:
      'Inscreva o seu filho nas sessões Forest School. Informações sobre horários, idades e preços.',
    type: 'website',
    url: 'https://criasnaFloresta.pt/inscricoes',
    locale: 'pt_PT',
    siteName: 'Crias na Floresta',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inscrições | Crias na Floresta',
    description:
      'Inscreva o seu filho nas sessões Forest School. Informações sobre horários, idades e preços.',
  },
  alternates: {
    canonical: 'https://criasnaFloresta.pt/inscricoes',
  },
};

export default function Inscricoes() {
  return (
    <div>
      <Hero
        type="image"
        imageSrc="https://images.unsplash.com/photo-1534143046005-350a596df703?q=80&w=2560&auto=format&fit=crop"
        alt="Inscrições"
        variant="page"
        title="Inscrições"
      />

      <div className="pb-24 px-6 bg-[var(--color-beige)]">
        <Container className="py-16">
          <div className="max-w-4xl mx-auto">

          <div className="space-y-8 text-sm md:text-base leading-relaxed font-light">
            <div>
              <h2 className="text-3xl md:text-4xl font-[var(--font-cormorant)] text-[var(--color-fog)] mb-6 text-center">
                Como Participar
              </h2>
              <p className="text-[var(--color-dark-grey)] mb-12 text-center leading-relaxed">
                Estamos à espera da vossa família! Aqui encontrará toda a informação necessária
                para inscrever o seu filho na Crias na Floresta.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[var(--color-beige-dark)] p-6">
                <h3 className="font-[var(--font-cormorant)] text-2xl font-bold mb-4 text-[var(--color-fog)]">Idades</h3>
                <p className="text-[var(--color-dark-grey)]">
                  Aceitamos crianças dos 3 aos 6 anos, em grupos pequenos para garantir
                  atenção individualizada.
                </p>
              </div>

              <div className="bg-[var(--color-beige-dark)] p-6">
                <h3 className="font-[var(--font-cormorant)] text-2xl font-bold mb-4 text-[var(--color-fog)]">Horários</h3>
                <p className="text-[var(--color-dark-grey)]">
                  Sessões de manhã (9h-13h) ou dia completo (9h-16h), de segunda a sexta-feira.
                </p>
              </div>

              <div className="bg-[var(--color-beige-dark)] p-6">
                <h3 className="font-[var(--font-cormorant)] text-2xl font-bold mb-4 text-[var(--color-fog)]">Localização</h3>
                <p className="text-[var(--color-dark-grey)]">
                  Situada numa floresta preservada em [Localização], Portugal.
                </p>
              </div>

              <div className="bg-[var(--color-beige-dark)] p-6">
                <h3 className="font-[var(--font-cormorant)] text-2xl font-bold mb-4 text-[var(--color-fog)]">Valores</h3>
                <p className="text-[var(--color-dark-grey)]">
                  Contacte-nos para informações sobre mensalidades e opções de pagamento.
                </p>
              </div>
            </div>

            <div className="bg-[var(--color-moss)] text-[var(--color-beige)] p-8 mb-8">
              <h3 className="font-[var(--font-cormorant)] text-2xl font-bold mb-4 text-white">Interessado?</h3>
              <p className="text-[var(--color-beige)]/90 mb-4">
                Para mais informações ou para agendar uma visita, entre em contacto connosco:
              </p>
              <ul className="space-y-2 text-[var(--color-beige)]/90">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:criasnafloresta@gmail.com" className="text-white hover:underline">
                    criasnafloresta@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Telefone:</strong>{' '}
                  <a href="tel:+351000000000" className="text-white hover:underline">
                    +351 000 000 000
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-[var(--color-fog)] italic">
                Formulário de inscrição online será disponibilizado em breve.
              </p>
            </div>
          </div>
        </div>
      </Container>
      </div>
    </div>
  );
}
