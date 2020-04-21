import styled from 'styled-components'

import { color } from '../../config/constants'
import { padding, color as colorSite } from '../../config/siteConstants'

export const SectionContent = styled.section`
  overflow: hidden;
  padding: ${({ hasPadding }) => (
    hasPadding ? `2em ${padding.block}` : 'none'
  )};
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};

  h2 {
    color: ${props => props.theme.titleColor};
  }
`

SectionContent.defaultProps = {
  theme: {
    backgroundColor: `rgba(${color.rgb.gray}, 0.45)`,
    color: colorSite.dark,
    titleColor: colorSite.primary
  }
}