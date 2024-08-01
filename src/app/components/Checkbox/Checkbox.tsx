'use client'

import { Checkbox as UiCheckbox } from '@/ui'

export const Checkbox = () => {
  return (
    <div className='flex items-center space-x-2'>
      <UiCheckbox id='terms' />
      <label
        htmlFor='terms'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Accept terms and conditions
      </label>
    </div>
  )
}
