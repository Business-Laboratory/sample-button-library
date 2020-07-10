import * as React from 'react'

function MyComponent({ ...props }) {
  return <button {...props}>This is a button!!!</button>
}

export default MyComponent
