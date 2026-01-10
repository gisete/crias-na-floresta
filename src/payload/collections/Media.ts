import { CollectionConfig } from 'payload'

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'category', 'updatedAt'],
  },
  access: {
    read: () => true, // Public read access
  },
  upload: {
    staticDir: 'media', // Fallback for local development
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*', 'video/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Texto Alternativo',
      admin: {
        description: 'Descrição da imagem para acessibilidade',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Legenda',
      admin: {
        description: 'Legenda opcional para a imagem',
      },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Categoria',
      options: [
        {
          label: 'Galeria',
          value: 'gallery',
        },
        {
          label: 'Hero',
          value: 'hero',
        },
        {
          label: 'Geral',
          value: 'general',
        },
      ],
      defaultValue: 'general',
      admin: {
        description: 'Categoria da mídia para organização',
      },
    },
  ],
}

export default Media
