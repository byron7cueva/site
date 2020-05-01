import { css } from 'styled-components'

import { color, margin } from '../../config/siteConstants'
import { devices } from '../../config/constants'

export const opinionsStyle = css`
  .opinions {
    text-align: center;
    &__navigation {
      display: inline-block;
      background-color: ${color.primary};
      border-radius: 25px;
      margin: ${margin.block} 0;
    }

    &__navigation button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.5em 1em;
    }
  }
`