import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Gallery } from './collections/Gallery';
import { GalleryPage } from './globals/GalleryPage';
import { GuardioesPage } from './globals/GuardioesPage';
import { AFlorestaPage } from './globals/AFlorestaPage';
import { HomePage } from './globals/HomePage';
import { LegalPages } from './globals/LegalPages';
import { supabaseAdapter } from './lib/supabaseStorage';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Gallery],
  globals: [HomePage, GalleryPage, GuardioesPage, AFlorestaPage, LegalPages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    cloudStoragePlugin({
      collections: {
        media: {
          adapter: supabaseAdapter,
          disablePayloadAccessControl: true,
        },
      },
    }),
  ],
});
