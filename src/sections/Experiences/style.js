import styled from 'styled-components'

import { color, zIndex} from '../../config/siteConstants'
import { color as colorConfig } from '../../config/constants'
import { saturationMask } from '../../styles/mixins/background'

export const ExperiencesSection = styled.section`
  .experience-section__header {
    z-index: ${zIndex.headerSticky};
    position: sticky;
    top: 0;
    ${saturationMask}
  }

  .sticky {
    text-align: right;
    padding: 0 1em;

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
`