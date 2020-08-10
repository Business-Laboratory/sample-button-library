import React, { forwardRef } from 'react'
import classNames from 'classnames'

// this is the variant approach to text
function Text({ as, variant, children }, ref) {
  const Component = as ?? getHTMLElement(variant)

  var className
  switch (variant) {
    case 'h1':
      className = 'font-display font-bold text-6xl'
      break
    case 'h2':
      className = 'font-display font-semibold text-5xl'
      break
    case 'h3':
      className = 'font-display font-medium text-4xl'
      break
    case 'h4':
      className = 'font-display font-normal text-3xl'
      break
    case 'h5':
      className = 'font-display font-light text-2xl'
      break
    case 'h6':
      className = 'font-display font-thin text-xl'
      break
    case 'bodyLarge':
      className = 'font-body font-medium text-lg'
      break
    case 'bodyBase':
      className = 'font-body font-normal text-base'
      break
    case 'bodySmall':
      className = 'font-body font-light text-sm'
      break
    case 'label':
      className = 'font-body font-normal text-xs'
      break
    default:
      className = ''
  }

  return (
    <Component
      ref={ref}
      className={classNames('text-gray-pink-400', className)}
    >
      {children}
    </Component>
  )
}

const getHTMLElement = variant => {
  if (
    variant === 'h1' ||
    variant === 'h2' ||
    variant === 'h3' ||
    variant === 'h4' ||
    variant === 'h5' ||
    variant === 'h6'
  ) {
    return variant
  } else return 'span'
}

const _Text = forwardRef(Text)
export { _Text as Text }
