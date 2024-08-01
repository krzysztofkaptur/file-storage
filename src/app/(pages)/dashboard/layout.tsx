import { PropsWithChildren } from 'react'

import { DashboardSidebar, DashboardTopMenu } from './parts'

export default async function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex min-h-screen'>
      <DashboardSidebar />

      <div className='flex-1'>
        <DashboardTopMenu />
        <main className='min-h-[calc(100vh-73px)] px-4 py-10'>{children}</main>
      </div>
    </div>
  )
}
