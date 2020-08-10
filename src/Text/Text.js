import React, { forwardRef } from 'react'
import classNames from 'classnames'

// this component is not fully fleshed out, it's just here to add some typography
function Text({ className, as, children }, ref) {
  const Component = as ?? 'span'

  return (
    <Component
      ref={ref}
      className={classNames('font-display text-base', className)}
    >
      {children}
    </Component>
  )
}

const _Text = forwardRef(Text)
export { _Text as Text }
