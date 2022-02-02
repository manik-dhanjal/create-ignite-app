import * as React from 'react'

export default function createRenderBlock(variants) {
  function renderBlock({ name, props = {} }, idx) {
    const { children: childrenProp, ...other } = props

    const Component = variants[name]
    const children = childrenProp ? childrenProp.map(renderBlock) : undefined

    if (!Component) {
      console.error(`CIA: 🕵️‍♂️ Block not found: %c${name}`, 'font-weight: bold')

      return null
    }

    return (
      <Component key={idx} renderIndex={idx} {...other}>
        {children}
      </Component>
    )
  }

  return renderBlock
}
