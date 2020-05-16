import styled, { css } from 'styled-components'

import { color as colorSite } from '../../config/siteConstants'
import { devices } from '../../config/constants'

const styleClass = css`
  .opinion__message {
    min-height: 13em;
    margin-bottom: 2em;

    &__left-quote {
      transform: scale(-1);
    }
  }

  .opinion__writer {
    display: inline-flex;
    line-height: 1.3em;
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

  @media ${devices.laptop} {
    display: flex;
    flex-direction: row-reverse;
    padding: 0 5%;

    .opinion__writer {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1em;
      border: 1px solid ${colorSite.secondary};
      border-radius: 4px;
      width: 15em;
      margin-right: 2em;
      flex-grow: 0;
      flex-shrink: 0;

      figure {
        margin-bottom: 1em;
      }

      div {
        margin: 0;
        width: 100%;
      }
    }

    .opinion__message  {
      padding-left: 2em;
      border-left: 1px solid ${colorSite.gray};
      text-align: left;
      margin: 0;
    }
  }

  @media ${devices.desktop} {
    padding: 0 20%;
  }
`