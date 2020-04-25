import styled from 'styled-components'

import { devices } from '../../config/constants'

export const StickyContent = styled.article.attrs(props => ({
  width: props.width || 400
}))`
  width: ${props => props.width}px;
  margin: 0 3.5em;
  display: flex;
  align-items: center;

  .sticky-item__content {
    width: 100%;
    height: 60vh;
  }

  @media ${devices.phablet} {
    .sticky-item__content {
      height: 50vh;
    }
  }
`