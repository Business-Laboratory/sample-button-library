import React, { forwardRef } from 'react'

export const Main = forwardRef(function Main({ children }, ref) {
  return (
    <main
      ref={ref}
      className="w-screen h-screen
       grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
       p-5 md:p-5 lg:p-3
       gap-4 md:gap-6 lg:gap-6
      "
    >
      {children}
    </main>
  )
})
