import AnimatedImageGrid from './AnimatedImageGrid';

export default function SessoesGallery() {
  const images = [
    { src: '/photos/floresta-sessoes-1.webp', alt: 'Group activity' },
    { src: '/photos/floresta-sessoes-2.webp', alt: 'Wide shot forest' },
    { src: '/photos/floresta-sessoes-3.webp', alt: 'Climbing' },
  ];

  return <AnimatedImageGrid images={images} layout="featured" className="max-w-5xl mx-auto" />;
}
