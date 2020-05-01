import React, { useRef } from 'react'

import { Experience } from '../../components/Experience'
import { ExperiencesSection } from './style'
import { SectionHeader } from '../../components/Section'
import { color as colorSite} from '../../config/siteConstants'
import { ThemeProvider } from 'styled-components'
import { StickySection, StickyBoundary, Sticky } from '../../components/Sticky'
import { useObserveTopSentinel } from '../../hooks/useObserveTopSentinel'
import data from '../../../content/experience.yml'

export const Experiences = () => {
  const topSentinelRef = useRef(null)
  const stickyRef = useRef(null)

  const themeHeader = {
    color: colorSite.secondary
  }

  const onChangeHandler = (stuck, target) => {
    if (stuck) {
      target.classList.add('sticky--stuck')
    } else {
      target.classList.remove('sticky--stuck')
    }
  }

  useObserveTopSentinel(topSentinelRef, stickyRef, { onChange: onChangeHandler})

  return (
    <ExperiencesSection id='experiences'>
      <div
        className='experiences__sentinel-top'
        ref={topSentinelRef}
      >
        sentinel top
      </div>
      <div className='experience-section__header sticky' ref={stickyRef}>
        <div className='sticky__background' />
        <ThemeProvider theme={themeHeader}>
          <SectionHeader title={data.title} />
        </ThemeProvider>
      </div>
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