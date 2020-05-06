import styled from 'styled-components'

import { devices } from '../../config/constants'
import { zIndex } from '../../config/siteConstants'
import { SentinelStickyStyle } from '../../styles/mixins/helpers'

export const StickyContainer = styled.div`
  position: sticky;
  top: 4.5em;
  z-index: ${zIndex.sectionSticky};
  height: 2em;

  @media ${ devices.phablet} {
    top: 5.5em;
  }
`

export const Boundary = styled.article`
  position: relative;
`

export const SentinelStickyTop = styled.div`
  ${SentinelStickyStyle}
  top: -1em;
  height: 1em;
`

export const SentinelStickyBottom = styled.div`
  ${SentinelStickyStyle}
  bottom: 0;
  height: 6.5em;

  @media ${devices.phablet} {
    height: 7.5em;
  }
`

export const StickySectionContainer = styled.div`
  @media ${devices.laptop} {
    padding: 0 10%;
    display: flex;

    .sticky-section__items {
      width: 70%;
    }

    .sticky-section__nav {
      width: 30%;
      height: inherit;
    }
  }
`