import styled, { css } from 'styled-components'

import { zIndex } from '../../config/siteConstants'

export const StickyContainer = styled.div`
  position: sticky;
  top: 4.5em;
  z-index: ${zIndex.sectionSticky};
  height: ${props => props.height};
  height: 2em;
`

export const Boundary = styled.article`
  position: relative;
`

const SentinelStickyStyle = css`
  position: absolute;
  left: 0;
  right: 0;
  visibility: hidden;
`
export const SentinelStickyTop = styled.div`
  ${SentinelStickyStyle}
  top: -1.4em;
  height: 1em;
`

export const SentinelStickyBottom = styled.div`
  ${SentinelStickyStyle}
  bottom: 0;
  height: 2em;
`