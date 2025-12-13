import Hero from '@/components/shared/Hero';
import AnimatedGallery from '@/components/shared/AnimatedGallery';
import ACriasGallery from '@/components/shared/ACriasGallery';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <Hero
        type="video"
        videoSrc="/videos/homepage-hero.mp4"
        placeholderSrc="/photos/homepage-hero-placeholder.jpg"
        imageSrc="/photos/group-gathering.jpg"
        alt="Forest Background"
        variant="homepage"
        logoSrc="/images/crias-na-floresta-logo.png"
        objectPosition="center center"
      />

      {/* INTRO SECTION */}
      <section className="py-24 pb-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl mb-12">A Crias</h2>

          <div className="space-y-8 text-base leading-relaxed font-light">
            <p>
              A Crias na Floresta inspira crianças e famílias a reencontrar o ritmo da natureza,
              despertando o cuidado, a curiosidade e o encantamento por tudo o que vive à nossa
              volta.
            </p>
            <p>
              A floresta convida a alinhar a nossa energia com a frequência da Terra. É nesse
              alinhamento que nasce a verdadeira conexão - a que não precisa de palavras, apenas de
              presença.
            </p>
          </div>

          <div className="mt-16">
            <a
              href="/a-floresta"
              className="text-sm uppercase tracking-widest text-fog-gray border-b border-fog-gray pb-1 hover:opacity-70 transition duration-300"
            >
              Conheça a nossa floresta &rarr;
            </a>
          </div>
        </div>

        {/* Image Gallery */}
        <ACriasGallery />
      </section>

      {/* QUOTE SECTION */}
      <section className="pt-8 pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 flex justify-center opacity-50">
            <Image
              src="/icons/branch-leaves.png"
              alt="Branches and leaves decoration"
              width={68}
              height={68}
              className="w-18 h-18 object-contain rotate-[50deg]"
            />
          </div>
          <blockquote className="font-cormorant text-fog-gray text-xl md:text-2xl italic mb-6 leading-snug">
            O vínculo com a natureza não nasce de um momento único, mas da repetição suave de
            encontros que se tornam parte de nós. A relação com a floresta é como respirar:
            contínua, natural e inevitável quando se cultiva com presença.
          </blockquote>
        </div>
      </section>

      {/* "JUNTA-TE A NÓS" */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Big Background Image */}
        <Image
          src="/photos/holding-basket.jpg"
          alt="Forest Adventure"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
        />

        {/* Centered Container Box */}
        <div className="relative z-10 bg-mossy-green text-light-beige p-10 md:p-16 max-w-[600px] mx-4 shadow-2xl">
          <h2 className="!text-light-beige text-4xl md:text-5xl mb-8 text-left">
            Junta-Te A Nós Na Floresta
          </h2>

          <div className="space-y-6 text-base font-light leading-relaxed text-left">
            <p>
              O exemplo, vivido e partilhado, é a ponte que alimenta esta ligação profunda. Assim, a
              natureza deixa de ser apenas um cenário. Torna-se extensão da infância, casa, espelho
              e companheira de crescimento.
            </p>
            <p>
              Que possamos ser parte desta ligação, não só para as crianças, mas para todos nós.
            </p>
          </div>

          <div className="mt-10 text-left">
            <a
              href="https://linktr.ee/criasnafloresta?utm_source=linktree_profile_share&ltsid=4f33675b-3a69-4f1f-a42e-a8866159c4ca"
              className="text-sm uppercase tracking-widest border-b border-light-beige border-opacity-50 pb-1 hover:text-white hover:border-white transition"
              target="_blank"
            >
              Inscreve-te &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* "POR TRÁS" */}
      <section className="py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1 relative h-[600px]">
            <Image
              src="/photos/home-pedro-marta.webp"
              alt="Team Member"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text Column */}
          <div className="order-1 md:order-2 md:pl-12">
            <h2 className="text-5xl md:text-6xl mb-10">Guardiões da Floresta</h2>

            <div className="space-y-6 text-base leading-relaxed font-light">
              <p>
                Este projeto nasceu de dois corações. Neles viviam a verdade, a alegria, a
                esperança, a força e o amor. E quando esses corações se encontraram, o amor
                floresceu — em todas as pequenas e grandes coisas que iam fazendo, todos os dias.
              </p>
              <p>
                Floresceu no cuidado pela Casa-Mãe-Terra, no acolhimento de cada Cria e família que
                se juntou a esta comunidade, e no cuidar mútuo desses dois corações, que continuam a
                ser o fogo que alimenta este sonho.
              </p>
            </div>

            <div className="mt-12">
              <a
                href="/guardioes"
                className="text-sm uppercase tracking-widest text-fog-gray border-b border-fog-gray pb-1 hover:opacity-70 transition"
              >
                Conheça &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="relative py-24 md:py-32 min-h-[700px] flex items-center overflow-hidden mb-20">
        {/* Background Image */}
        <div className="absolute inset-0 md:left-[30%]">
          <Image
            src="/photos/home-bg-comunidade.jpg"
            alt="Kids hands in dirt"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 70vw"
          />
        </div>

        {/* Content Box */}
        <div className="relative z-10 w-full max-w-[700px] mx-4 md:ml-40 bg-mossy-green text-light-beige p-8 md:p-12 md:px-4 md:py-16 shadow-2xl">
          <h3 className="!text-light-beige text-3xl md:text-4xl mb-8 text-center">
            A Nossa Comunidade
          </h3>

          <div className="flex items-center gap-10 relative z-20">
            {/* Left Arrow */}
            <button
              className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 p-2.5"
              aria-label="Previous testimonial"
            >
              <svg
                width="45"
                height="14"
                viewBox="0 0 40 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM40 5.25L1 5.25V6.75L40 6.75V5.25Z"
                  fill="#F2F0E6"
                />
              </svg>
            </button>

            {/* Quote Text */}
            <p className="text-base leading-[1.9] font-light opacity-90 max-w-[620px]">
              "Recomendo por completo a experiência com as Crias na Floresta. Um espaço muito
              cuidado, com muitas atividades em que a liberdade das crianças para explorar tudo o
              que as rodeia é a prioridade. As pessoas são muito simpáticas e atenciosas com as
              crianças. Depois de duas horas repletas de brincadeira, termina da melhor forma com as
              crianças a cantarem e a ouvirem uma história despertando todos os sentidos delas para
              o que acabaram de vivenciar. Sem dúvida será para repetir!"
            </p>

            {/* Right Arrow */}
            <button
              className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 p-2.5"
              aria-label="Next testimonial"
            >
              <svg
                width="45"
                height="14"
                viewBox="0 0 40 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z"
                  fill="#F2F0E6"
                />
              </svg>
            </button>
          </div>

          {/* Leaf Decoration
          <div className="absolute bottom-5 left-5 w-[100px] h-[120px] opacity-50 pointer-events-none z-10">
            <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 110 Q 40 60, 90 10" stroke="#F2F0E6" strokeWidth="0.8" />
              <path d="M25 90 Q 10 80, 15 70" stroke="#F2F0E6" strokeWidth="0.8" />
              <path d="M35 80 Q 50 70, 45 60" stroke="#F2F0E6" strokeWidth="0.8" />
              <path d="M40 65 Q 25 55, 30 45" stroke="#F2F0E6" strokeWidth="0.8" />
              <path d="M50 55 Q 65 45, 60 35" stroke="#F2F0E6" strokeWidth="0.8" />
              <path d="M55 40 Q 40 30, 45 20" stroke="#F2F0E6" strokeWidth="0.8" />
              <path d="M65 30 Q 80 20, 75 10" stroke="#F2F0E6" strokeWidth="0.8" />
            </svg>
          </div> */}
        </div>
      </section>
    </div>
  );
}
