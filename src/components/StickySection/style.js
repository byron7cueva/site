import styled, {css} from 'styled-components'

import { padding } from '../../config/siteConstants'

const widthSection = 320;

const styles = css`
  .sticky-section {
    position: sticky;
    top: 0;
    bottom: 0;
    overflow: hidden;
    height: 100vh;

    &__background {
      position: absolute;
      width: ${widthSection + 30}vh;
      height: 100%;
      opacity: 1;
    }

    &__overflow-mask {
      z-index: 1;
      position: relative;
      display: flex;
      align-items: center;
      overflow: hidden;
      height: 100%;
      width: 100%;
    }

    &__items {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      width: ${widthSection}vh;
    }
  }
`

export const StickyContainer = styled.section`
  position: relative;
  height: ${widthSection + 30}vh;

  h3 {
    text-align: center;
    padding: 0 ${padding.content};
  }
  ${styles}
`