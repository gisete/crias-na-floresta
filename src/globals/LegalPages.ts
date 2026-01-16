import type { GlobalConfig } from 'payload';

export const LegalPages: GlobalConfig = {
  slug: 'legal-pages',
  label: 'Páginas Legais',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Termos e Condições',
          fields: [
            {
              name: 'termosTitle',
              type: 'text',
              required: true,
              defaultValue: 'Termos e Condições',
              label: 'Título',
            },
            {
              name: 'termosContent',
              type: 'richText',
              required: true,
              label: 'Conteúdo',
            },
          ],
        },
        {
          label: 'Política de Privacidade',
          fields: [
            {
              name: 'privacidadeTitle',
              type: 'text',
              required: true,
              defaultValue: 'Política de Privacidade',
              label: 'Título',
            },
            {
              name: 'privacidadeContent',
              type: 'richText',
              required: true,
              label: 'Conteúdo',
            },
          ],
        },
        {
          label: 'Política de Cookies',
          fields: [
            {
              name: 'cookiesTitle',
              type: 'text',
              required: true,
              defaultValue: 'Política de Cookies',
              label: 'Título',
            },
            {
              name: 'cookiesContent',
              type: 'richText',
              required: true,
              label: 'Conteúdo',
            },
          ],
        },
      ],
    },
  ],
};
