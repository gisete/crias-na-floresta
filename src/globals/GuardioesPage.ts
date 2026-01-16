import type { GlobalConfig } from 'payload';

export const GuardioesPage: GlobalConfig = {
  slug: 'guardioes-page',
  label: 'Guardiões',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Cabeçalho',
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Imagem do Cabeçalho',
              admin: {
                description: 'Imagem de topo da página (deixe vazio para usar a imagem padrão)',
              },
            },
            {
              name: 'heroTitle',
              type: 'text',
              required: true,
              defaultValue: 'Guardiões da Floresta',
              label: 'Título do Cabeçalho',
            },
          ],
        },
        {
          label: 'Sobre Nós',
          fields: [
            {
              name: 'aboutTitle',
              type: 'text',
              required: true,
              defaultValue: 'Sobre Nós',
              label: 'Título da Secção',
            },
            {
              name: 'martaImage',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Foto da Marta',
            },
            {
              name: 'pedroImage',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Foto do Pedro',
            },
            {
              name: 'martaBio',
              type: 'richText',
              required: true,
              label: 'Biografia da Marta',
              admin: {
                description: 'Texto sobre a Marta',
              },
            },
            {
              name: 'pedroBio',
              type: 'richText',
              required: true,
              label: 'Biografia do Pedro',
              admin: {
                description: 'Texto sobre o Pedro',
              },
            },
          ],
        },
        {
          label: 'Manifesto',
          fields: [
            {
              name: 'manifestoTitle',
              type: 'text',
              required: true,
              defaultValue: 'Nosso Manifesto',
              label: 'Título do Manifesto',
            },
            {
              name: 'manifestoImage',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Imagem do Manifesto',
            },
            {
              name: 'manifestoContent',
              type: 'richText',
              required: true,
              label: 'Conteúdo do Manifesto',
              admin: {
                description: 'Texto principal do manifesto',
              },
            },
            {
              name: 'manifestoQuote',
              type: 'text',
              required: false,
              label: 'Citação Destacada',
              admin: {
                description: 'Citação em destaque no manifesto (opcional)',
              },
            },
          ],
        },
        {
          label: 'A Nossa Diferença',
          fields: [
            {
              name: 'differenceTitle',
              type: 'text',
              required: true,
              defaultValue: 'A Nossa Diferença',
              label: 'Título da Secção',
            },
            {
              name: 'differenceContent',
              type: 'richText',
              required: true,
              label: 'Conteúdo',
              admin: {
                description: 'Texto explicando a diferença',
              },
            },
            {
              name: 'differenceImage',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Imagem',
            },
          ],
        },
        {
          label: 'A Nossa Comunidade',
          fields: [
            {
              name: 'communityTitle',
              type: 'text',
              required: true,
              defaultValue: 'A Nossa Comunidade',
              label: 'Título da Secção',
            },
            {
              name: 'communityImage',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Imagem da Comunidade',
            },
          ],
        },
      ],
    },
  ],
};
