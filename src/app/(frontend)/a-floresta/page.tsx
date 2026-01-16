import { getPayload } from 'payload';
import config from '@payload-config';
import AFlorestaClient from './AFlorestaClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crias Na Floresta | A Floresta',
  description:
    'Descubra o nosso espaço na floresta, onde as crianças aprendem e exploram através do Forest School.',
};

// Helper function to safely extract image URL
const getImageUrl = (image: any, fallback: string): string => {
  if (typeof image === 'object' && image?.url) {
    return image.url;
  }
  return fallback;
};

// Helper to convert rich text to HTML
const richTextToHtml = (richText: any): string => {
  if (!richText) return '';
  if (typeof richText === 'string') return richText;

  // Handle Lexical editor format
  if (richText.root && richText.root.children) {
    let html = '';

    const processNode = (node: any): string => {
      if (node.type === 'paragraph') {
        const content = node.children?.map((child: any) => processNode(child)).join('') || '';
        return `<p>${content}</p>`;
      }

      if (node.type === 'list') {
        const tag = node.listType === 'bullet' ? 'ul' : 'ol';
        const content = node.children?.map((child: any) => processNode(child)).join('') || '';
        return `<${tag} class="space-y-2 list-disc pl-4 marker:text-white/40">${content}</${tag}>`;
      }

      if (node.type === 'listitem') {
        const content = node.children?.map((child: any) => processNode(child)).join('') || '';
        return `<li>${content}</li>`;
      }

      if (node.type === 'text') {
        let text = node.text || '';
        if (node.format & 1) text = `<strong>${text}</strong>`; // bold
        if (node.format & 2) text = `<em>${text}</em>`; // italic
        return text;
      }

      if (node.type === 'linebreak') {
        return '<br />';
      }

      // Handle other node types with children
      if (node.children) {
        return node.children.map((child: any) => processNode(child)).join('');
      }

      return '';
    };

    richText.root.children.forEach((node: any) => {
      html += processNode(node);
    });

    return html;
  }

  return '';
};

export default async function AFloresta() {
  const payload = await getPayload({ config });

  // Fetch a-floresta page settings
  const florestaPage = await payload.findGlobal({
    // @ts-ignore - Global types not yet generated
    slug: 'a-floresta-page',
  });

  // Default content
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
    comoFuncionaStoryContent: `<p>… não parte de atividades pré-definidas, mas sim de infinitas possibilidades.</p><p>E essa abertura exige um trabalho profundo de reflexão.</p><p>Praticante, aprendiz, lugar e recursos: no fundo, as sessões de Forest School são influenciadas pelas relações entre o adulto, o contexto e os materiais disponíveis. Pretende-se que exista responsividade entre estas dinâmicas, de modo que nunca seja possível determinar em plenitude o que pode acontecer e o rumo que a sessão pode levar.</p><p>As relações vão sendo construídas e desenvolvidas, permitindo que, por vezes, seja a criança a liderar, e noutras seja o próprio meio envolvente. Trata-se de uma combinação viva de todas estas forças e de como interagem entre si.</p><p>Ao longo das sessões, as Crias exploram livremente, guiadas pelos seus interesses, num ambiente cuidadosamente preparado por um educador sensível e atento - o que distingue verdadeiramente um contexto de Forest School.</p>`,
    comoFuncionaTitle: 'Como Funciona',
    ageInfo: `<ul class="space-y-2 list-disc pl-4 marker:text-white/40"><li>Dos 6 meses aos 4 anos</li><li>Sessões regulares de 2 horas, sempre com o acompanhamento de apenas um cuidador</li></ul>`,
    scheduleInfo: `<ul class="space-y-2 list-disc pl-4 marker:text-white/40"><li>Segunda-feira, Quarta-feira, Sábado e Domingo - 10:00h às 12:00h</li><li>Quarta-feira, Sábado e Domingo - 14:30h às 16:30h (horário de inverno)<br />15h00 às 17h00 (horário de verão)</li></ul>`,
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

  // Prepare page content with fallbacks
  const pageContent = {
    heroImage: getImageUrl((florestaPage as any)?.heroImage, defaultContent.heroImage),
    heroTitle: (florestaPage as any)?.heroTitle || defaultContent.heroTitle,
    forestSchoolTitle: (florestaPage as any)?.forestSchoolTitle || defaultContent.forestSchoolTitle,
    forestSchoolImages:
      (florestaPage as any)?.forestSchoolImages &&
      (florestaPage as any).forestSchoolImages.length > 0
        ? (florestaPage as any).forestSchoolImages.map((img: any) => ({
            src: getImageUrl(img.image, ''),
            alt: img.alt || '',
          }))
        : defaultContent.forestSchoolImages,
    forestSchoolContent:
      richTextToHtml((florestaPage as any)?.forestSchoolContent) ||
      defaultContent.forestSchoolContent,
    sentirTitle: (florestaPage as any)?.sentirTitle || defaultContent.sentirTitle,
    features:
      (florestaPage as any)?.features && (florestaPage as any).features.length > 0
        ? (florestaPage as any).features.map((feature: any) => ({
            icon: getImageUrl(feature.icon, ''),
            title: feature.title || '',
            items: feature.items || [],
          }))
        : defaultContent.features,
    sessoesTitle: (florestaPage as any)?.sessoesTitle || defaultContent.sessoesTitle,
    sessoesIntro: (florestaPage as any)?.sessoesIntro || defaultContent.sessoesIntro,
    comoFuncionaStoryTitle:
      (florestaPage as any)?.comoFuncionaStoryTitle || defaultContent.comoFuncionaStoryTitle,
    comoFuncionaStoryContent:
      richTextToHtml((florestaPage as any)?.comoFuncionaStoryContent) ||
      defaultContent.comoFuncionaStoryContent,
    comoFuncionaTitle: (florestaPage as any)?.comoFuncionaTitle || defaultContent.comoFuncionaTitle,
    ageInfo: richTextToHtml((florestaPage as any)?.ageInfo) || defaultContent.ageInfo,
    scheduleInfo:
      richTextToHtml((florestaPage as any)?.scheduleInfo) || defaultContent.scheduleInfo,
    locationInfo:
      richTextToHtml((florestaPage as any)?.locationInfo) || defaultContent.locationInfo,
    pricingInfo: richTextToHtml((florestaPage as any)?.pricingInfo) || defaultContent.pricingInfo,
    monthlyPacksInfo:
      richTextToHtml((florestaPage as any)?.monthlyPacksInfo) || defaultContent.monthlyPacksInfo,
    photoPacksInfo:
      richTextToHtml((florestaPage as any)?.photoPacksInfo) || defaultContent.photoPacksInfo,
    disclaimer: richTextToHtml((florestaPage as any)?.disclaimer) || defaultContent.disclaimer,
    inscricaoLink: (florestaPage as any)?.inscricaoLink || defaultContent.inscricaoLink,
    videoTitle: (florestaPage as any)?.videoTitle || defaultContent.videoTitle,
    videoUrl: (florestaPage as any)?.videoUrl || defaultContent.videoUrl,
  };

  return <AFlorestaClient pageContent={pageContent} />;
}
