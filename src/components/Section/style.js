import styled from 'styled-components'

import { color } from '../../config/constants'
import { padding } from '../../config/siteConstants'

export const SectionContent = styled.section`
  overflow: hidden;
  padding: 0 ${padding.block} 2em;
  background-color: rgba(${color.rgb.gray}, 0.45);
`