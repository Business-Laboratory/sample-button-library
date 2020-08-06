import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { string, elementType, oneOfType } from 'prop-types'

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

Text.propTypes = {
  className: string,
  as: oneOfType([string, elementType]),
}

const _Text = forwardRef(Text)
export { _Text as Text }
