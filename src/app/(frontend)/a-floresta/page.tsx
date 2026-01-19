import { getPayload } from 'payload';
import config from '@payload-config';
import AFlorestaClient from './AFlorestaClient';
import type { Metadata } from 'next';
import { getImageUrl } from '@/lib/imageHelpers';
import { richTextToHtml } from '@/lib/richTextToHtml';
import type { FlorestaPageGlobal } from '@/types/payload';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'A Floresta | Crias na Floresta - Forest School em Portugal',
  description:
    'Descubra o nosso espaço na floresta em Caxias, Oeiras. Sessões Forest School regulares para crianças dos 6 meses aos 4 anos. Aprendizagem na natureza, brincar livre e conexão profunda com o ambiente natural. Consulte horários, preços e como participar.',
  keywords: [
    'forest school Portugal',
    'sessões na floresta',
    'preços forest school',
    'Caxias',
    'Oeiras',
    'Lisboa',
    'educação na natureza Portugal',
    'atividades crianças natureza',
  ],
  openGraph: {
    title: 'A Floresta | Crias na Floresta',
    description:
      'Sessões Forest School regulares para crianças dos 6 meses aos 4 anos em Caxias, Oeiras.',
    type: 'website',
    url: 'https://criasnaFloresta.pt/a-floresta',
    locale: 'pt_PT',
    siteName: 'Crias na Floresta',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Floresta | Crias na Floresta',
    description:
      'Sessões Forest School regulares para crianças dos 6 meses aos 4 anos em Caxias, Oeiras.',
  },
  alternates: {
    canonical: 'https://criasnaFloresta.pt/a-floresta',
  },
};

export default async function AFloresta() {
  const payload = await getPayload({ config });

  const florestaPage = (await payload.findGlobal({
    slug: 'a-floresta-page',
  })) as FlorestaPageGlobal;

  const defaultContent = {
    heroImage: '/photos/hero-a-floresta2.webp',
    heroTitle: 'A Floresta',
    forestSchoolTitle: 'Forest School',
    forestSchoolImages: [
      { src: '/photos/floresta-galeria-2.webp', alt: 'Kids in forest' },
      { src: '/photos/floresta-gallery-3.webp', alt: 'Playing in mud' },
      { src: '/photos/floresta-gallery-1.webp', alt: 'Trees' },
    ],
    forestSchoolContent: `<p>O Forest School encanta, entusiasma, convida à reflexão e transforma.</p><p>É uma abordagem que assenta em princípios e pilares baseados na conexão direta, contínua e profunda com a natureza, olhando para o ser humano como um todo.</p><p>Ter a marcha adquirida não é, de todo, um requisito para levar o bebé para a natureza. O bebé deve ter liberdade de movimento e, por isso, é essencial dar-lhe espaço para permanecer na postura que consegue sustentar e permitir que guie a sua exploração.</p><p>A primeira infância é o terreno fértil onde se plantam as sementes e se criam os alicerces para uma vida harmoniosa. O cérebro nesta fase, desenvolve-se de uma forma que não se repetirá e por isso é imperativo criar as oportunidades certas nos momentos certos, para cada criança!</p><p>No respeito, na liberdade e no brincar, o Forest School proporciona à criança uma aprendizagem viva e significativa para toda a vida - pelo corpo, pelo coração e pela experiência.</p><p>É um processo bonito, profundo e verdadeiramente nutritivo. Mais do que uma metodologia, é uma forma de estar no mundo.</p>`,
    sentirTitle: 'Forest School vs Outras Propostas',
    features: [
      {
        icon: '/icons/feature1.webp',
        title: 'Programa e Espaço',
        items: [
          'Programa regular e contínuo, ao longo de todo o ano, independente das condições atmosféricas',
          'Realiza-se num espaço arborizado natural em contexto de mata/floresta',
          'Ambiente pensado e preparado detalhadamente',
          'Carácter ambiental e sustentável',
        ],
      },
      {
        icon: '/icons/feature4.webp',
        title: 'Abordagem Pedagógica',
        items: [
          'Implementado por profissionais Forest School qualificados que atualizam e desenvolvem continuamente a sua prática',
          'É sobre conexões, processos e aprendizagem autónoma, construtivista e comunitária',
          'Desenvolve todo o potencial humano na sua dimensão planetária, adotando uma feição claramente pedagógica',
          'Criação de oportunidades para que as crianças possam assumir riscos com suporte, apropriados às suas competências e capacidades',
        ],
      },
      {
        icon: '/icons/feature3.webp',
        title: 'Conexão com a Natureza',
        items: [
          'Equilíbrio com o que nos rodeia integrando a natureza como parte de nós',
          'Relação entre a sensibilidade inata do ser humano ao mundo natural e a emergência de sentimentos morais para uma cidadania ativa e ambientalmente responsável',
          'Recursos naturais como promotores de brincadeiras livres',
        ],
      },
    ],
    sessoesTitle: 'Sessões',
    sessoesIntro:
      'As sessões Forest School da Crias na Floresta foram pensadas para que Crias e cuidadores possam construir juntos uma relação regular com a natureza.',
    comoFuncionaStoryTitle: 'Uma sessão Forest School…',
    comoFuncionaStoryContent: `<p>… não parte de atividades fixas, mas de infinitas possibilidades.</p><p>Cria, adulto, espaço e recursos: interagem de forma dinâmica e contínua. Procura-se uma relação de responsividade entre estes elementos, sem determinar totalmente o que vai acontecer criando espaço para a espontaneidade e para o inesperado. O ponto de partida é sempre a curiosidade e o interesse das crianças. O adulto não conduz todo o processo, mas isso não significa estar ausente. Pelo contrário, está presente, atento e disponível. Observa, escuta, acompanha e garante segurança, ligado ao momento, ao lugar e ao que de precioso está a acontecer, sem distrações nem distanciamentos.</p><p>E o mais importante é lembrar que a premissa para estar na natureza é o respeito e o cuidado pelo espaço e por todos os seres que o habitam. Cuidar da terra, da fauna e de tudo o que vive naquele lugar faz parte da vivência e da aprendizagem.</p>`,
    comoFuncionaTitle: 'Como Funciona',
    ageInfo: `<ul class="space-y-2 list-disc pl-4 marker:text-white/40"><li>Dos 6 meses aos 4 anos</li><li>Sessões regulares de 2 horas, sempre com o acompanhamento de apenas um cuidador</li></ul>`,
    scheduleInfo: `<ul class="space-y-2 list-disc pl-4 marker:text-white/40"><li>Segunda-feira, Quarta-feira, Sábado e Domingo - 10:00h às 12:00h</li><li>Quarta-feira, Sábado e Domingo - 14:30h às 16:30h/15h00 às 17h00<br /><span class="text-xs">(o horário pode sofrer alterações devido à mudança de solstício/ hora do pôr do sol)</span></li></ul>`,
    locationInfo: `<ul class="space-y-2 list-disc pl-4 marker:text-white/40"><li>Caxias, Oeiras, Lisboa</li></ul>`,
    pricingInfo: `<ul class="space-y-2 list-disc pl-4 marker:text-white/40"><li>Sessão avulso - 14€</li><li>Sessão avulso + 3 registos fotográficos - 20€</li></ul>`,
    monthlyPacksInfo: `<ul class="space-y-2 list-disc pl-4 marker:text-white/40"><li>Pack mensal 4 sessões - 50€</li><li>Pack mensal 8 sessões - 100€</li><li>Pack mensal 12 sessões - 150€</li><li>Pack mensal 16 sessões - 200€</li></ul>`,
    photoPacksInfo: `<ul class="space-y-2 list-disc pl-4 marker:text-white/40"><li>Pack mensal 4 sessões + 8 registos fotográficos - 66€</li><li>Pack mensal 8 sessões + 16 registos fotográficos - 132€</li><li>Pack mensal 12 sessões + 24 registos fotográficos - 198€</li><li>Pack mensal 16 sessões + 32 registos fotográficos - 264€</li></ul>`,
    disclaimer: `<p>* Na aquisição do pack mensal é possível escolher dias diferentes para participar, dentro do mês em questão.</p><p>* Os registos fotográficos devem ser adquiridos correspondentes às sessões Forest School adquiridas.</p>`,
    inscricaoLink:
      'https://linktr.ee/criasnafloresta?utm_source=linktree_profile_share&ltsid=4f33675b-3a69-4f1f-a42e-a8866159c4ca',
    videoTitle: 'Um Dia Na Floresta',
    videoUrl: 'https://www.youtube.com/embed/Z4xGgmCEWxE?rel=0',
  };

  const pageContent = {
    heroImage: getImageUrl(florestaPage?.heroImage, defaultContent.heroImage),
    heroTitle: florestaPage?.heroTitle || defaultContent.heroTitle,
    forestSchoolTitle: florestaPage?.forestSchoolTitle || defaultContent.forestSchoolTitle,
    forestSchoolImages:
      florestaPage?.forestSchoolImages && florestaPage.forestSchoolImages.length > 0
        ? florestaPage.forestSchoolImages.map((img) => ({
            src: getImageUrl(img.image, ''),
            alt: img.alt || '',
          }))
        : defaultContent.forestSchoolImages,
    forestSchoolContent:
      richTextToHtml(florestaPage?.forestSchoolContent) || defaultContent.forestSchoolContent,
    sentirTitle: florestaPage?.sentirTitle || defaultContent.sentirTitle,
    features:
      florestaPage?.features && florestaPage.features.length > 0
        ? florestaPage.features.map((feature) => ({
            icon: getImageUrl(feature.icon, ''),
            title: feature.title || '',
            items: feature.items || [],
          }))
        : defaultContent.features,
    sessoesTitle: florestaPage?.sessoesTitle || defaultContent.sessoesTitle,
    sessoesIntro: florestaPage?.sessoesIntro || defaultContent.sessoesIntro,
    comoFuncionaStoryTitle:
      florestaPage?.comoFuncionaStoryTitle || defaultContent.comoFuncionaStoryTitle,
    comoFuncionaStoryContent:
      richTextToHtml(florestaPage?.comoFuncionaStoryContent) ||
      defaultContent.comoFuncionaStoryContent,
    comoFuncionaTitle: florestaPage?.comoFuncionaTitle || defaultContent.comoFuncionaTitle,
    ageInfo: richTextToHtml(florestaPage?.ageInfo) || defaultContent.ageInfo,
    scheduleInfo: richTextToHtml(florestaPage?.scheduleInfo) || defaultContent.scheduleInfo,
    locationInfo: richTextToHtml(florestaPage?.locationInfo) || defaultContent.locationInfo,
    pricingInfo: richTextToHtml(florestaPage?.pricingInfo) || defaultContent.pricingInfo,
    monthlyPacksInfo:
      richTextToHtml(florestaPage?.monthlyPacksInfo) || defaultContent.monthlyPacksInfo,
    photoPacksInfo: richTextToHtml(florestaPage?.photoPacksInfo) || defaultContent.photoPacksInfo,
    disclaimer: richTextToHtml(florestaPage?.disclaimer) || defaultContent.disclaimer,
    inscricaoLink: florestaPage?.inscricaoLink || defaultContent.inscricaoLink,
    videoTitle: florestaPage?.videoTitle || defaultContent.videoTitle,
    videoUrl: florestaPage?.videoUrl || defaultContent.videoUrl,
  };

  return <AFlorestaClient pageContent={pageContent} />;
}
