import styled from 'styled-components'

import { devices } from '../../config/constants'
import { color as colorSite } from '../../config/siteConstants'

export const ExperiencesContainer = styled.section`
  .experiences__header {
    h2 {
      color: ${colorSite.secondary};
    }
  }

  @media ${devices.laptop} {
    background-color: ${colorSite.light};

    .experiences__header {
      h2 {
        color: ${colorSite.primary};
      }
    }

    .sticky--stuck {
      h2 {
        color: ${colorSite.secondary};
      }
    }
  }
`