import styled from 'styled-components'

import { color, padding } from '../../config/siteConstants'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  color: ${color.light};
  padding: ${padding.block};
  background-color: rgba(40,42,54, 0.8);

  .footer__networking {
    svg {
      margin-left: ${padding.content};
    }
  }
`