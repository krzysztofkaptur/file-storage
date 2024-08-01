import { Skeleton as UiSkeleton } from '@/ui'

export const Skeleton = () => {
  return (
    <div className='flex items-center space-x-4'>
      <UiSkeleton className='h-12 w-12 rounded-full' />
      <div className='space-y-2'>
        <UiSkeleton className='h-4 w-[250px]' />
        <UiSkeleton className='h-4 w-[200px]' />
      </div>
    </div>
  )
}
