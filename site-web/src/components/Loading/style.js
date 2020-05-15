import styled, {keyframes} from 'styled-components'

import { color as colorSite, zIndex } from '../../config/siteConstants'

const loadingKeyFrame = keyframes`
  from {
    background-position: -100%;
  }

  to {
    background-position: 100%;
  }
`

export const LoadingContainer = styled.div`
  z-index: ${zIndex.headerSticky};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colorSite.light};

  & .loading__content {
    width: 50%;
    &__bar {
      height: 1em;
      border-radius: 24px;
      transform-origin: 0;
      background-image: repeating-linear-gradient(90deg,${colorSite.secondary},${colorSite.primary},${colorSite.secondary});
      background-size: 200%;
      animation: ${loadingKeyFrame} 4s linear infinite;
    }
    &__message:after {
      content: '...';
    }
  }
`