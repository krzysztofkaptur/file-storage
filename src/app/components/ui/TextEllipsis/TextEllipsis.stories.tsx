import type { Meta, StoryObj } from '@storybook/react'

import { TextEllipsis } from '.'

const meta = {
  title: 'Components/TextEllipsis',
  component: TextEllipsis,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextEllipsis>

export default meta
type Story = StoryObj<typeof meta>

const Content = () => <p>item with a long name</p>

export const Default: Story = {
  render: () => (
    <div className='w-20'>
      <TextEllipsis>
        <Content />
      </TextEllipsis>
    </div>
  ),
}
