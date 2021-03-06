import { css } from 'styled-components'

import { devices } from '../../config/constants'

export const heroStyle = css`
  .hero {
    height: 90vh;

    &__content, &__particles {
      height: 100%;
      width: 100%;
    }

    &__content {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__content div {
      width: 50%;
    }
  }

  @media ${devices.tablet} {
    .hero {
      &::before {
        background-position-x: 70% !important;
      }
    }
  }

  @media ${devices.laptop} {
    .hero {
      &::before {
        background-position-x: 100% !important;
      }

      &__name {
        margin: 2em 0;
      }
    }
  }
`