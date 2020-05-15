import styled, { keyframes } from 'styled-components'

import { color as colorSite } from '../../config/siteConstants'

const moveWheel = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-1rem);
  }
  100% {
    opacity: 1;
    transform: translateY(1rem);
  }
`

const arrowDown = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: .25;
  }
  50% {
    opacity: .5;
  }
  75% {
    opacity: .75;
  }
  100% {
    opacity: 1;
  }
`


export const ButtonContainer = styled.a`
  font-size: 0.7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 5em;
  left: 50%;
  transform: translateX(-50%);
  color: ${colorSite.light};

  & .scroll-down-button {
    &__mouse {
      display: flex;
      width: 2.5em;
      height: 5em;
      border: 2px solid;
      border-radius: 2em;
      margin-bottom: .5em;
    }

    &__mouse span {
      width: 1em;
      height: 1em;
      background-color: ${colorSite.light};
      display: block;
      border-radius: 50%;
      margin: auto;
      animation: ${moveWheel} 1s linear infinite;
    }

    &__arrow span {
      display: block;
      width: 1em;
      height: 1em;
      border: 2px solid transparent;
      border-right-color: ${colorSite.light};
      border-bottom-color: ${colorSite.light};
      transform: rotate(45deg);
      animation: ${arrowDown} .5s alternate infinite;
    }
  }
`