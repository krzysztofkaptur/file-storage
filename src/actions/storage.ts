'use server'

import { supabase } from '@/lib/storage'
import { revalidatePath } from 'next/cache'

const FILE_STORAGE = process.env.FILE_STORAGE!

export const saveFile = async (formData: FormData) => {
  const file = formData.get('image') as File
  const fileName = file.name

  const { data, error } = await supabase.storage
    .from(FILE_STORAGE)
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: true,
    })

  revalidatePath('/dashboard/files')

  console.log({ data })
  console.log({ error })
}

export const fetchFiles = async (limit: number = 100, offset: number = 0) => {
  const { data, error } = await supabase.storage.from(FILE_STORAGE).list('', {
    limit,
    offset,
    sortBy: { column: 'name', order: 'asc' },
  })

  return { data, error }
}

export const fetchUrl = async (path: string) => {
  const { data } = supabase.storage.from(FILE_STORAGE).getPublicUrl(path)

  return { data }
}

export const deleteFile = async (paths: string[]) => {
  const { data, error } = await supabase.storage
    .from(FILE_STORAGE)
    .remove(paths)

  revalidatePath('/dashboard/files')
}

export const downloadFile = async (path: string) => {
  const { data } = supabase.storage.from(FILE_STORAGE).getPublicUrl(path, {
    download: true,
  })

  return { data }
}
