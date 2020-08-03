import React, { useRef } from 'react'
import classNames from 'classnames'
import { useButton } from '@react-aria/button'
import { useHover } from '@react-aria/interactions'
import { useFocusRing } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'

export function Button(props) {
  const { className, color = 'copper', children } = props
  const ref = useRef()
  const { buttonProps, isPressed } = useButton(props, ref)
  const { hoverProps, isHovered } = useHover({ onHoverStart: () => {} })
  let { isFocusVisible, focusProps } = useFocusRing()

  const borderWidth = isFocusVisible ? 'border-4' : 'border-2'
  const colors = getColors(color)
  const background = getBackground(colors, isPressed, isHovered)

  console.log({ background, borderWidth, border: colors.border })

  return (
    <button
      className={classNames(
        className,
        'uppercase focus:outline-none',
        `${background} ${borderWidth} ${colors.border}`
      )}
      {...mergeProps(buttonProps, hoverProps, focusProps)}
    >
      {children}
    </button>
  )
}

// takes in a colorPrefix and returns a className with all of the styles applied
// we have to list out all of the colors to avoid them being purged
function getColors(colorPrefix) {
  switch (colorPrefix) {
    case 'matisse-red': {
      return {
        100: 'bg-matisse-red-100',
        200: 'bg-matisse-red-200',
        300: 'bg-matisse-red-300',
        border: 'border-matisse-red-400',
      }
    }
    case 'copper': {
      return {
        100: 'bg-copper-100',
        200: 'bg-copper-200',
        300: 'bg-copper-300',
        border: 'border-copper-400',
      }
    }
    case 'scout-green': {
      return {
        100: 'bg-scout-green-100',
        200: 'bg-scout-green-200',
        300: 'bg-scout-green-300',
        border: 'border-scout-green-400',
      }
    }
    case 'lichen-green': {
      return {
        100: 'bg-lichen-green-100',
        200: 'bg-lichen-green-200',
        300: 'bg-lichen-green-300',
        border: 'border-lichen-green-400',
      }
    }
    case 'matisse-blue': {
      return {
        100: 'bg-matisse-blue-100',
        200: 'bg-matisse-blue-200',
        300: 'bg-matisse-blue-300',
        border: 'border-matisse-blue-400',
      }
    }
    case 'calico-orange': {
      return {
        100: 'bg-calico-orange-100',
        200: 'bg-calico-orange-200',
        300: 'bg-calico-orange-300',
        border: 'border-calico-orange-400',
      }
    }
    default: {
      throw new Error(
        `color group ${colorPrefix} not found in tailwind.config.js`
      )
    }
  }
}

function getBackground(backgroundColors, isPressed, isHovered) {
  return isPressed
    ? backgroundColors[300]
    : isHovered
    ? backgroundColors[200]
    : backgroundColors[100]
}

/*
Rules
- Columns and thus Buttons are static between breakpoints
- Text should be X characters and then wrap (X dependent on breakpoint)
- Stroke is #4 of hue
- Fill is #1 of hue
- Font all caps
- Font black or one of darkest gray
- Disabled is an overlay of one of the #2 grays at 50% opacity

Code
- Fill
- Hover fill is #2 of hue
- Active fill is #3 of hue
- Focus increases stroke to 4px
- Stroke color
- Stroke width
- Disabled overlay
- Width
- Height
- Font family
- Font size (dependent on breakpoint)
- Font weight (dependent on breakpoint)
- Font color
- Touch area width
- Touch area height

Props
- Color hue
- Text
- onClick action
*/
