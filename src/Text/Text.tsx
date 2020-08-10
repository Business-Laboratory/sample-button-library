import * as React from 'react'
import classNames from 'classnames'

// this component is not fully fleshed out, it's just here to add some typography
function Text(
  props: {
    className: string
    as?: any
    children: React.ReactNode
  },
  ref: React.RefObject<HTMLElement>
) {
  const { className, as, children } = props
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

const _Text = React.forwardRef(Text)
export { _Text as Text }
