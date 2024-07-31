import * as SelectPrimitive from '@radix-ui/react-select'

export type SelectOption = {
  value?: string
  label: string
  title?: boolean
}

export type SelectProps = SelectPrimitive.SelectProps & {
  id?: string
  name: string
  label?: string
  required?: boolean
  placeholder?: string
  disabled?: boolean
  options: SelectOption[]
}
