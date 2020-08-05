import React, { forwardRef } from 'react'

// this component is definitely too opinionated, we'll have to figure it
// if we want to continue down the path of using a function like this, and
// if so how to make it customizable
const Main = function Main({ children }, ref) {
  return (
    <main ref={ref} className="w-screen h-screen">
      <div
        className="h-full w-sm md:w-md lg:w-lg
          grid grid-cols-4 cols md:grid-cols-8 lg:grid-cols-12
          m-auto gap-4 md:gap-6 lg:gap-6
          p-5 md:p-5 lg:p-3
        "
      >
        {children}
      </div>
    </main>
  )
}

const _Main = forwardRef(Main)
export { _Main as Main }
