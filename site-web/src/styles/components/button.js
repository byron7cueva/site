import { css } from 'styled-components'

import { color, font } from '../../config/siteConstants'
import { color as colors } from '../../config/constants'

export const buttonStyle = css`
  button, a {
    -webkit-tap-highlight-color: transparent;
    font-family: ${font.content};
  }

  a {
    color: ${color.primary};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    :hover {
      border-bottom: 1px solid ${color.primary};
    }
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
    background-color: rgba(${colors.rgb.primary}, 0.9);

    :hover {
      background-color: rgba(${colors.rgb.primary}, 1);
    }
  }
`