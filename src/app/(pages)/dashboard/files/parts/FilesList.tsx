'use client'

import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/ui'

import { FileListRow } from './FileListRow'
import type { FilesListProps } from './types'

export const FilesList = ({ images }: FilesListProps) => {
  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead>Size</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {images?.map((image) => <FileListRow image={image} key={image.id} />)}
        </TableBody>
      </Table>
    </section>
  )
}
