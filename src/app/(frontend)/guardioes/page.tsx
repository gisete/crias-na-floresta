import { getPayload } from 'payload';
import config from '@payload-config';
import GuardioesClient from './GuardioesClient';

export const dynamic = 'force-dynamic';

// Helper function to safely extract image URL
const getImageUrl = (image: any, fallback: string): string => {
  if (typeof image === 'object' && image?.url) {
    return image.url;
  }
  return fallback;
};

// Helper to convert rich text to HTML (simplified for now)
const richTextToHtml = (richText: any): string => {
  if (!richText) return '';

  // If it's already a string, return it
  if (typeof richText === 'string') return richText;

  // If it's Lexical format, we'll need to parse it
  // For now, return empty string if not in expected format
  // TODO: Implement proper Lexical to HTML conversion
  return '';
};

export default async function Guardioes() {
  const payload = await getPayload({ config });

  // Fetch guardioes page settings
  const guardioesPage = await payload.findGlobal({
    // @ts-ignore - Global types not yet generated
    slug: 'guardioes-page',
  });

  // Default content for fallbacks
  const defaultContent = {
    heroImage: '/photos/hero-a-floresta.jpg',
    heroTitle: 'Guardiões da Floresta',
    aboutTitle: 'Sobre Nós',
    martaImage: '/photos/marta.jpg',
    pedroImage: '/photos/guardioes-pedro.webp',
    martaBio: `<p class="opacity-90">
      <strong class="font-bold text-smoke-gray opacity-100 block">
        A Marta, Educadora de Infância, formada e certificada em Forest School Leader,
        coração e raiz da Crias.
      </strong>
      Tem o dom de escutar a natureza, as crianças e as suas famílias com a mesma presença
      de transformar a nossa floresta encantada onde a alma floresce e o brincar é vida.
      Acredita que a infância é um território sagrado, onde o tempo pertence a cada criança.
    </p>`,
    pedroBio: `<p class="opacity-90">
      <strong class="font-bold text-smoke-gray opacity-100 block">
        O Pedro é alma e chama.
      </strong>
      A sua sabedoria, fruto de uma profunda ligação e formação ambiental, faz com que
      reconheça cada planta, árvore e som da floresta — conhece-lhes o nome, o aroma e o
      tempo de cada uma como quem escuta o coração da natureza. O Pedro é natureza, guardião
      das histórias e do tempo que corre devagar. É presença constante, porto seguro e
      inspiração para todos os que fazem parte desta comunidade. Com serenidade e
      criatividade sustenta, juntamente com a Marta, esta floresta de sentido e propósito.
    </p>`,
    manifestoTitle: 'Nosso<br />Manifesto',
    manifestoImage: '/photos/kids-looking.jpg',
    manifestoContentPart1: `
      <p>
        Vivemos numa sociedade que se afasta progressivamente do contacto real com o mundo natural, substituindo a experiência viva por representações simbólicas. A educação ambiental, muitas vezes, assenta num modelo teórico e racional que transforma a consciência ecológica num conjunto de objetivos a cumprir.
      </p>

      <p>
        Ao mesmo tempo, assistimos a uma habituação crescente a ambientes ecologicamente degradados - uma verdadeira amnésia geracional ambiental, em que cada geração passa a aceitar como normal um mundo cada vez mais empobrecido. Para muitas crianças, a paisagem vista através da janela do carro ou dos ecrãs tornou-se o contacto mais próximo com o mundo natural.
      </p>

      <p>
        Este processo de "extinção da experiência" corre em paralelo com a própria perda global de biodiversidade e com a perda de vínculo, de sensibilidade e de pertença.
      </p>
    `,
    manifestoQuote:
      'O maravilhamento pela Natureza é inato, mas precisa de proximidade, tempo e repetição para florescer. A relação com o mundo natural deve ser uma extensão da infância.',
    manifestoContentPart2: `
      <p>
        Mas esta ligação não se ensina por discursos: vive-se. Por isso, os adultos de referência caminham ao lado das crianças, com os pés na terra, o coração aberto e o olhar atento. Acreditamos no poder do exemplo vivido e partilhado. É ele que constrói a ponte para uma relação profunda e duradoura com o mundo natural. Assim, a Natureza deixa de ser apenas cenário e transforma-se em casa.
      </p>

      <p>
        Esta relação primordial molda e amplia todas as dimensões do ser humano: o sentir, o pensar, o comunicar, o relacionar-se e o imaginar.
      </p>

      <p>
        A Natureza recorda-nos quem somos e quem nos trouxe até aqui. Mostra-nos que somos feitos de raízes e que pertencer é respeitar e cuidar.
      </p>
    `,
    differenceTitle: 'A Nossa Diferença',
    differenceContent: `
      <p>
        A nossa floresta é cuidada e nutrida, todos os dias, por nós. É uma profunda
        dedicação e compromisso. Está fora do nosso alcance mudar o mundo. Aliás é
        completamente irreal.
      </p>
      <p>
        Mas acreditamos que a mudança começa no interior de cada um e no círculo mais
        próximo de influência. O que nos diferencia não é trazermos crias para a natureza.
      </p>

      <p class="font-medium text-mossy-green">
        É como nos relacionamos com a natureza. É olhar para a natureza com igualdade. É a
        empatia que temos para com a natureza humana e não humana. É posicionarmos em
        equilíbrio com o que nos rodeia.
      </p>

      <p>
        Trata-se de proximidade e conexão. É um regresso às nossa origens e ancestralidade.
        É enraizamento e simplicidade.
      </p>

      <p class="italic text-fog-gray text-lg mt-4">
        É esta forma de estar que diferencia o Crias na Floresta.
      </p>
    `,
    differenceImage: '/photos/guardioes-diferenca.webp',
    communityTitle: 'A Nossa Comunidade',
    communityImage: '/photos/group-gathering.jpg',
  };

  // Prepare page content with fallbacks
  const pageContent = {
    heroImage: getImageUrl((guardioesPage as any)?.heroImage, defaultContent.heroImage),
    heroTitle: (guardioesPage as any)?.heroTitle || defaultContent.heroTitle,
    aboutTitle: (guardioesPage as any)?.aboutTitle || defaultContent.aboutTitle,
    martaImage: getImageUrl((guardioesPage as any)?.martaImage, defaultContent.martaImage),
    pedroImage: getImageUrl((guardioesPage as any)?.pedroImage, defaultContent.pedroImage),
    martaBio: richTextToHtml((guardioesPage as any)?.martaBio) || defaultContent.martaBio,
    pedroBio: richTextToHtml((guardioesPage as any)?.pedroBio) || defaultContent.pedroBio,
    manifestoTitle: (guardioesPage as any)?.manifestoTitle || defaultContent.manifestoTitle,
    manifestoImage: getImageUrl(
      (guardioesPage as any)?.manifestoImage,
      defaultContent.manifestoImage
    ),
    manifestoContentPart1:
      richTextToHtml((guardioesPage as any)?.manifestoContentPart1) || defaultContent.manifestoContentPart1,
    manifestoQuote: (guardioesPage as any)?.manifestoQuote || defaultContent.manifestoQuote,
    manifestoContentPart2:
      richTextToHtml((guardioesPage as any)?.manifestoContentPart2) || defaultContent.manifestoContentPart2,
    differenceTitle: (guardioesPage as any)?.differenceTitle || defaultContent.differenceTitle,
    differenceContent:
      richTextToHtml((guardioesPage as any)?.differenceContent) || defaultContent.differenceContent,
    differenceImage: getImageUrl(
      (guardioesPage as any)?.differenceImage,
      defaultContent.differenceImage
    ),
    communityTitle: (guardioesPage as any)?.communityTitle || defaultContent.communityTitle,
    communityImage: getImageUrl(
      (guardioesPage as any)?.communityImage,
      defaultContent.communityImage
    ),
  };

  return <GuardioesClient pageContent={pageContent} />;
}
