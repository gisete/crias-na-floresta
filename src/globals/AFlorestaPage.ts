import type { GlobalConfig } from 'payload';

export const AFlorestaPage: GlobalConfig = {
  slug: 'a-floresta-page',
  label: 'A Floresta',
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
                description: 'Imagem de topo da página',
              },
            },
            {
              name: 'heroTitle',
              type: 'text',
              required: false,
              defaultValue: 'A Floresta',
              label: 'Título do Cabeçalho',
            },
          ],
        },
        {
          label: 'Forest School',
          fields: [
            {
              name: 'forestSchoolTitle',
              type: 'text',
              required: false,
              defaultValue: 'Forest School',
              label: 'Título da Secção',
            },
            {
              name: 'forestSchoolImages',
              type: 'array',
              label: 'Imagens',
              admin: {
                description: 'Três imagens para a galeria (máximo 3)',
              },
              maxRows: 3,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: false,
                  label: 'Imagem',
                },
                {
                  name: 'alt',
                  type: 'text',
                  required: false,
                  label: 'Texto Alternativo',
                },
              ],
            },
            {
              name: 'forestSchoolContent',
              type: 'richText',
              required: false,
              label: 'Conteúdo',
              admin: {
                description: 'Texto sobre o Forest School',
              },
            },
          ],
        },
        {
          label: 'Sentir A Floresta',
          fields: [
            {
              name: 'sentirTitle',
              type: 'text',
              required: false,
              defaultValue: 'Sentir A Floresta',
              label: 'Título da Secção',
            },
            {
              name: 'features',
              type: 'array',
              label: 'Características',
              admin: {
                description: 'As quatro características principais',
              },
              maxRows: 4,
              fields: [
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                  required: false,
                  label: 'Ícone',
                },
                {
                  name: 'title',
                  type: 'text',
                  required: false,
                  label: 'Título',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: false,
                  label: 'Descrição',
                },
              ],
            },
          ],
        },
        {
          label: 'Sessões',
          fields: [
            {
              name: 'sessoesTitle',
              type: 'text',
              required: false,
              defaultValue: 'Sessões',
              label: 'Título da Secção',
            },
            {
              name: 'sessoesIntro',
              type: 'textarea',
              required: false,
              label: 'Texto Introdutório',
              admin: {
                description: 'Texto de introdução às sessões',
              },
            },
          ],
        },
        {
          label: 'Como Funciona',
          fields: [
            {
              name: 'comoFuncionaStoryTitle',
              type: 'text',
              required: false,
              defaultValue: 'Uma sessão Forest School…',
              label: 'Título da História',
            },
            {
              name: 'comoFuncionaStoryContent',
              type: 'richText',
              required: false,
              label: 'Conteúdo da História',
              admin: {
                description: 'Descrição de como funciona uma sessão',
              },
            },
            {
              name: 'comoFuncionaTitle',
              type: 'text',
              required: false,
              defaultValue: 'Como Funciona',
              label: 'Título da Caixa Verde',
            },
            {
              name: 'ageInfo',
              type: 'richText',
              required: false,
              label: 'Informação de Idade',
            },
            {
              name: 'scheduleInfo',
              type: 'richText',
              required: false,
              label: 'Informação de Horário',
            },
            {
              name: 'locationInfo',
              type: 'richText',
              required: false,
              label: 'Localização',
            },
            {
              name: 'pricingInfo',
              type: 'richText',
              required: false,
              label: 'Preçário',
            },
            {
              name: 'monthlyPacksInfo',
              type: 'richText',
              required: false,
              label: 'Packs Mensais',
            },
            {
              name: 'photoPacksInfo',
              type: 'richText',
              required: false,
              label: 'Packs com Registos Fotográficos',
            },
            {
              name: 'disclaimer',
              type: 'richText',
              required: false,
              label: 'Notas/Disclaimer',
            },
            {
              name: 'inscricaoLink',
              type: 'text',
              required: false,
              label: 'Link de Inscrição',
              admin: {
                description: 'URL para página de inscrições',
              },
            },
          ],
        },
        {
          label: 'Vídeo',
          fields: [
            {
              name: 'videoTitle',
              type: 'text',
              required: false,
              defaultValue: 'Um Dia Na Floresta',
              label: 'Título da Secção de Vídeo',
            },
            {
              name: 'videoUrl',
              type: 'text',
              required: false,
              label: 'URL do Vídeo do YouTube',
              admin: {
                description: 'URL embed do YouTube (ex: https://www.youtube.com/embed/Z4xGgmCEWxE)',
              },
            },
          ],
        },
      ],
    },
  ],
};
