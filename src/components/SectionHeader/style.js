import styled from 'styled-components'

import { color, padding } from '../../config/siteConstants'

export const Header = styled.div`
  padding: ${padding.block} 19%;
  width: 100%;
  text-align: right;

  h2 {
    color: ${props => props.theme.color};
  }
`

Header.defaultProps = {
  theme: {
    color: color.primary,
    backgroundColor: 'transparent'
  }
}