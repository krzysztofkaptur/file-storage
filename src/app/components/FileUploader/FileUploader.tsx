'use client'

import { useDropzone } from '@/lib/fileUploader'
import { File } from '@/lib/icons'
import { bytesToSize } from '@/lib/utils'
import { useEffect, useState, useTransition } from 'react'

import { Card, CardContent, useToast } from '@/ui'

import { saveFile } from '@/actions/storage'

import { Thumb } from './parts'

type FileProps = (File & { preview: string })[]

type FileUploaderProps = {
  maxSize?: number
  onFinish: () => void
  render: ({
    handleSaveFile,
    pending,
  }: {
    handleSaveFile: () => void
    pending: boolean
  }) => JSX.Element
}

export const FileUploader = ({
  render,
  maxSize = Infinity,
  onFinish,
}: FileUploaderProps) => {
  const [pending, startTransition] = useTransition()
  const [files, setFiles] = useState<FileProps>([])
  const { toast } = useToast()

  const { getRootProps, getInputProps } = useDropzone({
    maxSize: maxSize,
    onDropRejected(fileRejections) {
      for (let i = 0; i < fileRejections.length; i++) {
        toast({
          title: fileRejections[i].file.name,
          description: fileRejections[i].errors[0].message,
          variant: 'destructive',
        })
      }
    },
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

  // todo: name this hook properly
  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [files])

  const handleSaveFile = async () => {
    await files.map((file) => {
      const form = new FormData()
      form.append('file', file)

      // todo: wait for every file to upload before hiding the drawer
      startTransition(() => saveFile(form).then(() => onFinish()))
    })
  }

  return (
    <>
      <div className='flex flex-col gap-8'>
        <Card>
          <CardContent className='p-0'>
            <div>
              <div
                {...getRootProps({ className: 'dropzone p-6 cursor-pointer' })}
              >
                <input {...getInputProps()} />
                <p className='text-sm'>
                  Drag & drop some files here, or click to select files (MAX{' '}
                  {bytesToSize(maxSize)} each)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className='flex flex-wrap gap-4'>
          {files.map((file) => {
            return (
              <div
                key={file.name}
                className='flex flex-col justify-between flex-1 items-center'
              >
                {file.type.includes('image') ? (
                  <Thumb
                    key={file.name}
                    className='flex flex-1 items-center justify-center'
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      alt={file.name}
                      src={file.preview}
                      onLoad={() => {
                        URL.revokeObjectURL(file.preview)
                      }}
                    />
                  </Thumb>
                ) : (
                  <div className='flex flex-1 items-center justify-center'>
                    <File />
                  </div>
                )}
                <p>{file.name}</p>
              </div>
            )
          })}
        </div>
      </div>
      {render({ handleSaveFile, pending })}
    </>
  )
}
