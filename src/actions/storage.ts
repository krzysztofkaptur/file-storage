'use server'

import { supabase } from '@/lib/storage'
import { revalidatePath } from 'next/cache'

const FILE_STORAGE = process.env.FILE_STORAGE!

// todo: move bucket name to .env
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

export const fetchFiles = async () => {
  const { data, error } = await supabase.storage.from(FILE_STORAGE).list('', {
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  })

  return { data, error }
}

export const fetchUrl = async (path: string) => {
  const { data, error } = await supabase.storage
    .from(FILE_STORAGE)
    .createSignedUrl(path, 60 * 60)

  return { data, error }
}

export const deleteFile = async (paths: string[]) => {
  const { data, error } = await supabase.storage
    .from(FILE_STORAGE)
    .remove(paths)

  revalidatePath('/dashboard/files')
}

export const downloadFile = async (path: string) => {
  const { data, error } = await supabase.storage
    .from(FILE_STORAGE)
    .download(path)

  const arrBuffer = await data?.arrayBuffer()

  let dataObj = {
    image: new Uint8Array(arrBuffer!),
    name: path,
  }

  return { data: dataObj, error }
}
