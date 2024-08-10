'use client'

import { PropsWithChildren } from 'react'

import { Button as ButtonUI, Spinner } from '@/ui'
import type { ButtonProps } from '@/ui'

type ButtonPropsType = PropsWithChildren<
  ButtonProps & { isLoading?: boolean; isRound?: boolean }
>

export const Button = ({
  isLoading = false,
  children,
  type = 'button',
  ...props
}: ButtonPropsType) => {
  return (
    <>
      <ButtonUI type={type} disabled={isLoading} {...props}>
        {!isLoading ? children : <Spinner />}
      </ButtonUI>
    </>
  )
}
