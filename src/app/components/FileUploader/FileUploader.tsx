'use client'

import { useEffect, useState, useTransition } from 'react'
import { useDropzone } from 'react-dropzone'

import { Button, Card, CardContent } from '@/ui'

import { saveFile } from '@/actions/storage'

import { Thumb } from './parts'

type FileProps = (File & { preview: string })[]

export const FileUploader = () => {
  const [pending, startTransition] = useTransition()
  const [files, setFiles] = useState<FileProps>([])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles)
      setFiles(
        acceptedFiles.map((file) => {
          return Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        })
      )
    },
  })

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [files])

  const handleSaveFile = async () => {
    const form = new FormData()

    form.append('image', files[0])
    startTransition(() => saveFile(form))
  }

  return (
    <>
      <Card>
        <CardContent className='grid grid-cols-2 gap-4'>
          <div>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p>Drag & drop some files here, or click to select files</p>
            </div>
            <div>
              {files.map((file) => (
                <Thumb key={file.name}>
                  {/* eslint-disable-next-line */}
                  <img
                    alt=''
                    src={file.preview}
                    onLoad={() => {
                      URL.revokeObjectURL(file.preview)
                    }}
                  />
                </Thumb>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <Button onClick={handleSaveFile}>Save</Button>
    </>
  )
}
