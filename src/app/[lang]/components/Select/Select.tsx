// todo: add clear functionality

import * as React from 'react'

import {
  Label,
  Select as UiSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/ui'

import type { SelectProps } from './types'

export const Select = ({
  id,
  name,
  label,
  required,
  placeholder,
  options,
  ...rest
}: SelectProps) => {
  return (
    <div>
      {label && (
        <Label htmlFor={id ?? name}>{required ? `${label}*` : label}</Label>
      )}
      <UiSelect {...rest}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options?.map((option) =>
              option.value ? (
                <SelectItem key={option.label} value={option.value}>
                  {option.label}
                </SelectItem>
              ) : (
                <SelectLabel key={option.label}>{option.label}</SelectLabel>
              )
            )}
          </SelectGroup>
        </SelectContent>
      </UiSelect>
    </div>
  )
}
