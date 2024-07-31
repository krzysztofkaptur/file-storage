type Props = {
  error: string
}

export const Error = ({ error }: Props) => {
  return <span className='text-xs text-red-600'>{error}</span>
}
