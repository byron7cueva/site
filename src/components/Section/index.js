import React from 'react'

import { SectionHeader } from '../../components/SectionHeader'
import { SectionContent } from './style'

export const Section = ({title, className, children}) => (
  <SectionContent className={className}>
    <SectionHeader title={title} />
    {children}
  </SectionContent>
)