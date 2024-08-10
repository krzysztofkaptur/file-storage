import type { PageProps } from '@/types'

import { PageHeader } from '@/components'

import { fetchFiles } from '@/actions/storage'

import { FileUploadDrawer, FilesList } from './parts'

export default async function FilesPage({}: PageProps<{}, {}>) {
  const { data, error } = await fetchFiles()

  // todo: handle error
  if (error) {
    return <h1>Error</h1>
  }

  return (
    <>
      <PageHeader title='Files' className='flex items-center justify-between'>
        <FileUploadDrawer />
      </PageHeader>

      <FilesList files={data} />
    </>
  )
}
