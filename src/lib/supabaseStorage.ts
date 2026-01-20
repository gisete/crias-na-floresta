import type { Adapter } from '@payloadcms/plugin-cloud-storage/types';
import { createClient } from '@supabase/supabase-js';
import path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const bucketName = process.env.SUPABASE_BUCKET || 'media';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseAdapter: Adapter = ({ collection, prefix }) => {
  return {
    name: 'supabase',
    generateURL: ({ filename, prefix: filePrefix }) => {
      const prefixPath = filePrefix || prefix || '';
      const filePath = prefixPath ? `${prefixPath}/${filename}` : filename;
      return `${supabaseUrl}/storage/v1/object/public/${bucketName}/${filePath}`;
    },
    handleUpload: async ({ data, file }) => {
      const filePrefix = prefix || '';
      const filePath = filePrefix ? `${filePrefix}/${file.filename}` : file.filename;

      try {
        const { error } = await supabase.storage
          .from(bucketName)
          .upload(filePath, file.buffer, {
            contentType: file.mimeType,
            upsert: true,
          });

        if (error) {
          console.error('Supabase upload error:', error);
          throw error;
        }
      } catch (error) {
        console.error('Error uploading to Supabase:', error);
        throw error;
      }
    },
    handleDelete: async ({ doc, filename }) => {
      const filePrefix = doc.prefix || prefix || '';
      const filePath = filePrefix ? `${filePrefix}/${filename}` : filename;

      try {
        const { error } = await supabase.storage.from(bucketName).remove([filePath]);

        if (error) {
          // Log the error but don't throw - this prevents transaction rollback
          // File might already be deleted or not exist in storage
          console.warn('Supabase delete warning (non-fatal):', error.message);
        }
      } catch (error) {
        // Log but don't throw - allow Payload to complete the database delete
        console.warn('Error deleting from Supabase (non-fatal):', error);
      }
    },
    staticHandler: async (req, { params }) => {
      const { filename } = params;
      const filePrefix = prefix || '';
      const filePath = filePrefix ? `${filePrefix}/${filename}` : filename;

      try {
        const { data, error } = await supabase.storage.from(bucketName).download(filePath);

        if (error || !data) {
          return new Response('File not found', { status: 404 });
        }

        const arrayBuffer = await data.arrayBuffer();
        return new Response(arrayBuffer, {
          headers: {
            'Content-Type': data.type,
            'Content-Length': data.size.toString(),
          },
        });
      } catch (error) {
        console.error('Error fetching from Supabase:', error);
        return new Response('Error fetching file', { status: 500 });
      }
    },
  };
};
