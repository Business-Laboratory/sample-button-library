import useDimensions from 'react-use-dimensions'

// trying to get from tailwind.config.js caused an error
const screenSizes = {
  sm: 360,
  md: 720,
  lg: 1440,
}

// helper hook for getting the number of columns
// this is not meant to be used outside of stories
export default function useNumberOfCols() {
  const [ref, { width }] = useDimensions()

  const nCols =
    width >= getBreakpoint('lg') ? 12 : width >= getBreakpoint('md') ? 8 : 4

  return { ref, nCols }
}

function getBreakpoint(bp) {
  return screenSizes[bp]
}
