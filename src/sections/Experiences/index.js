import React, { useRef, useState } from 'react'

import { StickySection, StickyItem, Sticky, StickyBoundary } from '../../components/Sticky'
import { Experience } from '../../components/Experience'
import { SectionHeader } from '../../components/Section'
import { ExperiencesContainer } from './style'
import data from '../../../content/experience.yml'

export const Experiences = () => {
  const stickyRef = useRef(null)
  const [stuck, setStuck] = useState(false)

  const handleChangeSticky = (stuck) => {
    setStuck(stuck)
  }

  return (
    <ExperiencesContainer id='experiences'>
      <StickyBoundary
        stickyRef={stickyRef}
        onChangeSticky={handleChangeSticky}
      >
        <Sticky
          ref={stickyRef}
          top='0'
          stuck={stuck}
        >
          <SectionHeader title={data.title} className='experiences__header' />
        </Sticky>
        <StickySection isScolling={stuck}>
          {
            data.content.map(item => (
              <StickyItem
                key={item.key}
                title={item.organization}
                period={`${item.initDate} - ${item.finishDate}`}
              >
                <Experience {...item} />
              </StickyItem>
            ))
          }
        </StickySection>
      </StickyBoundary>
    </ExperiencesContainer>
  )
}