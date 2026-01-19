import { getPayload } from 'payload';
import config from '@payload-config';
import GalleryClient from './GalleryClient';
import { getImageUrl } from '@/lib/imageHelpers';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Galeria de Fotos | Momentos na Floresta',
  description: 'Veja momentos especiais das sessões Forest School: crianças a explorar, brincar e aprender na natureza em Oeiras, Lisboa.',
  openGraph: {
    title: 'Galeria | Crias na Floresta',
    description: 'Momentos especiais das aventuras na floresta',
    type: 'website',
    url: 'https://criasnaFloresta.pt/galeria',
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galeria | Crias na Floresta',
    description: 'Momentos especiais das aventuras na floresta',
  },
  alternates: {
    canonical: 'https://criasnaFloresta.pt/galeria',
  },
};

export default async function Galeria() {
  const payload = await getPayload({ config });

  const galleryPage = (await payload.findGlobal({
    // @ts-expect-error - Payload global slug typing
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
