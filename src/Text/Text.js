import React, { forwardRef } from 'react'
import classNames from 'classnames'

// this is the variant approach to text
function Text({ as, variant, children }, ref) {
  const Component = as ?? 'span'

  const className = getClassNames(variant)

  return (
    <Component
      ref={ref}
      className={classNames('text-gray-pink-400', className)}
    >
      {children}
    </Component>
  )
}

const getClassNames = variant => {
  switch (variant) {
    case 'header1':
      return 'sm:font-display sm:font-bold sm:text-6xl'
    case 'header2':
      return 'sm:font-display sm:font-semibold sm:text-5xl'
    case 'header3':
      return 'sm:font-display sm:font-medium sm:text-4xl'
    case 'header4':
      return 'sm:font-display sm:font-normal sm:text-3xl'
    case 'header5':
      return 'sm:font-display sm:font-light sm:text-2xl'
    case 'header6':
      return 'sm:font-display sm:font-thin sm:text-xl'
    case 'bodyLarge':
      return ` 
      md:font-body md:font-medium md:text-lg 
      sm:font-body sm:font-normal sm:text-base 
      `
    case 'bodyBase':
      return 'sm:font-body sm:font-normal sm:text-base'
    case 'bodySmall':
      return 'sm:font-body sm:font-light sm:text-sm'
    case 'label':
      return 'sm:font-body sm:font-normal sm:text-xs'
    default:
      return ''
  }
}

const _Text = forwardRef(Text)
export { _Text as Text }
