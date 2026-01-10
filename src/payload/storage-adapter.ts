import { createClient } from '@supabase/supabase-js'

// Supabase storage adapter for Payload
export const getSupabaseStorageAdapter = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase credentials not found. Using local file storage.')
    return null
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  return {
    // Upload file to Supabase Storage
    async handleUpload({ data, file }) {
      const { data: uploadData, error } = await supabase.storage
        .from('media')
        .upload(`${Date.now()}-${file.name}`, data, {
          contentType: file.type,
          cacheControl: '3600',
          upsert: false,
        })

      if (error) {
        throw new Error(`Upload failed: ${error.message}`)
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('media')
        .getPublicUrl(uploadData.path)

      return {
        ...file,
        filename: uploadData.path,
        url: urlData.publicUrl,
      }
    },

    // Delete file from Supabase Storage
    async handleDelete({ filename }) {
      const { error } = await supabase.storage.from('media').remove([filename])

      if (error) {
        throw new Error(`Delete failed: ${error.message}`)
      }
    },

    // Get static URL for file
    staticURL: supabaseUrl
      ? `${supabaseUrl}/storage/v1/object/public/media`
      : '/media',
  }
}
