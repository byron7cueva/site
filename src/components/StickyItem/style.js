import styled from 'styled-components'

import { devices } from '../../config/constants'

export const StickyContent = styled.article.attrs(props => ({
  width: props.width || 400
}))`
  width: ${props => props.width}vw;
  margin: 0 18vw;
  display: flex;
  align-items: center;
  height: 100%;

  .sticky-item__content {
    width: 100%;
    height: 60vh;
  }

  @media ${devices.phablet} {
    .sticky-item__content {
      height: 50vh;
    }
  }

  @media ${devices.tablet} {
    margin: 0 16vw;
  }
`