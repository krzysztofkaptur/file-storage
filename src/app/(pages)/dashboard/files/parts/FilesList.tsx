import { FileListImageCard } from './FileListImageCard'
import type { FilesListProps } from './types'

export const FilesList = async ({ images }: FilesListProps) => {
  return (
    <section className='grid grid-cols-4 gap-4'>
      {images?.map((image) => (
        <FileListImageCard key={image.id} image={image} />
      ))}
    </section>
  )
}
