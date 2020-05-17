import styled from 'styled-components'

import { color, devices } from '../../config/constants'
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
    height: 75%;
    padding: 0 10% 0;
  }

  .menu__content__list {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    height: inherit;
    width: inherit;
    list-style: none;
    padding: 0;
    margin: 0;

    a, button {
      text-decoration: none;
      color: ${colorSite.light};
      text-transform: uppercase;
      font-size: 1.1em;
    }
  }

  @media ${devices.tablet} {
    right: 0;
    opacity: 1;
    height: 3em;

    .menu__content {
      padding-right: 1em;
      padding-left: 25%;
      top: 0;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .menu__content__list {
      flex-direction: row;
      justify-content: space-between;
      height: initial;

      a, button {
        text-transform: initial;
        font-weight: lighter;
        font-size: 0.9em;
      }
    }
  }

  @media ${devices.laptop} {
    .menu__content {
      padding-left: 45%;
    }
  }
`