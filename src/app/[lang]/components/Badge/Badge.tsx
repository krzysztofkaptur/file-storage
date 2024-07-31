import { Badge as BadgeUi } from '@/ui'

import type { BadgeProps } from './types'

export const Badge = ({ text, variant }: BadgeProps) => {
  return <BadgeUi variant={variant}>{text}</BadgeUi>
}
