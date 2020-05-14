import { css } from 'styled-components'

import { color, margin } from '../../config/siteConstants'

export const opinionsStyle = css`
  .opinions {
    text-align: center;
    &__navigation {
      display: inline-block;
      background-color: ${color.primary};
      padding: 0.5em;
      border-radius: 25px;
      margin: ${margin.block} 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
`