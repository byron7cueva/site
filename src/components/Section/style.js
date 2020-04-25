import styled from 'styled-components'

import { color, devices } from '../../config/constants'
import { padding } from '../../config/siteConstants'

export const SectionContent = styled.section`
  overflow: hidden;
  padding: 0 ${padding.block} 2em;
  background-color: rgba(${color.rgb.gray}, 0.45);

  @media ${devices.phablet} {
    padding: 0 10% 2em;
  }

  @media ${devices.tablet} {
    padding: 0 20% 2em;
  }
`