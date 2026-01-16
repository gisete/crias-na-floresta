import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crias Na Floresta | Galeria',
  description: 'Veja momentos especiais das nossas aventuras na floresta.',
};

export default function GaleriaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
