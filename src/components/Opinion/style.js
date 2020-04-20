import styled, { css } from 'styled-components'

const styleClass = css`
  .opinion__message {
    min-height: 13em;
    margin-bottom: 1em;

    &__left-quote {
      transform: scale(-1);
    }
  }

  .opinion__writer {
    display: inline-flex;
    width: 90%;
    margin-top: 1em;
    figure {
      width: 5em;
      flex-grow: 0;
      flex-shrink: 0;
    }
    figure img {
      border-radius: 50%;
    }
    div {
      text-align: left;
      margin-left: 1em;
      font-size: 0.9em;
    }
  }
`

export const OpinionContainer = styled.article`
  text-align: center;
  ${styleClass}
`