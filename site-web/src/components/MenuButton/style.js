import styled from 'styled-components'

import { zIndex } from '../../config/siteConstants'
import { color, devices } from '../../config/constants'

export const ButtonContainer = styled.button`
  z-index: ${zIndex.logo};
  position: fixed;
  top: 0.5em;
  right: 0.5em;
  width: 3.5em;
  height: 3.5em;
  border-radius: 50%;
  backdrop-filter: saturate(10%) blur(5px);
  background-color: rgba(${color.rgb.alternative} , 0.65);

  @media ${devices.laptop} {
    display: none;
  }
`