import React, { forwardRef } from 'react'

// this component is definitely too opinionated, we'll have to figure it
// if we want to continue down the path of using a function like this, and
// if so how to make it customizable
const Main = function Main({ children }, ref) {
  return (
    <main ref={ref} className="w-screen h-screen">
      <div
        className="w-sm md:w-md lg:w-lg
          grid grid-cols-4 cols md:grid-cols-8 lg:grid-cols-12
          mx-auto gap-4 md:gap-6 lg:gap-6
          px-5 md:px-5 lg:px-3
        "
      >
        {children}
      </div>
    </main>
  )
}

const _Main = forwardRef(Main)
export { _Main as Main }
