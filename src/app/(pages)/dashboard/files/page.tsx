import Link from 'next/link'

import { Drawer, FileUploader, PageHeader } from '@/components'

import {
  Button,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/ui'

import { fetchFiles } from '@/actions/storage'

import { FileUploadDrawer, FilesList } from './parts'

export default async function FilesPage() {
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
