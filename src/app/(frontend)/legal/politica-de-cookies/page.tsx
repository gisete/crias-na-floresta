import { getPayload } from 'payload';
import config from '@payload-config';
import LegalPageLayout from '@/components/shared/LegalPageLayout';
import { richTextToHtml } from '@/lib/richTextToHtml';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Crias Na Floresta | Política de Cookies',
  description: 'Política de Cookies da Crias na Floresta',
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
    `<p>Esta Política de Cookies explica como a Crias na Floresta usa cookies e tecnologias similares quando você visita nosso site.</p>`;

  return <LegalPageLayout title={title} content={content} />;
}
