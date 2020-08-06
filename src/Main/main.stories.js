import React from 'react'
import { Main } from '..'
import useNumberOfCols from '../useNumberOfCols'

export default { title: 'Main' }

export const HighlightColumns = () => {
  const { ref, nCols } = useNumberOfCols()

  return (
    <Main ref={ref}>
      {Array.from({ length: nCols }).map((_, idx) => (
        <div key={idx} className="bg-gray-200 h-screen" />
      ))}
    </Main>
  )
}
