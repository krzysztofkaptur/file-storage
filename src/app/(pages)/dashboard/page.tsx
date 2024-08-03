import { Bell } from '@/lib/icons'

import { PageHeader } from '@/components'

import { DashboardCard } from './parts'

export default function DashboardPage() {
  return (
    <>
      <PageHeader title='Dashboard' />

      <section className='flex gap-4'>
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
    </>
  )
}
