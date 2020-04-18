import styled from 'styled-components'

import { zIndex } from '../../config/siteConstants'
import { color } from '../../config/constants'

export const ButtonContainer = styled.button`
  z-index: ${zIndex.logo};
  position: fixed;
  top: 0.5em;
  right: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5em;
  height: 3.5em;
  border: none;
  border-radius: 50%;
  outline: none;
  background-color: rgba(${color.rgb.alternative} , 0.9);
`