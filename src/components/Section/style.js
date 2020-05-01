import styled from 'styled-components'

import { color, devices } from '../../config/constants'
import { color as colorSite, padding } from '../../config/siteConstants'

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

export const SectionContent = styled.section`
  overflow: hidden;
  padding: 2em ${padding.block};
  background-color: rgba(${color.rgb.gray}, 0.45);

  @media ${devices.phablet} {
    .section__content {
      padding: 0 10%;
    }
  }

  @media ${devices.tablet} {
    .section__content {
      padding: 0 15%;
    }
  }

  @media ${devices.laptop} {
    .section__content {
      padding: 0 10%;
    }
  }
`