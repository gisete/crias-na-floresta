import type { GlobalConfig } from 'payload';

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Página Inicial',
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
              name: 'heroVideo',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Vídeo do Cabeçalho',
              admin: {
                description: 'Vídeo principal do cabeçalho',
              },
            },
            {
              name: 'heroVideoUrl',
              type: 'text',
              required: false,
              label: 'URL do Vídeo',
              admin: {
                description: 'URL alternativa se não usar upload (ex: /videos/homepage-hero.mp4)',
              },
            },
            {
              name: 'heroPlaceholder',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Imagem Placeholder',
              admin: {
                description: 'Imagem mostrada enquanto o vídeo carrega',
              },
            },
            {
              name: 'heroFallbackImage',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Imagem de Fallback',
              admin: {
                description: 'Imagem alternativa caso o vídeo não carregue',
              },
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Logo',
              admin: {
                description: 'Logo exibido no cabeçalho',
              },
            },
          ],
        },
        {
          label: 'A Crias',
          fields: [
            {
              name: 'introTitle',
              type: 'text',
              required: true,
              defaultValue: 'A Crias',
              label: 'Título',
            },
            {
              name: 'introContent',
              type: 'richText',
              required: true,
              label: 'Conteúdo',
              admin: {
                description: 'Texto de introdução',
              },
            },
            {
              name: 'introLinkText',
              type: 'text',
              required: false,
              defaultValue: 'Conheça a nossa floresta →',
              label: 'Texto do Link',
            },
            {
              name: 'introLinkUrl',
              type: 'text',
              required: false,
              defaultValue: '/a-floresta',
              label: 'URL do Link',
            },
          ],
        },
        {
          label: 'Citação',
          fields: [
            {
              name: 'quoteText',
              type: 'textarea',
              required: true,
              label: 'Texto da Citação',
              admin: {
                description: 'Citação inspiradora',
              },
            },
            {
              name: 'quoteIcon',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Ícone Decorativo',
              admin: {
                description: 'Ícone acima da citação',
              },
            },
          ],
        },
        {
          label: 'Junta-Te A Nós',
          fields: [
            {
              name: 'juntaTeTitle',
              type: 'text',
              required: true,
              defaultValue: 'Junta-Te A Nós Na Floresta',
              label: 'Título',
            },
            {
              name: 'juntaTeContent',
              type: 'richText',
              required: true,
              label: 'Conteúdo',
            },
            {
              name: 'juntaTeImage',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Imagem de Fundo',
            },
            {
              name: 'juntaTeLinkText',
              type: 'text',
              required: false,
              defaultValue: 'Inscreve-te →',
              label: 'Texto do Botão',
            },
            {
              name: 'juntaTeLinkUrl',
              type: 'text',
              required: false,
              label: 'URL de Inscrição',
              admin: {
                description: 'Link para inscrições',
              },
            },
          ],
        },
        {
          label: 'Guardiões',
          fields: [
            {
              name: 'guardioesTitle',
              type: 'text',
              required: true,
              defaultValue: 'Guardiões da Floresta',
              label: 'Título',
            },
            {
              name: 'guardioesContent',
              type: 'richText',
              required: true,
              label: 'Conteúdo',
              admin: {
                description: 'Texto sobre os guardiões',
              },
            },
            {
              name: 'guardioesImage',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Imagem',
            },
            {
              name: 'guardioesLinkText',
              type: 'text',
              required: false,
              defaultValue: 'Conheça →',
              label: 'Texto do Link',
            },
            {
              name: 'guardioesLinkUrl',
              type: 'text',
              required: false,
              defaultValue: '/guardioes',
              label: 'URL do Link',
            },
          ],
        },
        {
          label: 'Testemunhos',
          fields: [
            {
              name: 'testimonialTitle',
              type: 'text',
              required: true,
              defaultValue: 'A Nossa Comunidade',
              label: 'Título',
            },
            {
              name: 'testimonialBackgroundImage',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Imagem de Fundo',
            },
            {
              name: 'testimonials',
              type: 'array',
              label: 'Testemunhos',
              admin: {
                description: 'Testemunhos da comunidade',
              },
              fields: [
                {
                  name: 'quote',
                  type: 'textarea',
                  required: true,
                  label: 'Citação',
                },
                {
                  name: 'author',
                  type: 'text',
                  required: false,
                  label: 'Autor',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
