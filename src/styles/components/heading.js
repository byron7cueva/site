import { css }  from 'styled-components'

import { size, font } from '../../config/siteConstants'

export const heading = css`
  h1, h2, h3, h4 {
    margin: 0;
  }

  h1 {
    font-size: ${size.text.h1};
    font-family: ${font.title};
  }

  h2 {
    font-size: ${size.text.h2};
    font-family: ${font.title};
  }

  h3 {
    font-size: ${size.text.h3};
  }
`