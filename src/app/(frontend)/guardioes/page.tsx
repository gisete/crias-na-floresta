import { getPayload } from 'payload';
import config from '@payload-config';
import GuardioesClient from './GuardioesClient';

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
    slug: 'guardioes-page' as any,
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
    manifestoContent: `
      <p>
        A sociedade urbana, hoje em dia, opta cada vez mais por formas de contacto simbólico
        com o ambiente natural, num processo de extinção da experiência que parece correr em
        paralelo com a própria perda global de biodiversidade.
      </p>

      <p>
        O contacto direto com a Natureza na primeira infância contribui para o
        desenvolvimento harmonioso do potencial psicocognitivo e constitui uma via
        estrutural para a formação de uma sensibilidade atenta à beleza do mundo. Para a
        criança, é menos importante saber do que sentir: os anos da primeira infância são
        aqueles em que se prepara o solo.
      </p>

      <p>
        Uma vez despertas as emoções — o sentido do belo, o entusiasmo, a empatia, a
        piedade, a admiração e o amor — nasce o desejo de conhecimento. Para que esta
        empatia floresça, os adultos de referência precisam também de a viver: com os pés na
        terra, o coração aberto e o olhar atento. Quando demonstram respeito e encanto pela
        Natureza, oferecem à criança a possibilidade de aprender, de cultivar o cuidado e a
        gratidão.
      </p>

      <p>
        O exemplo, vivido e partilhado, é a ponte que alimenta esta ligação profunda. Assim,
        a Natureza deixa de ser apenas um cenário: torna-se extensão da infância, casa,
        espelho e companheira de crescimento.
      </p>

      <p>
        O contacto direto com o meio natural afeta a criança de um modo que nenhuma
        experiência simbólica pode substituir. A riqueza dessa relação primordial modela e
        amplifica toda a multidimensionalidade humana: o sentir, o pensar, o comunicar,
        entre tantos outros aspetos.
      </p>
    `,
    manifestoQuote: 'Há cada vez menos Natureza disponível — e as crianças estão, também elas, cada vez mais longe dela.',
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
    differenceImage: '/photos/holding-basket.jpg',
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
    manifestoImage: getImageUrl((guardioesPage as any)?.manifestoImage, defaultContent.manifestoImage),
    manifestoContent: richTextToHtml((guardioesPage as any)?.manifestoContent) || defaultContent.manifestoContent,
    manifestoQuote: (guardioesPage as any)?.manifestoQuote || defaultContent.manifestoQuote,
    differenceTitle: (guardioesPage as any)?.differenceTitle || defaultContent.differenceTitle,
    differenceContent: richTextToHtml((guardioesPage as any)?.differenceContent) || defaultContent.differenceContent,
    differenceImage: getImageUrl((guardioesPage as any)?.differenceImage, defaultContent.differenceImage),
    communityTitle: (guardioesPage as any)?.communityTitle || defaultContent.communityTitle,
    communityImage: getImageUrl((guardioesPage as any)?.communityImage, defaultContent.communityImage),
  };

  return <GuardioesClient pageContent={pageContent} />;
}
