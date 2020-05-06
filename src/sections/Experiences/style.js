import styled from 'styled-components'

import { color, zIndex} from '../../config/siteConstants'
import { color as colorConfig, devices } from '../../config/constants'
import { saturationMask } from '../../styles/mixins/background'
import { SentinelStickyStyle } from '../../styles/mixins/helpers'

export const ExperiencesSection = styled.section`
  position: relative;
  background-color: ${color.alternative};

  .experiences__sentinel-top {
    ${SentinelStickyStyle}
    height: 2em;
    top: -1em;
  }

  .experiences__header {
    z-index: ${zIndex.headerSticky};
    position: sticky;
    top: 0;

    &__title h2 {
      color: ${color.secondary};
    }
  }

  .sticky {
    text-align: right;

    &__background {
      position: absolute;
      top: 0;
      left: 0%;
      width: 100%;
      height: 100%;
      background-color: ${color.alternative};
    }

    &__title {
      z-index: ${zIndex.menu};
      position: relative;
      display: inline-flex;
      color: ${color.light};
      padding: 0 1em;
      &::before, &::after {
        content: '';
        width: 0.5em;
        height: 0.5em;
        background-color: ${color.gray};
        border-radius: 50%;
        margin-top: 0.5em;
      }
      &::before {
        margin-right: 1em;
      }

      &::after {
        margin-left: 1em;
      }
    }

    &--stuck {
      .sticky__background {
        background-color: rgba(${colorConfig.rgb.alternative}, 0.65);
        ${saturationMask}
      }
    }
  }

  @media ${devices.laptop} {
    background-color: transparent;

    .experiences__header {
      &__title h2 {
        color: ${color.primary};
      }
    }
    
    .sticky {
      &__background {
        background-color: transparent;
      }
    }
  }
`