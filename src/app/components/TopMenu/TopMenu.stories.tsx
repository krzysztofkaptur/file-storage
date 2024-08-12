import type { Meta, StoryObj } from '@storybook/react'

import { TopMenu } from './'

const meta = {
  title: 'Components/TopMenu',
  component: TopMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TopMenu>

export default meta
type Story = StoryObj<typeof meta>

const content = (
  <>
    <p>some content</p>
  </>
)

export const Default: Story = {
  args: {
    children: content,
  },
}
