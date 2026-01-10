import { createClient } from '@supabase/supabase-js'
import type { Adapter } from '@payloadcms/plugin-cloud-storage/types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const bucketName = 'media' // You can customize this

export const supabaseAdapter = (): Adapter => {
  const supabase = createClient(supabaseUrl, supabaseKey)

  return {
    name: 'supabase-adapter',

    async handleUpload(args) {
      const { file, filename } = args

      // Convert file buffer to Blob if needed
      const fileBuffer = file.buffer || file.data

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(filename, fileBuffer, {
          contentType: file.mimetype,
          upsert: true,
        })

      if (error) {
        throw new Error(`Failed to upload file: ${error.message}`)
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(data.path)

      return {
        ...file,
        filename: data.path,
        url: urlData.publicUrl,
      }
    },

    async handleDelete(args) {
      const { filename } = args

      const { error } = await supabase.storage
        .from(bucketName)
        .remove([filename])

      if (error) {
        throw new Error(`Failed to delete file: ${error.message}`)
      }
    },

    async generateURL(args) {
      const { filename } = args

      const { data } = supabase.storage
        .from(bucketName)
        .getPublicUrl(filename)

      return data.publicUrl
    },
  }
}
