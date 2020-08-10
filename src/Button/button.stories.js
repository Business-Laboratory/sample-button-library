import React from 'react'
import { Button } from '..'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  decorators: [
    withKnobs,
    story => <div className="p-4 flex justify-center">{story()}</div>,
  ],
}

const label = 'Colors'
const options = [
  'copper',
  'matisse-red',
  'scout-green',
  'lichen-green',
  'matisse-blue',
  'calico-orange',
]
const defaultValue = 'copper'

export const Default = () => {
  return (
    <Button
      className="min-w-40 md:min-w-40 lg:min-w-48"
      color={select(label, options, defaultValue)}
      disabled={boolean('Disabled', false)}
    >
      Button
    </Button>
  )
}
