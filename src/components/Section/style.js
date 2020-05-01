import styled from 'styled-components'

import { color, devices } from '../../config/constants'
import { color as colorSite, padding } from '../../config/siteConstants'

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

  @media ${devices.laptop} {
    padding: 0 25% 2em;
  }
`

export const Header = styled.div`
  padding: ${padding.block} 19%;
  width: 100%;
  text-align: right;
  background-color: ${props => props.theme.backgroundColor};

  h2 {
    color: ${props => props.theme.color};
  }
`

Header.defaultProps = {
  theme: {
    color: colorSite.primary,
    backgroundColor: 'transparent'
  }
}