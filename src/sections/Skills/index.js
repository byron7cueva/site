import React from 'react'

import { BarChart } from '../../components/BarChart'
import { BumpChart } from '../../components/BumpChart'
import { VerticalBarChart } from '../../components/VerticalBarChart'
import { StickyItem } from '../../components/StickyItem'
import { StickySection } from '../../components/StickySection'
import data from '../../../content/skills'

export const Skills = () => {
  return (
    <StickySection title={data.title} >
      <StickyItem title={data.content.languages.title} height={180} width={400}>
        <BarChart data={data.content.languages.data} height={180} />
      </StickyItem>
      <StickyItem title={data.content.frontend.title} width={700} height={300}>
        <BumpChart data={data.content.frontend.data} height={300} />
      </StickyItem>
      <StickyItem title={data.content.dataTechnology.title} width={400} height={250}>
        <VerticalBarChart data={data.content.dataTechnology.data} height={250} />
      </StickyItem>
    </StickySection>
  )
}