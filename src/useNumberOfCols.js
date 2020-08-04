import useDimensions from 'react-use-dimensions'

// helper hook for getting the number of columns
// this is not meant to be used outside of stories
export default function useNumberOfCols() {
  const [ref, { width }] = useDimensions()

  const nCols = width > 1024 ? 12 : width > 768 ? 8 : 4

  return { ref, nCols }
}
