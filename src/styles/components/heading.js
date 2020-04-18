import { css }  from 'styled-components'

import { color, font, size, margin } from '../../config/siteConstants'

export const heading = css`
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    margin-bottom: ${margin.text}
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

  h5 {
    color: ${color.secondary};
    font-size: 1.3em;
    font-weight: normal;
  }

  h6 {
    color: ${color.light};
    font-size: 1.5em;
    font-weight: normal;
  }
`