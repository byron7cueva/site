import styled, {css} from 'styled-components'

import { color } from '../../config/siteConstants'
import { color as colors } from '../../config/constants'
import pattern from '../../assets/img/geometryPattern.png'

const widthSection = 340;

const styles = css`
  .sticky-section {
    position: sticky;
    top: 0;
    bottom: 0;
    overflow: hidden;
    height: 100vh;

    &__background {
      position: absolute;
      width: calc(${widthSection}vh + 100vw);
      left: -${widthSection}vh;
      height: 100%;
      opacity: 1;
      background-image: url('${pattern}');
      background-position: 0 0;
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
      align-items: flex-end;
      height: 100%;
      width: ${widthSection}vh;
    }
  }
`

export const StickyContainer = styled.section`
  position: relative;
  height: calc(${widthSection}vh + 100vw);
  background-color: rgba(${colors.rgb.gray}, 0.45);

  h3 {
    text-align: center;
    padding: 0 10%;
    color: ${color.alternative};
  }
  ${styles}
`