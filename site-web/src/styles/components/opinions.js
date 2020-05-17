import { css } from 'styled-components'

import { color, margin } from '../../config/siteConstants'

export const opinionsStyle = css`
  /* enter */
  .fade-enter {
    opacity: 0;
    z-index: 1;
  }
  .fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 1000ms linear 5000ms;
  }

  /* exit */
  .fade-exit {
      opacity: 1;
  }
  .fade-exit.fade-exit-active {
      opacity: 0;
      transition: opacity 1000ms linear;
  }
  .fade-exit-done {
    opacity: 0;
  }

  .opinions {
    text-align: center;
    &__navigation {
      display: inline-block;
      background-color: ${color.primary};
      border-radius: 25px;
      margin: ${margin.block} 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.2em;

      button:first-of-type {
        padding-right: 1em;
        border-right: 0.5px solid ${color.light};
      }
      button:last-of-type {
        padding-left: 1em;
        border-left: 0.5px solid ${color.light};
      }
    }
    &__content {
      position: relative;
      width: 100%;
      height: 23em;
    }
    &__item {
      position: absolute;
      align-items: center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`