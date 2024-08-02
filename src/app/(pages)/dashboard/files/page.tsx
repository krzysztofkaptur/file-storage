import Link from 'next/link'

import { PageHeader } from '@/components'

import { fetchFiles, fetchUrl } from '@/actions/storage'

import { FilesList } from './parts'
import type { FileListImage } from './parts'

export default async function FilesPage() {
  const { data, error } = await fetchFiles()

  const filesList = await Promise.all(
    data!.map(async (item) => {
      const { data: imageData } = await fetchUrl(item.name)

      const image: FileListImage = {
        id: item.id,
        name: item.name,
        url: imageData!.signedUrl,
      }

      return image
    })
  )

  if (error) {
    return <h1>Error</h1>
  }

  return (
    <>
      <PageHeader title='Images' className='flex items-center justify-between'>
        {/* todo: change it from separate page to drawer */}
        <Link href='/dashboard/files/add'>Add image</Link>
      </PageHeader>

      <FilesList images={filesList} />
    </>
  )
}
