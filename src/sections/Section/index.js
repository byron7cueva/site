import React from 'react'

import { SectionContent } from './style'

export const Section = ({title, className, children}) => (
  <SectionContent className={className}>
    <h2>{title}</h2>
    {children}
  </SectionContent>
)