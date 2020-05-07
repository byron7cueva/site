import styled from 'styled-components'

import { devices } from '../../config/constants'
import { color as colorSite, padding } from '../../config/siteConstants'

export const Header = styled.div`
  padding: ${padding.content} 19%;
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
  background-color: ${colorSite.light};

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