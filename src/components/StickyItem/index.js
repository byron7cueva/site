import React from 'react'

import { StickyContent } from './style'

export const StickyItem = ({ children, width, title }) => (
  <StickyContent width={width} data-title={title}>
    <div className='sticky-item__content'>
      {children}
    </div>
  </StickyContent>
)