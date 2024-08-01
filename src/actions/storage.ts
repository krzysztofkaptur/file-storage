'use server'

import { supabase } from '@/lib/storage'

export const saveFile = async (formData: FormData) => {
  const file = formData.get('fileUpload') as File
  const fileName = file.name

  const { data, error } = await supabase.storage
    .from('images')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    })

  console.log({ data })
  console.log({ error })
}
