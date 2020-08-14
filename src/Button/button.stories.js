import React from 'react'
import { Button } from '..'

const options = [
  'copper',
  'matisse-red',
  'scout-green',
  'lichen-green',
  'matisse-blue',
  'calico-orange',
]

export const Default = args => (
  <Button className="min-w-40 md:min-w-40 lg:min-w-48" {...args}>
    Button
  </Button>
)

Default.args = {
  disabled: false,
  color: 'copper',
}

export default {
  title: 'Button',
  component: Default,
  decorators: [
    story => <div className="p-4 flex justify-center">{story()}</div>,
  ],
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: options,
      },
    },
  },
}
