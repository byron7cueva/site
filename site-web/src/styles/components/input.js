import { css } from 'styled-components'

import { color, font, size } from '../../config/siteConstants'

export const inputStyle = css`
  input, textarea {
    width: 100%;
    padding: 1em;
    margin-bottom: 0.5em;
    border-radius: 5px;
    border: 1px solid ${color.gray};
    font-family: ${font.content};
    font-size: ${size.text.content};
    outline: none;
    &:hover {
      border-color: ${color.grayDark};
    }
    &.error {
      border-left: 3px solid #ff5555;
    }
  }
  textarea {
    height: 10em;
  }
`