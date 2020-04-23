import React from 'react'

import { StickyContent } from './style'

export const StickyItem = ({ children, width, height, title }) => (
  <StickyContent width={width} height={height} data-title={title}>
    <div className='sticky-item__content'>
      {children}
    </div>
  </StickyContent>
)