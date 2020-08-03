import React, { useRef } from 'react'
import { useButton } from '@react-aria/button'

export function Button({ ...props }) {
  let ref = useRef()
  let { buttonProps } = useButton(props, ref)
  let { children } = props

  console.log(buttonProps)

  return <button className="bg-calico-orange-300" {...props} {...buttonProps} />
}
