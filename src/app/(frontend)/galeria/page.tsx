import { getPayload } from 'payload';
import config from '@payload-config';
import GalleryClient from './GalleryClient';

export default async function Galeria() {
  const payload = await getPayload({ config });

  // Fetch gallery page settings and images
  const galleryPage = await payload.findGlobal({
    slug: 'gallery-page' as any,
  });

  // Transform the images data
  const images = ((galleryPage as any)?.images || []).map((item: any) => ({
    src: typeof item.image === 'object' ? item.image.url : '',
    alt: item.alt || '',
  }));

  // Prepare page content
  const pageContent = {
    title: (galleryPage as any)?.title || 'A Nossa Galeria',
    subtitle: (galleryPage as any)?.subtitle || 'Onde a curiosidade encontra a liberdade.',
    eyebrow: (galleryPage as any)?.eyebrow || 'Memórias da Natureza',
    heroImage: typeof (galleryPage as any)?.heroImage === 'object' && (galleryPage as any)?.heroImage?.url
      ? (galleryPage as any).heroImage.url
      : '/photos/boy-curious.jpg',
  };

  return <GalleryClient images={images} pageContent={pageContent} />;
}
