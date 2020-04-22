import styled from 'styled-components'

import { color as colorSite, zIndex } from '../../config/siteConstants'
import { color } from '../../config/constants'

export const ExperiencesSection = styled.section`
  .experience-section__header {
    z-index: ${zIndex.headerSticky};
    position: sticky;
    top: 0;
    background-color: rgb(${color.rgb.alternative});
    padding: 2em 0;
    line-height: 0.5em;
  }

  h2 {
    color: ${colorSite.secondary};
  }
`