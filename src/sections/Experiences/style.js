import styled from 'styled-components'

import { color, devices } from '../../config/constants'
import { color as colorSite } from '../../config/siteConstants'

export const ExperiencesContainer = styled.section`
  .experiences__sticky {
    top: 0;
  }

  .experiences__header {
    h2 {
      color: ${colorSite.secondary};
    }
  }

  @media ${devices.tablet} {
    .experiences__sticky {
      top: 3em;
    } 
  }

  @media ${devices.laptop} {
    background-color: ${colorSite.light};

    .experiences__header {
      h2 {
        color: ${colorSite.primary};
      }
    }

    & .sticky--stuck {
      .sticky__background {
        background-color: rgba(${color.rgb.light}, 0.65);
      }
    }
  }
`