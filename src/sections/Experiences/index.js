import React from 'react'

import { Experience } from '../../components/Experience'
import { ExperiencesSection } from './style'
import data from '../../../content/experience.yml'

export const Experiences = () => {

  return (
    <ExperiencesSection id='experiences'>
      <div className='experience-section__header'>
        <h2>{data.title}</h2>
      </div>
      {
        data.content.map(item => (
          <Experience {...item} />
        ))
      }
    </ExperiencesSection>
  )
}