import styled, {css} from 'styled-components'

const timeLineStyle = css`
  .timeline {
    &__scroll {
      margin-top: 0.5em;
      margin-left: 0.5em;
      border-left: 1px solid #036299;
      height: 300px;

      &__padding-top {
        height: 100px;
      }
    }
  }
`

const scollerStyle = css`
  .scroller {
    &__handle {
      border-radius: 0.8em;
      width: 0.35em;
      background-color: #036299;
      height: 100%;
      float: left;
    }

    &__content {
      padding-left: 1em;
    }
  }
`

export const TimeLineContent = styled.div.attrs(() => ({
  className: 'timeline'
}))`
    margin-left: 50%;
    position: sticky;
    top: 6.5em;
    z-index:5;
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