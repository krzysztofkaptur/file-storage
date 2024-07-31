import { ReactNode } from 'react'

import {
  Card as UiCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui'

type CardProps = {
  children: ReactNode
  title?: string
  description?: string
  footer?: ReactNode
}

export const Card = ({ children, title, description, footer }: CardProps) => {
  return (
    <UiCard className='w-[350px]'>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && (
        <CardFooter className='flex justify-between'>{footer}</CardFooter>
      )}
    </UiCard>
  )
}
