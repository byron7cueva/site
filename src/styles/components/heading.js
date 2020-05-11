import { css }  from 'styled-components'

import { devices } from '../../config/constants'
import { color, font, size, margin } from '../../config/siteConstants'

export const heading = css`
  h1, h3, h4, h5, h6 {
    margin: 0;
    margin-bottom: ${margin.text};
    font-family: ${font.title};
  }

  h1 {
    font-size: ${size.text.h1};
  }

  h2 {
    position: relative;
    padding-left: 1.2em;
    display: inline-block;
    font-size: ${size.text.h2};
    font-weight: lighter;
    margin: 0;
    ::before {
      position: absolute;
      left: 0;
      top: 50%;
      width: 0.8em;
      content: '';
      border-bottom: solid 0.07em;
    }
  }

  h3 {
    font-size: ${size.text.h3};
  }

  h5 {
    color: ${color.secondary};
    font-size: 1.7em;
    font-weight: normal;
  }

  h6 {
    color: ${color.light};
    font-size: 1.5em;
    font-weight: normal;
  }

  @media ${devices.laptop} {
    h5 {
      font-size: 2em;
    }
  }
`