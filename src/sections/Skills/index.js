import React from 'react'

import { BarChart } from '../../components/BarChart'
import { BumpChart } from '../../components/BumpChart'
import { VerticalBarChart } from '../../components/VerticalBarChart'
import { StickyItem } from '../../components/StickyItem'
import { StickySection } from '../../components/StickySection'
import data from '../../../content/skills'

export const Skills = () => {
  return (
    <StickySection title={data.title} id='skills'>
      <StickyItem title={data.content.languages.title} width={400}>
        <BarChart data={data.content.languages.data} />
      </StickyItem>
      <StickyItem title={data.content.frontend.title} width={700}>
        <BumpChart data={data.content.frontend.data} />
      </StickyItem>
      <StickyItem title={data.content.dataTechnology.title} width={400}>
        <VerticalBarChart data={data.content.dataTechnology.data} />
      </StickyItem>
    </StickySection>
  )
}