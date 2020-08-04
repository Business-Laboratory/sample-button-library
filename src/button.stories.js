import React from 'react'
import { Main, Button } from './'
import useNumberOfCols from './useNumberOfCols'

export default { title: 'My Button' }

export const NormalButton = () => {
  const { ref, nCols } = useNumberOfCols()

  return (
    <Main ref={ref}>
      <Button
        className={`${getColRange(nCols)} h-12`}
        color="matisse-red"
        disabled={true}
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
