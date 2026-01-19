import { getPayload } from 'payload';
import config from '@payload-config';
import GalleryClient from './GalleryClient';
import { getImageUrl } from '@/lib/imageHelpers';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Galeria | Crias na Floresta - Momentos na Natureza',
  description:
    'Veja as memórias das nossas sessões Forest School. Crianças a explorar, brincar e aprender na floresta. Momentos de descoberta, alegria e conexão com a natureza.',
  keywords: [
    'galeria forest school',
    'fotos crianças natureza',
    'momentos na floresta',
    'atividades ao ar livre',
  ],
  openGraph: {
    title: 'Galeria | Crias na Floresta',
    description:
      'Veja as memórias das nossas sessões Forest School com crianças a explorar e brincar na floresta.',
    type: 'website',
    url: 'https://criasnaFloresta.pt/galeria',
    locale: 'pt_PT',
    siteName: 'Crias na Floresta',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galeria | Crias na Floresta',
    description:
      'Veja as memórias das nossas sessões Forest School com crianças a explorar e brincar na floresta.',
  },
  alternates: {
    canonical: 'https://criasnaFloresta.pt/galeria',
  },
};

export default async function Galeria() {
  const payload = await getPayload({ config });

  const galleryPage = (await payload.findGlobal({
    slug: 'gallery-page',
  })) as any;

  const images = (galleryPage?.images || []).map((item: any) => ({
    src: getImageUrl(item.image, ''),
    alt: item.alt || '',
  }));

  const pageContent = {
    title: galleryPage?.title || 'A Nossa Galeria',
    subtitle: galleryPage?.subtitle || 'Onde a curiosidade encontra a liberdade.',
    eyebrow: galleryPage?.eyebrow || 'Memórias da Natureza',
    heroImage: getImageUrl(galleryPage?.heroImage, '/photos/boy-curious.jpg'),
  };

  return <GalleryClient images={images} pageContent={pageContent} />;
}
