import styled, {css} from 'styled-components'

import { color } from '../../config/siteConstants'
import { color as colors, devices } from '../../config/constants'
import pattern from '../../assets/img/geometryPattern.png'

const widthSection = 'var(--width-section)';

const styles = css`

  .sticky-section {
    position: sticky;
    top: 0;
    bottom: 0;
    overflow: hidden;
    height: 100vh;

    &__background {
      position: absolute;
      width: calc(${widthSection} + 50vw);
      left: calc(${widthSection} * -1);
      height: calc(100vh - 8em);
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
      height: calc(100vh - 8em);
      width: 100%;
    }

    &__items {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      width: ${widthSection};
    }
  }
`

export const StickyContainer = styled.section`
  --width-section: 520vw;

  position: relative;
  height: calc(${widthSection} + 50vw);
  background-color: rgba(${colors.rgb.gray}, 0.45);

  h3 {
    text-align: center;
    padding: 0 10%;
    color: ${color.alternative};
  }
  ${styles}

  @media ${devices.phablet} {
    --width-section: 440vw;
  }

  @media ${devices.tablet} {
    --width-section: 310vw;
    &, .sticky-section__background {
      height: calc(${widthSection} + 15vw);
    }
  }

  @media ${devices.laptop} {
    --width-section: 150vw;
  }
`