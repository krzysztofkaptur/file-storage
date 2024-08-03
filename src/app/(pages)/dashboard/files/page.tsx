import Link from 'next/link'

import { PageHeader } from '@/components'

import { fetchFiles } from '@/actions/storage'

import { FilesList } from './parts'

export default async function FilesPage() {
  const { data, error } = await fetchFiles()

  if (error) {
    return <h1>Error</h1>
  }

  return (
    <>
      <PageHeader title='Images' className='flex items-center justify-between'>
        {/* todo: change it from separate page to drawer */}
        <Link href='/dashboard/files/add'>Add image</Link>
      </PageHeader>

      <FilesList images={data} />
    </>
  )
}
