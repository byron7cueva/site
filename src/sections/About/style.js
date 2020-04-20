import styled from 'styled-components'

import { padding } from '../../config/siteConstants'

export const AboutSection = styled.section`
  overflow: hidden;
  padding: 2em ${padding.block};
`

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
`