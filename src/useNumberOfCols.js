import useDimensions from 'react-use-dimensions'
import { theme } from '../tailwind.config'

// helper hook for getting the number of columns
// this is not meant to be used outside of stories
export default function useNumberOfCols() {
  const [ref, { width }] = useDimensions()

  const nCols =
    width >= getBreakpoint('lg') ? 12 : width >= getBreakpoint('md') ? 8 : 4

  return { ref, nCols }
}

function getBreakpoint(bp) {
  return parseFloat(theme.screens[bp])
}
