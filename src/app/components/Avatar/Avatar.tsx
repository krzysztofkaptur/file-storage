import { Avatar as UiAvatar, AvatarFallback, AvatarImage } from '@/ui'

import type { AvatarProps } from './types'

export const Avatar = ({ src, alt, fallback }: AvatarProps) => {
  return (
    <UiAvatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </UiAvatar>
  )
}
