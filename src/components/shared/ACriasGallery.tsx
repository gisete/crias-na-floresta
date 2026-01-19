import AnimatedImageGrid from './AnimatedImageGrid';

export default function ACriasGallery() {
  const images = [
    { src: '/photos/home-gallery-1.webp', alt: 'Child exploring' },
    { src: '/photos/home-gallery-2.webp', alt: 'Children playing in nature' },
    { src: '/photos/hero-3.webp', alt: 'Child in forest' },
  ];

  return <AnimatedImageGrid images={images} layout="featured" className="max-w-6xl mx-auto mt-16" />;
}
