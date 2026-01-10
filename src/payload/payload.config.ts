import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { fileURLToPath } from 'url'

// Import collections
import Pages from './collections/Pages'
import Media from './collections/Media'
import Navigation from './collections/Navigation'
import FAQ from './collections/FAQ'
import Users from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Admin panel configuration
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- Crias na Floresta',
      favicon: '/favicon.ico',
    },
  },

  // Collections
  collections: [Users, Pages, Media, Navigation, FAQ],

  // Rich text editor
  editor: slateEditor({}),

  // Database adapter (PostgreSQL via Supabase)
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),

  // Secret for JWT encryption
  secret: process.env.PAYLOAD_SECRET || 'your-secret-here',

  // TypeScript configuration
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // Server URL
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
})
