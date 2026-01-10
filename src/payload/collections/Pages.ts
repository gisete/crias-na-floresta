import { CollectionConfig } from 'payload'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título da Página',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL (slug)',
      admin: {
        description: 'URL amigável para a página (ex: quem-somos, a-floresta)',
      },
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Seções de Conteúdo',
      fields: [
        {
          name: 'sectionTitle',
          type: 'text',
          label: 'Título da Seção',
        },
        {
          name: 'sectionContent',
          type: 'richText',
          label: 'Conteúdo da Seção',
          required: true,
        },
        {
          name: 'sectionOrder',
          type: 'number',
          label: 'Ordem',
          admin: {
            description: 'Ordem de exibição da seção (menor número aparece primeiro)',
          },
        },
      ],
    },
  ],
}

export default Pages
