import React from 'react'

import { SectionHeader } from '../SectionHeader'
import { SectionContent } from './style'

export const Section = ({title, className, children, id}) => (
  <SectionContent className={className} id={id}>
    <SectionHeader title={title} />
    {children}
  </SectionContent>
)