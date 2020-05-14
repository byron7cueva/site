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
  padding: 5em ${padding.block} 2em;

  .section__content {
    margin-top: 2.5em;
  }

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