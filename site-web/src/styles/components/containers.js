import { css } from 'styled-components'

import { color as siteColor } from '../../config/siteConstants'

export const containers = css`
  figure {
    margin: 0;
  }

  .fill-viewport {
    width: 100%;
    height: 100vh;
  }

  .alert-error {
    color: ${siteColor.error};
    text-align: left;
    margin-bottom: 1em;
  }
`