import { Select } from './'

import type { Meta, StoryObj } from '@storybook/react'

const selectOptions = [
  {
    label: 'Fruits',
    title: true,
  },
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Banana',
    value: 'banana',
  },
  {
    label: 'Blueberry',
    value: 'blueberry',
  },
]

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'sample',
    options: selectOptions,
  },
}

export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: 'Some label',
  },
}

export const WithPlaceholder: Story = {
  args: {
    ...Default.args,
    placeholder: 'Some placeholder',
  },
}

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
    label: 'Label',
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    label: 'Label',
  },
}
