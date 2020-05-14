import styled from 'styled-components'

import { SentinelStickyStyle } from '../../styles/mixins/helpers'
import { color, devices } from '../../config/constants'
import { color as colorSite, zIndex } from '../../config/siteConstants'
import { saturationMask } from '../../styles/mixins/background'

export const StickyContainer = styled.div`
  z-index: ${zIndex.sectionSticky};
  position: sticky;
  visibility: hidden;
  .sticky__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
  }

  .sticky__content {
    z-index: ${zIndex.menu};
    position: relative;
    height: inherit;
  }

  &.sticky--stuck {
    visibility: visible;
    .sticky__background {
      background-color: rgba(${color.rgb.alternative}, 0.65);
      ${saturationMask}
    }
  }

  @media ${devices.laptop} {
    .sticky__background {
      background-color: transparent;
    }
  }
`

export const StickyBoundaryContainer = styled.article`
  position: relative;
  .sticky-boundary {
    &__sentinel-top {
      ${SentinelStickyStyle}
      top: -1em;
      height: 1em;
    }
    &__sentinel-bottom {
      ${SentinelStickyStyle}
      bottom: 0;
      height: 6.5em;
    }
  }

  &.sticky-item {
    padding-top: 2.5em;
  }
`

export const StickySectionContainer = styled.div`
  .sticky-section__sticky {
    top: 3.3em;
    height: 3.5em;
  }


  .sticky-section__sticky__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em 0 4em;
    color: ${colorSite.light};
    height: 100%;
    
    p {
      font-size: 0.9em;
      line-height: 1.5em;
      width: 50%;
    }
    
    p:last-of-type {
      padding-left: 1em;
      text-align: right;
    }
  }

  .sticky-section__items {
    padding: 0 1em;
  }

  @media ${devices.phablet} {
    .sticky-section__sticky {
      top: 3.7em;
    }
  }

  @media ${devices.tablet} {
    .sticky-section__sticky {
      top: 6.67em;
      height: 2em;
    }
  }

  @media ${devices.laptop} {
    display: flex;
    padding: 0 10%;

    .sticky-section {

      &__sticky {
        visibility: hidden;
      }

      &__content {
        width: 60%;
      }

      &__nav {
        width: 40%;
        padding: 8em 0;
      }

    }
  }
`