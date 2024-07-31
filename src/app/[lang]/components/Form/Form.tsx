import { ReactNode } from 'react'

import { Form as FormUI } from '@/ui'
import { FieldValues, UseFormReturn } from 'react-hook-form'

type Props = {
  children: ReactNode
  className?: string
  onSubmit: () => void
}

export const Form = (
  props: Props & UseFormReturn<FieldValues, any, undefined>
) => {
  const { children, className, onSubmit, ...rest } = props

  return (
    <FormUI {...rest}>
      <form className={className} onSubmit={onSubmit}>
        {children}
      </form>
    </FormUI>
  )
}
