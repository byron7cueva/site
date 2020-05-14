import styled from 'styled-components'

import { zIndex } from '../../config/siteConstants'
import { color, devices } from '../../config/constants'
import { saturationMask } from '../../styles/mixins/background'
import pathLogo from '../../assets/img/pathLogo.svg'
import logo from '../../assets/img/logo.svg'

export const LogoContainer = styled.div`
  z-index: ${zIndex.logo};
  position: fixed;
  top: 0;
  left: 0;
  width: 6em;
  height: 6em;

  @media ${devices.tablet} {
    height: 3em;
  }
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
  background-color: rgba(${color.rgb.alternative}, 0.65);
  ${saturationMask}

  @media ${devices.tablet} {
    display: none;
  }
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

  @media ${devices.tablet} {
    top: 0.25em;
    height: 2.5em;
  }
`