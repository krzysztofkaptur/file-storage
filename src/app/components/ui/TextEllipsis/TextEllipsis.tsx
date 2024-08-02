import { PropsWithChildren } from 'react'

type TextEllipsisProps = PropsWithChildren<{}>

export const TextEllipsis = ({ children }: TextEllipsisProps) => {
  return (
    <div className='[&>*]:overflow-hidden [&>*]:text-ellipsis [&>*]:whitespace-nowrap	'>
      {children}
    </div>
  )
}
