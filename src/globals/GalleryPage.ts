import type { GlobalConfig } from 'payload';

export const GalleryPage: GlobalConfig = {
  slug: 'gallery-page',
  label: 'Galeria',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Conteúdo da Página',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              defaultValue: 'A Nossa Galeria',
              label: 'Título Principal',
              admin: {
                description: 'Título principal da página da galeria',
              },
            },
            {
              name: 'subtitle',
              type: 'text',
              required: true,
              defaultValue: 'Onde a curiosidade encontra a liberdade.',
              label: 'Subtítulo',
              admin: {
                description: 'Frase/citação abaixo do título',
              },
            },
            {
              name: 'eyebrow',
              type: 'text',
              required: false,
              defaultValue: 'Memórias da Natureza',
              label: 'Texto Acima do Título',
              admin: {
                description: 'Pequeno texto acima do título principal (opcional)',
              },
            },
          ],
        },
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
          ],
        },
        {
          label: 'Imagens da Galeria',
          fields: [
            {
              name: 'images',
              type: 'array',
              label: 'Imagens',
              admin: {
                description: 'Adicione e organize as imagens da galeria',
              },
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  label: 'Imagem',
                },
                {
                  name: 'alt',
                  type: 'text',
                  required: true,
                  label: 'Texto Alternativo',
                  admin: {
                    description: 'Descrição da imagem em português',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
