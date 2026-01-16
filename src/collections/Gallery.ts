import type { CollectionConfig } from 'payload';

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  labels: {
    singular: 'Imagem',
    plural: 'Imagens da Galeria (OLD)',
  },
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'image', 'order'],
    hidden: true, // Hide from main navigation
  },
  access: {
    read: () => true,
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
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,
      label: 'Ordem',
    },
  ],
};
