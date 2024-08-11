import { PropsWithChildren, ReactNode } from 'react'

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  TextEllipsis,
  Card as UiCard,
} from '@/ui'

type CardProps = PropsWithChildren<{
  title?: string
  description?: string
  footer?: ReactNode
}>

export const Card = ({ children, title, description, footer }: CardProps) => {
  return (
    <UiCard className='w-[350px]'>
      <CardHeader>
        {title && (
          <TextEllipsis>
            <CardTitle>{title}</CardTitle>
          </TextEllipsis>
        )}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && (
        <CardFooter className='flex justify-between'>{footer}</CardFooter>
      )}
    </UiCard>
  )
}
