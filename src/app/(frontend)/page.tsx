import { getPayload } from 'payload';
import config from '@payload-config';
import HomeClient from './HomeClient';
import { getImageUrl } from '@/lib/imageHelpers';
import { richTextToHtml } from '@/lib/richTextToHtml';
import type { HomePageGlobal } from '@/types/payload';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Crias na Floresta | Forest School em Oeiras, Lisboa',
  description:
    'Forest School para crianças dos 6 meses aos 4 anos em Oeiras. Através de sessões regulares com profissionais certificados, crianças e famílias a reencontram o ritmo da natureza, despertando cuidado e encantamento por tudo o que vive à nossa volta.',
  openGraph: {
    title: 'Crias na Floresta | Forest School em Oeiras, Lisboa',
    description:
      'Forest School em Oeiras para crianças dos 6 meses aos 4 anos. Sessões regulares com profissionais certificados para reencontrar o ritmo da natureza, despertando cuidado e encantamento pela vida.',
    type: 'website',
    url: 'https://criasnaFloresta.pt',
    locale: 'pt_PT',
    siteName: 'Crias na Floresta',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crias na Floresta | Forest School em Oeiras, Lisboa',
    description:
      'Forest School em Oeiras para crianças dos 6 meses aos 4 anos. Sessões regulares com profissionais certificados para reencontrar o ritmo da natureza, despertando cuidado e encantamento pela vida.',
  },
  alternates: {
    canonical: 'https://criasnaFloresta.pt',
  },
};

export default async function Home() {
  const payload = await getPayload({ config });

  const homePage = (await payload.findGlobal({
    // @ts-expect-error - Payload global slug typing
    slug: 'home-page',
  })) as HomePageGlobal;

  // Default testimonials
  const defaultTestimonials = [
    {
      quote:
        'Há lugares, pessoas e experiências que marcam pela potência do que agregam na nossa vida. Enquanto vivemos em Portugal tivemos a sorte de conhecer e frequentar este espaço e os grandes seres humanos que o lideram. Foram quase 2 anos a ansiar pela manhã de domingo mais significativa que nos podia esperar! Sinto que ainda falta um longo caminho para que as pessoas percebam do que realmente se trata ser uma "Cria na Floresta". Há muito a se debater ainda sobre ESTAR na natureza, se reconhecendo como parte dela! Há muito trabalho a fazer neste mundo que parece estar ao contrário, mas lá estão a Marta e o Pedro, incansáveis em sonhos e ações que são o tipo de construção que o nosso futuro precisa ter hoje. Para sempre com vocês e sigam com esse necessário "trabalho de formiguinha"! Daqui da Alemanha eu e a "Mariazinha lava loiça" continuamos a vibrar a marca que deixaram ❤️',
      author: 'Bruna F.',
    },
    {
      quote:
        'A nossa cria é assídua há mais de dois anos neste maravilhoso projeto, e é incrível ver como a sua confiança cresce ao explorar cada corda ou tronco colocado estrategicamente, para que corra riscos controlados e consiga superar-se em todos os desafios a que se propõe. É nas sessões em que estou mais invisível que sinto a verdadeira força que a minha cria está a aprender a ter. Para nós, pais, é com muita gratidão e de coração cheio que vivemos estes momentos sagrados 🙏🏻 ❤️',
      author: 'Carolina N.',
    },
    {
      quote:
        'Crias na Floresta é um verdadeiro presente para as crianças. A ligação profunda com a natureza, a liberdade de explorar em segurança e o cuidado com que tudo é pensado fazem deste projeto um espaço único de crescimento, descoberta e alegria. A Marta e o Pedro transparecem dedicação, sensibilidade e respeito pelo ritmo de cada bebé, criando um ambiente onde a curiosidade floresce naturalmente. É inspirador ver crianças tão pequenas a crescerem livres, confiantes e felizes, em contacto direto com o mundo natural. Uma experiência verdadeiramente transformadora ✨♥️',
      author: 'Sílvia B.',
    },
    {
      quote:
        'Um projeto criado com o coração não pode decepcionar nunca, especialmente por dois seres com um coração gigante e completamente alinhado com o lado bom da vida. O ambiente no Crias é inigualável! Um sítio que nos ensina a ser gratos pelo que a natureza nos proporciona, a respeitá-la e a desfrutar do que de melhor ela nos dá. Passei momentos muito, muito felizes neste espaço 🤍',
      author: 'Bruna C.',
    },
    {
      quote:
        'Frequentamos o espaço faz mais de 1 ano e o projeto é feito com muito amor e cuidado. Frequentamos 2 vezes na semana com nosso filho de agora 2 anos. Todo o espaço é montado pensando nos pequenos e propicia desenvolvimento de habilidades motoras e sociais. No início havia o medo do pequeno ingerir algo ou se magoar, pois tinha só 7 meses quando foi a primeira vez, mas esse medo foi totalmente superado com apoio e paciência da Marta e do Pedro que sempre estiveram disponíveis para nos explicar, assegurar e guiar! Conseguimos ver no nosso pequeno como ele vai ganhando coragem para enfrentar os desafios da floresta (escalar, saltar etc.) e como se diverte em cada sessão, aprendendo a respeitar e agradecer a natureza, fauna e flora que partilham as sessões conosco. Não conseguimos imaginar a nossa rotina sem a querida Floresta 💚',
      author: 'Luciana B.',
    },
    {
      quote:
        'Um dos sítios onde mais amamos estar. Podemos explorar, sentir a natureza, aprender sobre ela e sobre nós próprios. A Marta e o Pedro estão actualizados no que toca a educação respeitadora - dos poucos sítios onde nunca fico tensa a pensar que alguém vai fazer um comentário despropositado porque confio a 100% na informação que eles têm e que partilham connosco. Incentivam as crianças a confiar nelas próprias e vibram com as suas conquistas. O meu filho adora a "floresta especial" como lhe chama e mesmo para nós adultos é um sítio de conexão com a vida real. Dos lugares mais mágicos do mundo. Recomendo ✨️',
      author: 'Maria C.',
    },
  ];

  // Default content
  const defaultContent = {
    heroVideoUrl: '/videos/homepage-hero.mp4',
    heroPlaceholder: '/photos/homepage-hero-placeholder.jpg',
    heroFallbackImage: '/photos/group-gathering.jpg',
    heroLogo: '/images/crias-na-floresta-logo.png',
    introTitle: 'A Crias',
    introContent: `<p>A Crias na Floresta inspira crianças e famílias a reencontrar o ritmo da natureza, despertando o cuidado, a curiosidade e o encantamento por tudo o que vive à nossa volta.</p><p>A floresta convida a alinhar a nossa energia com a frequência da Terra. <br />É nesse alinhamento que nasce a verdadeira conexão - a que não precisa de palavras, apenas de presença.</p>`,
    introLinkText: 'Conheça a nossa floresta →',
    introLinkUrl: '/a-floresta',
    quoteText:
      'O vínculo com a natureza não nasce de um momento único, mas da repetição suave de encontros que se tornam parte de nós. A relação com a floresta é como respirar: contínua, natural e inevitável quando se cultiva com presença.',
    quoteIcon: '/icons/branch-leaves.png',
    juntaTeTitle: 'Junta-Te A Nós Na Floresta',
    juntaTeContent: `<p>O exemplo, vivido e partilhado, é a ponte que alimenta esta ligação profunda. Assim, a natureza deixa de ser apenas um cenário. Torna-se extensão da infância, casa, espelho e companheira de crescimento.</p><p>Que possamos ser parte desta ligação, não só para as crianças, mas para todos nós.</p>`,
    juntaTeImage: '/photos/holding-basket.jpg',
    juntaTeLinkText: 'Inscreve-te →',
    juntaTeLinkUrl:
      'https://linktr.ee/criasnafloresta?utm_source=linktree_profile_share&ltsid=4f33675b-3a69-4f1f-a42e-a8866159c4ca',
    guardioesTitle: 'Guardiões da Floresta',
    guardioesContent: `<p>Este projeto nasceu de dois corações. Neles viviam a verdade, a alegria, a esperança, a força e o amor. <br />E quando esses corações se encontraram, o amor floresceu — em todas as pequenas e grandes coisas que iam fazendo, todos os dias.</p><p>Floresceu no cuidado pela Casa-Mãe-Terra, no acolhimento de cada Cria e família que se juntou a esta comunidade, e no cuidar mútuo desses dois corações, que continuam a ser o fogo que alimenta este sonho.</p>`,
    guardioesImage: '/photos/home-pedro-marta.webp',
    guardioesLinkText: 'Conheça →',
    guardioesLinkUrl: '/guardioes',
    testimonialTitle: 'A Nossa Comunidade',
    testimonialBackgroundImage: '/photos/home-bg-comunidade.webp',
  };

  const pageContent = {
    heroVideoUrl:
      homePage?.heroVideoUrl || getImageUrl(homePage?.heroVideo, defaultContent.heroVideoUrl),
    heroPlaceholder: getImageUrl(homePage?.heroPlaceholder, defaultContent.heroPlaceholder),
    heroFallbackImage: getImageUrl(homePage?.heroFallbackImage, defaultContent.heroFallbackImage),
    heroLogo: getImageUrl(homePage?.logo, defaultContent.heroLogo),
    introTitle: homePage?.introTitle || defaultContent.introTitle,
    introContent: richTextToHtml(homePage?.introContent) || defaultContent.introContent,
    introLinkText: homePage?.introLinkText || defaultContent.introLinkText,
    introLinkUrl: homePage?.introLinkUrl || defaultContent.introLinkUrl,
    quoteText: homePage?.quoteText || defaultContent.quoteText,
    quoteIcon: getImageUrl(homePage?.quoteIcon, defaultContent.quoteIcon),
    juntaTeTitle: homePage?.juntaTeTitle || defaultContent.juntaTeTitle,
    juntaTeContent: richTextToHtml(homePage?.juntaTeContent) || defaultContent.juntaTeContent,
    juntaTeImage: getImageUrl(homePage?.juntaTeImage, defaultContent.juntaTeImage),
    juntaTeLinkText: homePage?.juntaTeLinkText || defaultContent.juntaTeLinkText,
    juntaTeLinkUrl: homePage?.juntaTeLinkUrl || defaultContent.juntaTeLinkUrl,
    guardioesTitle: homePage?.guardioesTitle || defaultContent.guardioesTitle,
    guardioesContent: richTextToHtml(homePage?.guardioesContent) || defaultContent.guardioesContent,
    guardioesImage: getImageUrl(homePage?.guardioesImage, defaultContent.guardioesImage),
    guardioesLinkText: homePage?.guardioesLinkText || defaultContent.guardioesLinkText,
    guardioesLinkUrl: homePage?.guardioesLinkUrl || defaultContent.guardioesLinkUrl,
    testimonialTitle: homePage?.testimonialTitle || defaultContent.testimonialTitle,
    testimonialBackgroundImage: getImageUrl(
      homePage?.testimonialBackgroundImage,
      defaultContent.testimonialBackgroundImage
    ),
    testimonials:
      homePage?.testimonials && homePage.testimonials.length > 0
        ? homePage.testimonials
        : defaultTestimonials,
  };

  return <HomeClient pageContent={pageContent} />;
}
