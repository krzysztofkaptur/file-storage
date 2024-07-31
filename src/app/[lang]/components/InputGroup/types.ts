import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

// todo: get label and input props from Ui
export type InputGroupProps = {
  id?: string
  label: string
  name: string
  required?: boolean
  type?: React.HTMLInputTypeAttribute
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
  placeholder?: string
  disabled?: boolean
}
