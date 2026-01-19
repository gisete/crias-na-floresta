import AnimatedImageGrid from './AnimatedImageGrid';

export default function AnimatedGallery() {
  const images = [
    { src: '/photos/child-looking.jpg', alt: 'Kids playing' },
    { src: '/photos/kids-playing.jpg', alt: 'Family in forest' },
    { src: '/photos/child-holding.jpg', alt: 'Climbing tree' },
  ];

  return (
    <section className="pb-24 overflow-hidden">
      <div className="transform -translate-y-20 w-full 2xl:max-w-[90%] mx-auto">
        <AnimatedImageGrid images={images} layout="offset" threshold={0.5} />
      </div>
    </section>
  );
}
