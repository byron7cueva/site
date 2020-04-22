import React from 'react'

import { Section } from '../Section'
import { BarChart } from '../../components/BarChart'
import { BumpChart } from '../../components/BumpChart'
import { VerticalBarChart } from '../../components/VerticalBarChart'
import data from '../../../content/skills'

export const Skills = () => (
  <Section title={data.title}>
    <BarChart title={data.content.languages.title} data={data.content.languages.data} height={180} />
    <BumpChart title={data.content.frontend.title} data={data.content.frontend.data} height={350} width={700} />
    <VerticalBarChart title={data.content.dataTechnology.title} data={data.content.dataTechnology.data} height={250} width={400} />
  </Section>
)