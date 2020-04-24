import styled from 'styled-components'

import { color } from '../../config/constants'
import { color as colorSite, zIndex } from '../../config/siteConstants'

export const MenuContainer = styled.nav`
  z-index: ${zIndex.menu};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  right: -100%;
  opacity: 0;
  transition-property: right, opacity;
  transition-duration: 0.5s, 0.6s;
  transition-timing-function: ease-out, ease-in;

  &.show {
    right: 0;
    opacity: 1;
  }

  .menu__mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: inherit;
    background: rgba(${color.rgb.alternative}, 0.80);
    backdrop-filter: saturate(180%) blur(20px);
  }

  .menu__content {
    position: relative;
    top: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    height: 75%;
    width: inherit;
    list-style: none;
    padding: 0 10% 0;

    a {
      text-decoration: none;
      color: ${colorSite.light};
      text-transform: uppercase;
      font-size: 1.1em;
    }
  }
`