import { TextEllipsis } from '@/app/components/ui'
import { Bell } from '@/lib/icons'
import { Metadata } from 'next'

import { Card, PageHeader } from '@/components'

import { fetchFiles } from '@/actions/storage'

import { DashboardCard } from './parts'

export const metadata: Metadata = {
  title: 'Dashboard | FilesFront',
}

export default async function DashboardPage() {
  const { data: files, error } = await fetchFiles(10)

  if (error) {
    return <h1>Error</h1>
  }

  return (
    <div className='flex flex-col gap-8'>
      <PageHeader title='Dashboard' />

      <section className='flex flex-wrap gap-4'>
        <DashboardCard
          title='Total Revenue'
          content='$44.000'
          footer='+20.1% from last month'
          icon={<Bell size={16} className='text-muted-foreground' />}
        />
        <DashboardCard
          title='Total Revenue'
          content='$44.000'
          footer='+20.1% from last month'
          icon={<Bell size={16} className='text-muted-foreground' />}
        />
        <DashboardCard
          title='Total Revenue'
          content='$44.000'
          footer='+20.1% from last month'
          icon={<Bell size={16} className='text-muted-foreground' />}
        />
        <DashboardCard
          title='Total Revenue'
          content='$44.000'
          footer='+20.1% from last month'
          icon={<Bell size={16} className='text-muted-foreground' />}
        />
      </section>
      <section>
        <Card title='Recently added files'>
          <div className='flex flex-col gap-4'>
            {files?.map((file) => (
              <TextEllipsis key={file.name}>
                <p className='text-sm'>{file.name}</p>
              </TextEllipsis>
            ))}
          </div>
        </Card>
      </section>
    </div>
  )
}
