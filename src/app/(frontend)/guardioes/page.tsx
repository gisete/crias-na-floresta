import { getPayload } from 'payload';
import config from '@payload-config';
import GuardioesClient from './GuardioesClient';
import { getImageUrl } from '@/lib/imageHelpers';
import { richTextToHtml } from '@/lib/richTextToHtml';
import type { GuardioesPageGlobal } from '@/types/payload';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Guardiões da Floresta | Marta & Pedro - Crias na Floresta',
  description:
    'Conheça a Marta e o Pedro, educadores e guardiões do projeto Crias na Floresta. Formados em Forest School, dedicam-se a criar uma conexão profunda entre crianças, famílias e natureza através da educação respeitadora.',
  keywords: [
    'forest school leaders',
    'educadores forest school',
    'Marta e Pedro',
    'educação respeitadora',
    'filosofia forest school',
    'guardiões da floresta',
  ],
  openGraph: {
    title: 'Guardiões da Floresta | Marta & Pedro',
    description:
      'Conheça os educadores por trás do projeto Crias na Floresta e a nossa filosofia de educação na natureza.',
    type: 'website',
    url: 'https://criasnaFloresta.pt/guardioes',
    locale: 'pt_PT',
    siteName: 'Crias na Floresta',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guardiões da Floresta | Crias na Floresta',
    description:
      'Conheça os educadores por trás do projeto e a nossa filosofia de educação na natureza.',
  },
  alternates: {
    canonical: 'https://criasnaFloresta.pt/guardioes',
  },
};

export default async function Guardioes() {
  const payload = await getPayload({ config });

  const guardioesPage = (await payload.findGlobal({
    slug: 'guardioes-page',
  })) as GuardioesPageGlobal;

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

  const pageContent = {
    heroImage: getImageUrl(guardioesPage?.heroImage, defaultContent.heroImage),
    heroTitle: guardioesPage?.heroTitle || defaultContent.heroTitle,
    aboutTitle: guardioesPage?.aboutTitle || defaultContent.aboutTitle,
    martaImage: getImageUrl(guardioesPage?.martaImage, defaultContent.martaImage),
    pedroImage: getImageUrl(guardioesPage?.pedroImage, defaultContent.pedroImage),
    martaBio: richTextToHtml(guardioesPage?.martaBio) || defaultContent.martaBio,
    pedroBio: richTextToHtml(guardioesPage?.pedroBio) || defaultContent.pedroBio,
    manifestoTitle: guardioesPage?.manifestoTitle || defaultContent.manifestoTitle,
    manifestoImage: getImageUrl(guardioesPage?.manifestoImage, defaultContent.manifestoImage),
    manifestoContentPart1:
      richTextToHtml(guardioesPage?.manifestoContentPart1) || defaultContent.manifestoContentPart1,
    manifestoQuote: guardioesPage?.manifestoQuote || defaultContent.manifestoQuote,
    manifestoContentPart2:
      richTextToHtml(guardioesPage?.manifestoContentPart2) || defaultContent.manifestoContentPart2,
    differenceTitle: guardioesPage?.differenceTitle || defaultContent.differenceTitle,
    differenceContent:
      richTextToHtml(guardioesPage?.differenceContent) || defaultContent.differenceContent,
    differenceImage: getImageUrl(guardioesPage?.differenceImage, defaultContent.differenceImage),
    communityTitle: guardioesPage?.communityTitle || defaultContent.communityTitle,
    communityImage: getImageUrl(guardioesPage?.communityImage, defaultContent.communityImage),
  };

  return <GuardioesClient pageContent={pageContent} />;
}
