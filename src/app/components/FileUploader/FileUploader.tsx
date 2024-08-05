'use client'

import { useEffect, useState, useTransition } from 'react'
import { useDropzone } from 'react-dropzone'

import { Card, CardContent } from '@/ui'

import { saveFile } from '@/actions/storage'

import { Thumb } from './parts'

type FileProps = (File & { preview: string })[]

type FileUploaderProps = {
  onFinish: () => void
  render: ({
    handleSaveFile,
    pending,
  }: {
    handleSaveFile: () => void
    pending: boolean
  }) => JSX.Element
}

export const FileUploader = ({ render, onFinish }: FileUploaderProps) => {
  const [pending, startTransition] = useTransition()
  const [files, setFiles] = useState<FileProps>([])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
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
    startTransition(() => saveFile(form).then(() => onFinish()))
  }

  return (
    <>
      <Card>
        <CardContent>
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
                    alt={file.name}
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
      {render({ handleSaveFile, pending })}
    </>
  )
}
