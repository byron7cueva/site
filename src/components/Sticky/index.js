import React, { useRef, useContext } from 'react'
import Media from 'react-media'

import {
  StickyContainer,
  Boundary, SentinelStickyTop,
  SentinelStickyBottom,
  StickySectionContainer
} from './style'
import { StickySectionContext, StickyProvider, useStickyActions, StickyStateContext } from './context'
import { useObserveTopSentinel, useObserveBottomSentinels } from './hooks'
import { TimeLine } from '../TimeLine'
import { devices } from '../../config/constants'

export const Sticky = ({ title }) => {
  const { topSentinelRef, bottomSentinelRef } = useContext(StickySectionContext)

  const dispatch = useStickyActions()

  const addStickyRef = stickyRef => {
    dispatch.addStickyRef(topSentinelRef, bottomSentinelRef, stickyRef)
  }

  return (
    <StickyContainer
      ref={addStickyRef}
      className='sticky'
    >
      <div className='sticky__background' />
      <p className='sticky__title'>{title}</p>
    </StickyContainer>
  )
}


export const StickyBoundary = ({ children }) => {
  const topSentinelRef = useRef(null)
  const bottomSentinelRef = useRef(null)
  const dispatch = useStickyActions()

  const onChangeHandler = (stuck, target) => {
    if (stuck) {
      target.classList.add('sticky--stuck')
      dispatch.setCurrentTitle(target.querySelector('p').textContent)
    } else {
      target.classList.remove('sticky--stuck')
    }
  }

  useObserveTopSentinel(topSentinelRef, { onChange: onChangeHandler })
  useObserveBottomSentinels(bottomSentinelRef, { onChange: onChangeHandler })

  const value = { topSentinelRef, bottomSentinelRef }

  return (
    <StickySectionContext.Provider value={value}>
      <Boundary>
        <SentinelStickyTop
          ref={topSentinelRef}
        >
          sentinel top
        </SentinelStickyTop>
        <SentinelStickyBottom ref={bottomSentinelRef}>
          sentinel bottom
        </SentinelStickyBottom>
        {children}
      </Boundary>
    </StickySectionContext.Provider>
  )
}

export const StickySection = ({ children }) => (
  <StickyProvider>
    <StickySectionContainer>
      <div className='sticky-section__items'>
        {children}
      </div>
      <Media query={devices.laptop}>
        <div className='sticky-section__nav'>
          <TimeLine />
        </div>
      </Media>
    </StickySectionContainer>
  </StickyProvider>
)