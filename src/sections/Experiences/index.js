import React, { useRef } from 'react'
import Media from 'react-media'

import { Experience } from '../../components/Experience'
import { ExperiencesSection } from './style'
import { SectionHeader } from '../../components/Section'
import { TimeLine } from '../../components/TimeLine'
import { StickySection, StickyBoundary, Sticky } from '../../components/Sticky'
import { useObserveTopSentinel } from '../../hooks/useObserveTopSentinel'
import { desktopFirst, devices } from '../../config/constants'
import data from '../../../content/experience.yml'

export const Experiences = () => {
  const topSentinelRef = useRef(null)
  const stickyRef = useRef(null)

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
      <div className='experiences__header sticky' ref={stickyRef}>
        <div className='sticky__background' />
        <SectionHeader title={data.title} className='experiences__header__title'/>
      </div>
      <StickySection>
      {
        data.content.map(item => (
          <StickyBoundary key={item.key}>
            <Sticky title={`${item.initDate} - ${item.finishDate}`} />
            <Experience {...item} />
          </StickyBoundary>
        ))
      }
      </StickySection>
    </ExperiencesSection>
  )
}