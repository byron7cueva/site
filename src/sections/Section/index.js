import React from 'react'

import { SectionContent } from './style'

export const Section = ({title, className, children, hasPadding = true }) => (
  <SectionContent className={className} hasPadding={hasPadding}>
    <h2>{title}</h2>
    {children}
  </SectionContent>
)