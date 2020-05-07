import { css } from 'styled-components'

import { color } from '../../config/constants'
import { color as colorSite , font, size } from '../../config/siteConstants'

export const defaults = css`
  * {
    box-sizing: border-box;
  }

  html, body, p {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${font.content};
    font-size: ${size.text.content};
    color: ${colorSite.dark};
    background-color: ${colorSite.alternative};
  }
`