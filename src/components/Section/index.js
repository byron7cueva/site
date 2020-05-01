import React from 'react'

import { SectionContent, Header } from './style'

export const SectionHeader = ({ title, className }) => (
  <Header className={className}>
      <h2>{title}</h2>
  </Header>
)

export const Section = ({title, className, children, id}) => (
  <SectionContent className={className} id={id}>
    <SectionHeader title={title} />
    <div className='section__content'>
      {children}
    </div>
  </SectionContent>
)