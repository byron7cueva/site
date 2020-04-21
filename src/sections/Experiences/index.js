import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Section } from '../Section'
import { Experience } from '../../components/Experience'
import { color } from '../../config/siteConstants'
import data from '../../../content/experience.yml'

export const Experiences = () => {
  const theme = {
    backgroundColor: color.alternative,
    color: color.light,
    titleColor: color.secondary
  }

  return (
    <ThemeProvider theme={theme}>
      <Section title={data.title} hasPadding={false}>
        {
          data.content.map(item => (
            <Experience {...item} />
          ))
        }
      </Section>
    </ThemeProvider>
  )
}