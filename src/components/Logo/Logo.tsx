import { Image } from '@/components'

type LogoProps = {
  src?: string
  width?: number
  height?: number
}

export const Logo = ({
  src = 'https://github.com/shadcn.png',
  width = 100,
  height = 20,
}: LogoProps) => {
  return <Image src={src} alt='logo' width={width} height={height} />
}
