import styled from 'styled-components'

import { color as colorSite, zIndex, padding } from '../../config/siteConstants'
import { color, devices } from '../../config/constants'

export const ExperiencesSection = styled.section`
  .experience-section__header {
    z-index: ${zIndex.headerSticky};
    position: sticky;
    top: 0;
    background-color: rgb(${color.rgb.alternative});
    padding: ${padding.block} 19%;
    text-align: right;
  }

  h2 {
    color: ${colorSite.secondary};
  }
`