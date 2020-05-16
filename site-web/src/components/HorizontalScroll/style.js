import styled, {css} from 'styled-components'

import { color } from '../../config/siteConstants'
import { devices } from '../../config/constants'
import pattern from '../../assets/img/stardust.png'

const widthSection = 'var(--width-section)';

const styles = css`

  .sticky-section {
    position: sticky;
    top: 0;
    bottom: 0;
    overflow: hidden;
    height: 100vh;
    
    &__title {
      margin-top: 1em;
    }

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

export const HorizontalScrollSectionContainer = styled.section`
  --width-section: 520vw;

  position: relative;
  height: calc(${widthSection} + 60vw);
  padding-top: 5em;
  ${styles}

  @media ${devices.phablet} {
    --width-section: 420vw;
  }

  @media ${devices.tablet} {
    --width-section: 280vw;

    &, .sticky-section__background {
      height: calc(${widthSection} + 30vw);
    }

    .sticky-section {
      top: 3em;
    }
  }

  @media ${devices.laptop} {
    --width-section: 220vw;

    &, .sticky-section__background {
      height: calc(${widthSection});
    }
  }

  @media ${devices.desktop} {
    --width-section: 150vw;
  }
`

export const HorizontalScrollItemContainer = styled.article.attrs(props => ({
  width: props.width || 400
}))`
  width: ${props => props.width}px;
  margin-left: 15vw;
  display: flex;
  align-items: center;
  height: 100%;

  .sticky-item__card {
    width: 100%;
    height: 90%;
    background-color: ${color.light};
    box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.2);
    padding: 2em;
  }

  .sticky-item__title {
    height: 20%;
    text-align: center;
    padding: 0 10%;
    color: ${color.alternative};
  }

  .sticky-item__content {
    height: 80%;
  }

  @media ${devices.tablet} {
    .sticky-item__card {
      height: 60%;
    }
  }
`