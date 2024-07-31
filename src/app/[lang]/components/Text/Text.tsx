import type { TextProps } from './types'

export const Text = (props: TextProps) => {
  const { children, variant = 'p', className } = props

  const Tag = `${variant}` as keyof JSX.IntrinsicElements

  return <Tag className={className}>{children}</Tag>
}
