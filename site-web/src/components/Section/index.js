import React from 'react'

import { SectionContent, Header } from './style'

export const SectionHeader = ({ title, className, isAnimate }) => (
  <Header className={className}>
      <h2 data-aos={isAnimate ? 'fade-left' : ''} >{title}</h2>
  </Header>
)

export const Section = ({title, className, children, id}) => (
  <SectionContent className={className} id={id}>
    <SectionHeader title={title} isAnimate={true} />
    <div className='section__content'>
      {children}
    </div>
  </SectionContent>
)