import NextImage from 'next/image'

type Props = {
  alt?: string
  src: string
  width: number
  height: number
}

export const Image = (props: Props) => {
  const { src, alt = '', width, height } = props

  return <NextImage src={src} alt={alt} width={width} height={height} />
}
