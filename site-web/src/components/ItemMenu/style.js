import styled from 'styled-components'

import { devices } from '../../config/constants'
import { color as colorSite } from '../../config/siteConstants'

export const ItemMenuContainer = styled.li`
  button {
    color: ${colorSite.light};
    text-transform: uppercase;
    font-size: 1.1em;
    border-bottom: 1px solid transparent;

    :hover {
      color: ${colorSite.secondary};
      border-bottom: 1px solid;
      font-weight: normal;
    }
  }

  &.active {
    button {
      border-bottom: 1px solid;
    }
  }

  @media ${devices.tablet} {
    button {
      text-transform: initial;
      font-weight: lighter;
      font-size: 0.9em;
    }
  }
`