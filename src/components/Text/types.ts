import { PropsWithChildren } from 'react'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export type TextProps = PropsWithChildren<{
  variant?: TextVariant
  className?: string
}>
