import styled from 'styled-components'

import { margin, padding } from '../../config/siteConstants'
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

    p {
      width: 50%;
      padding-left: ${padding.block};
    }

    .about-content__photo {
      width: 40%;
    }
  }
`