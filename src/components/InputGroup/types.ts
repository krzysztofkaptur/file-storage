import type { FieldError, FieldErrorsImpl, Merge } from '@/lib/forms'

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
