import Link from 'next/link'

import { PageHeader } from '@/components'

export default function FilesPage() {
  return (
    <>
      <PageHeader title='Files' className='flex items-center justify-between'>
        <Link href='/dashboard/files/add'>Add file</Link>
      </PageHeader>

      <section></section>
    </>
  )
}
