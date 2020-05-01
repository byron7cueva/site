import React from 'react'

import { Experience } from '../../components/Experience'
import { ExperiencesSection } from './style'
import { SectionHeader } from '../../components/Section'
import { color as colorSite} from '../../config/siteConstants'
import { ThemeProvider } from 'styled-components'
import { StickySection, StickyBoundary, Sticky } from '../../components/Sticky'
import data from '../../../content/experience.yml'

export const Experiences = () => {
  const themeHeader = {
    color: colorSite.secondary,
    backgroundColor: colorSite.alternative
  }

  const onChangeHandler = (stuck, target) => {
    if (stuck) {
      target.classList.add('sticky--stuck')
    } else {
      target.classList.remove('sticky--stuck')
    }
  }

  return (
    <ExperiencesSection id='experiences'>
      <ThemeProvider theme={themeHeader}>
        <SectionHeader title={data.title} className='experience-section__header' />
      </ThemeProvider>
      <StickySection>
      {
        data.content.map(item => (
          <StickyBoundary key={item.key} onChange={onChangeHandler}>
            <Sticky className='sticky'>
              <div className='sticky__background' />
              <p className='sticky__title'>{`${item.initDate} - ${item.finishDate}`}</p>
            </Sticky>
            <Experience {...item} />
          </StickyBoundary>
        ))
      }
      </StickySection>
    </ExperiencesSection>
  )
}