import React, { forwardRef } from 'react'
import classNames from 'classnames'

// this is the variant approach to text
function Text({ as, children, className }, ref) {
  const Component = as ?? 'span'

  return (
    <Component
      ref={ref}
      className={classNames('text-gray-pink-400', className)}
    >
      {children}
    </Component>
  )
}

const _Text = forwardRef(Text)
export { _Text as Text }
