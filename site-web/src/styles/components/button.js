import { css } from 'styled-components'

import { color } from '../../config/siteConstants'

export const buttonStyle = css`
  button, a {
    -webkit-tap-highlight-color: transparent
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    padding: 0;
  }

  .btn {
    display: inline-block;
    padding: 1em 2em;
    transition-property: background;
    transition-duration: 0.2;
    transition-timing-function: ease-out;
    color: ${color.light};
    border-radius: 24px;
    background-color: ${color.primary};
  }
`