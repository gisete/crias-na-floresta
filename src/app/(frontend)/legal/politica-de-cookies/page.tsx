import { getPayload } from 'payload';
import config from '@payload-config';
import LegalPageLayout from '@/components/shared/LegalPageLayout';
import { richTextToHtml } from '@/lib/richTextToHtml';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Política de Cookies | Crias na Floresta',
  description: 'Política de Cookies da Crias na Floresta. Como utilizamos cookies no nosso website.',
  robots: {
    index: false,
    follow: true,
  },
};

export default async function PoliticaDeCookies() {
  const payload = await getPayload({ config });

  const legalPages = await payload.findGlobal({
    // @ts-ignore - Global types not yet generated
    slug: 'legal-pages',
  });

  const title = (legalPages as any)?.cookiesTitle || 'Política de Cookies';
  const content =
    richTextToHtml((legalPages as any)?.cookiesContent) ||
    `<p>Esta Política de Cookies explica como a Crias na Floresta usa cookies e tecnologias similares quando você visita nosso site.</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">O que são cookies?</h2>

    <p>Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita um site. Eles são amplamente utilizados para fazer com que os sites funcionem, ou funcionem de forma mais eficiente, bem como fornecer informações aos proprietários do site.</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">Como usamos cookies?</h2>

    <p>Utilizamos cookies por diversos motivos, incluindo:</p>

    <h3 class="text-2xl md:text-3xl text-fog-gray pt-6 pb-3">Cookies Essenciais</h3>

    <p>Esses cookies são necessários para que você possa navegar pelo site e usar seus recursos, como aceder áreas seguras do site.</p>

    <h3 class="text-2xl md:text-3xl text-fog-gray pt-6 pb-3">Cookies de Desempenho</h3>

    <p>Utilizamos esses cookies para analisar como os visitantes usam o site e monitorar a performance do site. Isso nos permite fornecer uma experiência de alta qualidade, identificando e solucionando rapidamente quaisquer problemas que possam surgir. Por exemplo, utilizamos o Google Analytics para nos ajudar a entender como os visitantes interagem com o site.</p>

    <h3 class="text-2xl md:text-3xl text-fog-gray pt-6 pb-3">Cookies de Funcionalidade</h3>

    <p>Esses cookies são usados para lembrar as escolhas que você fez, como suas preferências de idioma, e personalizar sua experiência.</p>

    <h3 class="text-2xl md:text-3xl text-fog-gray pt-6 pb-3">Cookies de Publicidade</h3>

    <p>Esses cookies são usados para fornecer anúncios mais relevantes para você e seus interesses. Eles também são usados para limitar o número de vezes que você vê um anúncio, bem como para medir a eficácia das campanhas publicitárias.</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">Como controlar cookies?</h2>

    <p>Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão em seu computador e você pode configurar a maioria dos navegadores para evitar que eles sejam colocados. No entanto, se você fizer isso, talvez precise ajustar manualmente algumas preferências sempre que visitar um site e alguns serviços e funcionalidades podem não funcionar.</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">Contato</h2>

    <p>Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco através do seguinte endereço de e-mail: criasnafloresta@gmail.com.</p>

    <h2 class="text-3xl md:text-4xl text-fog-gray pt-8 pb-4">Alterações nesta política</h2>

    <p>Podemos atualizar nossa Política de Cookies de tempos em tempos. Quaisquer alterações serão publicadas nesta página e, se as alterações forem significativas, forneceremos um aviso mais destacado (incluindo, para alguns serviços, notificação por e-mail das alterações na Política de Cookies).</p>`;

  return <LegalPageLayout title={title} content={content} />;
}
