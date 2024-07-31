'use client'

import * as React from 'react'

import { Calendar as UiCalendar } from '@/ui'

export const Calendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <UiCalendar
      mode='single'
      selected={date}
      onSelect={setDate}
      className='rounded-md border'
    />
  )
}
