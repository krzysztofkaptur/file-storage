import { FileUploader, PageHeader } from '@/app/components'

export default function FileAdd() {
  return (
    <>
      <PageHeader title='Files' />

      <section>
        <FileUploader />
      </section>
    </>
  )
}
