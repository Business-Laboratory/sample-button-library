import React from 'react'
import { Main, Button } from '..'
import useNumberOfCols from '../useNumberOfCols'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

export default { title: 'My Button', decorators: [withKnobs] }

export const NormalButton = () => {
  const { ref, nCols } = useNumberOfCols()

  return (
    <Main ref={ref}>
      <Button className={`${getColRange(nCols)} h-12`} color="copper">
        Button
      </Button>
    </Main>
  )
}

export const ButtonWithKnobs = () => {
  const { ref, nCols } = useNumberOfCols()

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

  return (
    <Main ref={ref}>
      <Button
        className={`${getColRange(nCols)} h-12`}
        color={select(label, options, defaultValue)}
        disabled={boolean('Disabled', false)}
      >
        Button
      </Button>
    </Main>
  )
}

const getColRange = nCols => {
  switch (nCols) {
    case 4: {
      return 'col-start-2 col-end-4'
    }
    case 8: {
      return 'col-start-4 col-end-6'
    }
    case 12: {
      return 'col-start-6 col-end-8'
    }
    default: {
      throw new Error(`invalid number of cols: ${nCols}`)
    }
  }
}
