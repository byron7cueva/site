import { css } from 'styled-components'

import { font, size } from '../../config/siteConstants'

export const defaults = css`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${font.content};
    font-size: ${size.text.content};
  }
`