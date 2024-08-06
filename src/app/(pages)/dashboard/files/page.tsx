import type { PageProps } from '@/types'

import { PageHeader } from '@/components'

import { fetchFiles } from '@/actions/storage'

import { FileUploadDrawer, FilesList } from './parts'

export default async function FilesPage(props: PageProps<{}, {}>) {
  const { data, error } = await fetchFiles()

  if (error) {
    return <h1>Error</h1>
  }

  return (
    <>
      <PageHeader title='Images' className='flex items-center justify-between'>
        <FileUploadDrawer />
      </PageHeader>

      <FilesList images={data} />
    </>
  )
}
