import { File } from '@/lib/icons'
import { bytesToSize, formatDate } from '@/lib/utils'
import type { Meta, StoryObj } from '@storybook/react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const date = new Date()
date.setDate(date.getDate() + 1)
const tomorrow = formatDate(date.toString())
const today = formatDate(new Date().toString())

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Table>
        <TableHeader className='hidden lg:table-header-group'>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <File />
            </TableCell>
            <TableCell>item 1</TableCell>
            <TableCell>{today}</TableCell>
            <TableCell>{tomorrow}</TableCell>
            <TableCell>pdf</TableCell>
            <TableCell>{bytesToSize(41234123)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
  },
}

// todo: add story with drawer
