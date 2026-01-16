import { getPayload } from 'payload';
import config from '@payload-config';
import LegalPageLayout from '@/components/shared/LegalPageLayout';
import { richTextToHtml } from '@/lib/richTextToHtml';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crias Na Floresta | Política de Privacidade',
  description: 'Política de Privacidade da Crias na Floresta',
};

export default async function PoliticaDePrivacidade() {
  const payload = await getPayload({ config });

  const legalPages = await payload.findGlobal({
    // @ts-ignore - Global types not yet generated
    slug: 'legal-pages',
  });

  const title = (legalPages as any)?.privacidadeTitle || 'Política de Privacidade';
  const content =
    richTextToHtml((legalPages as any)?.privacidadeContent) ||
    `<p>A Crias na Floresta está empenhada em proteger a privacidade de todos os utilizadores do seu website e por isso, elaborou a presente Política de Privacidade como um compromisso pelo respeito da informação pessoal dos seus utilizadores, demonstração de boas práticas relativas à proteção das informações pessoais e de segurança, conforme descrito abaixo.</p>`;

  return <LegalPageLayout title={title} content={content} />;
}
