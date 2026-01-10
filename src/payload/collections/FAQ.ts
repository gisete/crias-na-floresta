import { CollectionConfig } from 'payload'

const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'category', 'order', 'updatedAt'],
  },
  access: {
    read: () => true, // Public read access
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      label: 'Pergunta',
      admin: {
        description: 'A pergunta frequente',
      },
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
      label: 'Resposta',
      admin: {
        description: 'A resposta detalhada',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      label: 'Ordem',
      defaultValue: 0,
      admin: {
        description: 'Ordem de exibição (menor número aparece primeiro)',
      },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Categoria',
      options: [
        {
          label: 'Geral',
          value: 'general',
        },
        {
          label: 'Inscrições',
          value: 'enrollments',
        },
        {
          label: 'Atividades',
          value: 'activities',
        },
        {
          label: 'Localização',
          value: 'location',
        },
      ],
      defaultValue: 'general',
      admin: {
        description: 'Categoria da pergunta para organização',
      },
    },
  ],
}

export default FAQ
