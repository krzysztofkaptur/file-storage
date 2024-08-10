'use client'

import { useDropzone } from '@/lib/fileUploader'
import { File } from '@/lib/icons'
import { bytesToSize } from '@/lib/utils'
import Image from 'next/image'
import { useState, useTransition } from 'react'

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
      // filter files that already exists
      const result = acceptedFiles.filter((aF) =>
        files.every((f) => f.name !== aF.name)
      )

      const newFiles = result.map((file) => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      })

      setFiles([...files, ...newFiles])
    },
  })

  const handleSaveFile = async () => {
    await files.map((file) => {
      const form = new FormData()
      form.append('file', file)

      // todo: wait for every file to upload before hiding the drawer
      startTransition(() => saveFile(form).then(() => onFinish()))
    })
  }

  const handelRemoveFile = (fname: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fname))
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
                className='flex flex-col justify-between flex-1 items-center relative'
              >
                <Thumb
                  key={file.name}
                  name={file.name}
                  className='flex flex-1 items-center justify-center'
                  deleteFile={handelRemoveFile}
                >
                  {file.type.includes('image') ? (
                    <>
                      <Image
                        alt={file.name}
                        src={file.preview}
                        onLoad={() => {
                          URL.revokeObjectURL(file.preview)
                        }}
                        width={100}
                        height={100}
                      />
                    </>
                  ) : (
                    <div className='flex flex-1 items-center justify-center'>
                      <File />
                    </div>
                  )}
                </Thumb>
              </div>
            )
          })}
        </div>
      </div>
      {render({ handleSaveFile, pending })}
    </>
  )
}
