import React from 'react'

import { BarChart } from '../../components/BarChart'
import { BumpChart } from '../../components/BumpChart'
import { VerticalBarChart } from '../../components/VerticalBarChart'
import { HorizontalScrollSection, HorizontalScrollItem } from '../../components/HorizontalScroll'
import data from '../../../content/skills'

export const Skills = () => {
  return (
    <HorizontalScrollSection title={data.title} id='skills'>
      <HorizontalScrollItem title={data.content.languages.title} width={400}>
        <BarChart data={data.content.languages.data} />
      </HorizontalScrollItem>
      <HorizontalScrollItem title={data.content.frontend.title} width={700}>
        <BumpChart data={data.content.frontend.data} />
      </HorizontalScrollItem>
      <HorizontalScrollItem title={data.content.dataTechnology.title} width={500}>
        <VerticalBarChart data={data.content.dataTechnology.data} />
      </HorizontalScrollItem>
    </HorizontalScrollSection>
  )
}