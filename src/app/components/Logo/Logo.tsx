import { Image } from '@/components'

type LogoProps = {
  width?: number
  height?: number
}

export const Logo = ({ width = 100, height = 20 }: LogoProps) => {
  return (
    <Image
      src='https://github.com/shadcn.png'
      alt='logo'
      width={width}
      height={height}
    />
  )
}
