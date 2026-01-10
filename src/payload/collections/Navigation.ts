import { CollectionConfig } from 'payload'

const Navigation: CollectionConfig = {
  slug: 'navigation',
  admin: {
    useAsTitle: 'linkText',
    defaultColumns: ['linkText', 'linkUrl', 'location', 'order'],
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'linkText',
      type: 'text',
      required: true,
      label: 'Texto do Link',
      admin: {
        description: 'Texto que aparece no link de navegação',
      },
    },
    {
      name: 'linkUrl',
      type: 'text',
      required: true,
      label: 'URL do Link',
      admin: {
        description: 'Caminho do link (ex: /quem-somos, /a-floresta)',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      label: 'Ordem',
      admin: {
        description: 'Ordem de exibição do link (menor número aparece primeiro)',
      },
    },
    {
      name: 'location',
      type: 'select',
      required: true,
      label: 'Localização',
      options: [
        {
          label: 'Cabeçalho',
          value: 'header',
        },
        {
          label: 'Rodapé',
          value: 'footer',
        },
      ],
      admin: {
        description: 'Onde o link deve aparecer no site',
      },
    },
  ],
}

export default Navigation
