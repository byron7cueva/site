import styled, {css} from 'styled-components'

import { color as colorSite } from '../../config/siteConstants'

const timeLineStyle = css`
  .timeline {
    &__scroll {
      margin-top: 0.5em;
      border-left: 1px solid ${colorSite.alternative};
      height: 10em;

      &__padding-top {
        height: 15px;
      }
    }
  }
`

const scollerStyle = css`
  .scroller {
    &__handle {
      border-radius: 0.8em;
      width: 0.35em;
      background-color: ${colorSite.primary};
      height: 100%;
      float: left;
    }

    &__content {
      padding-left: 1em;
      line-height: 1.5em;
    }
  }
`

export const TimeLineContent = styled.div.attrs(() => ({
  className: 'timeline'
}))`
    margin-left: 35%;
    position: sticky;
    top: 9.5em;
    visibility: ${props => props.isShow ? 'visible' : 'hidden'};
    ${timeLineStyle}
`

export const Scroller = styled.div.attrs(() => ({
  className: 'scroller'
}))`
  display: flex;
  align-items: center;
  height: 2em;
  margin-left: -0.19em;
  ${scollerStyle}
`