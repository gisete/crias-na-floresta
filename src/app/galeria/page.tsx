import Hero from '@/components/shared/Hero';
import Container from '@/components/shared/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeria - Crias na Floresta',
  description: 'Veja momentos especiais das nossas aventuras na floresta.',
};

export default function Galeria() {
  return (
    <div>
      <Hero
        type="image"
        imageSrc="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2560&auto=format&fit=crop"
        alt="Galeria"
        variant="page"
        title="Galeria"
      />

      <div className="pb-24 px-6 bg-[var(--color-beige)]">
        <Container className="py-16">
          <div className="max-w-6xl mx-auto">

          <div className="text-center text-[var(--color-dark-grey)]">
            <p className="text-lg mb-8 leading-relaxed font-light">
              Aqui iremos partilhar fotografias e vídeos dos nossos dias na floresta,
              mostrando a alegria, descobertas e aprendizagens das crianças em contacto
              com a natureza.
            </p>
            <p className="text-[var(--color-fog)] italic">
              Galeria de imagens será adicionada em breve.
            </p>
          </div>

          {/* Placeholder grid for future images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-[var(--color-beige-dark)] flex items-center justify-center"
              >
                <span className="text-[var(--color-fog)] text-sm">Imagem {item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
      </div>
    </div>
  );
}
