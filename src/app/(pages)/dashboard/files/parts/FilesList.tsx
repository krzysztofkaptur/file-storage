'use client'

import {
  Card,
  CardTitle,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui'

import { FileListRow } from './FileListRow'
import type { FilesListProps } from './types'

export const FilesList = ({ files }: FilesListProps) => {
  return (
    <section>
      <Table>
        <TableHeader className='hidden lg:table-header-group'>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=''>
          {files?.map((file) => <FileListRow file={file} key={file.id} />)}
        </TableBody>
      </Table>
    </section>
  )
}
