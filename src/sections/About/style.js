import styled from 'styled-components'

import { margin } from '../../config/siteConstants'
import { devices } from '../../config/constants'

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  width: 130%;

  p {
    width: 60%;
  }

  .about-content__photo {
    width: 100%;
  }

  @media ${devices.phablet} {
    flex-direction: column-reverse;
    width: 100%;

    p {
      margin-top: ${margin.block};
      width: 100%;
    }

    .about-content__photo {
      width: 50%;
    }
  }

  @media ${devices.laptop} {
    flex-direction: row-reverse;
    padding-left: 10%;
    padding-right: 10%;

    p {
      width: 60%;
      padding-left: 15%;
    }

    .about-content__photo {
      width: 40%;
    }
  }

  @media ${devices.desktop} {
    padding-left: 15%;
    padding-right: 15%;
  }
`