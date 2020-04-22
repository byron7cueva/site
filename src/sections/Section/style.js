import styled from 'styled-components'

import { color } from '../../config/constants'
import { padding, color as colorSite } from '../../config/siteConstants'

export const SectionContent = styled.section`
  overflow: hidden;
  padding: 2em ${padding.block};
  background-color: rgba(${color.rgb.gray}, 0.45);

  h2 {
    color: ${colorSite.primary};
  }
`