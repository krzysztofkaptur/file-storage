import { ForwardedRef, forwardRef } from 'react'

import { Label, Input, Error } from '@/ui'

import type { InputGroupProps } from './types'

const InputGroup = forwardRef(
  (props: InputGroupProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      id,
      name,
      label,
      required = false,
      error,
      disabled,
      ...rest
    } = props

    return (
      <div>
        <Label htmlFor={id ?? name} className='text-gray-700'>
          {required ? `${label}*` : label}
        </Label>
        <Input
          ref={ref}
          id={id ?? name}
          name={name ?? name}
          disabled={disabled}
          {...rest}
        />
        {error ? <Error error={error as string} /> : null}
      </div>
    )
  }
)

InputGroup.displayName = 'InputGroup'

export { InputGroup }
