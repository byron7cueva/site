import styled from 'styled-components'

import { zIndex } from '../../config/siteConstants'
import { color } from '../../config/constants'
import { saturationMask } from '../../styles/mixins/background'
import pathLogo from '../../../static/img/all/pathLogo.svg'
import logo from '../../../static/img/all/logo.svg'

export const LogoContainer = styled.div`
  z-index: ${zIndex.logo};
  position: fixed;
  top: 0;
  left: 0;
  width: 6em;
  height: 6em;
`

export const Path = styled.div.attrs(props => ({
  width: props.width || '100%',
  height: props.height || '100%'
}))`
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  mask-image: url(${pathLogo});
  mask-size: cover;
  background-color: rgba(${color.rgb.alternative}, 0.85);
  ${saturationMask}
`

export const Logo = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 3em;
  height: 3em;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`