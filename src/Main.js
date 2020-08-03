import React from 'react'
import useDimensions from 'react-use-dimensions'

export function Main({ children }) {
  const [ref, { width }] = useDimensions()

  const nCols = width > 1024 ? 12 : width > 768 ? 8 : 4

  return (
    <main
      ref={ref}
      className="w-screen h-screen
       grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
       p-5 md:p-5 lg:p-3
       gap-4 md:gap-6 lg:gap-6
      "
    >
      {children ??
        Array.from({ length: nCols }).map((_, idx) => (
          <div key={idx} className="bg-gray-200" />
        ))}
    </main>
  )
}
