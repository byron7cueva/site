import { css } from 'styled-components'

import { devices } from '../../config/constants'

export const contactStyle = css`
  .contact {
    form {
      text-align: center;
    }
    &__mail {
      margin-bottom: 0.5em;
      text-align: center;
    }
  }

  @media ${devices.laptop} {
    .contact__name-email {
      display: flex;
      justify-content: space-between;
      input {
        width: 48%;
      }
    }
  }
`