'use server'

import { supabase } from '@/lib/storage'
import { fetchMe } from '@/lib/utils/supabase/server'
import { revalidatePath } from 'next/cache'

const FILE_STORAGE = process.env.FILE_STORAGE!

export const saveFile = async (formData: FormData) => {
  const { data: userData, error: userError } = await fetchMe()

  const file = formData.get('file') as File
  const fileName = file.name

  // todo: handle errors
  const { data, error } = await supabase.storage
    .from(`${FILE_STORAGE}`)
    .upload(`${userData?.user?.id}/${fileName}`, file, {
      cacheControl: '3600',
      upsert: true,
    })

  revalidatePath('/dashboard/files')
}

export const fetchFiles = async (limit: number = 100, offset: number = 0) => {
  const { data: userData, error: userError } = await fetchMe()

  if (userError) {
    return { data: null, error: userError }
  }

  const { data, error } = await supabase.storage
    .from(`${FILE_STORAGE}`)
    .list(userData?.user?.id, {
      limit,
      offset,
      sortBy: { column: 'created_at', order: 'desc' },
    })

  return { data, error }
}

export const fetchUrl = async (fileName: string) => {
  const { data: userData, error: userError } = await fetchMe()

  if (userError) {
    return { data: null, error: userError }
  }

  const { data } = supabase.storage
    .from(FILE_STORAGE)
    .getPublicUrl(`${userData?.user?.id}/${fileName}`)

  return { data }
}

export const deleteFile = async (fileName: string) => {
  const { data: userData, error: userError } = await fetchMe()

  if (userError) {
    return { data: null, error: userError }
  }

  const { data, error } = await supabase.storage
    .from(FILE_STORAGE)
    .remove([`${userData?.user?.id}/${fileName}`])

  revalidatePath('/dashboard/files')

  return { data, error }
}

export const downloadFile = async (fileName: string) => {
  const { data: userData, error: userError } = await fetchMe()

  if (userError) {
    return { data: null, error: userError }
  }

  const { data, error } = await supabase.storage
    .from(FILE_STORAGE)
    .createSignedUrl(`${userData?.user?.id}/${fileName}`, 60)

  return { data: data?.signedUrl, error }
}
