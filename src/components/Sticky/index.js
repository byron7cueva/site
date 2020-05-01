import React, { useRef, useContext } from 'react'

import { StickyContainer, Boundary, SentinelStickyTop, SentinelStickyBottom } from './style'
import { StickySectionContext, StickyProvider, useStickyActions } from './context'
import { useObserveTopSentinel, useObserveBottomSentinels } from './hooks'

export const Sticky = ({ children, className }) => {
  const { topSentinelRef, bottomSentinelRef } = useContext(StickySectionContext)

  const dispatch = useStickyActions()

  const addStickyRef = stickyRef => {
    dispatch.addStickyRef(topSentinelRef, bottomSentinelRef, stickyRef)
  }

  return (
    <StickyContainer
      ref={addStickyRef}
      className={className}
    >
      {children}
    </StickyContainer>
  )
}


export const StickyBoundary = ({ children, onChange }) => {
  const topSentinelRef = useRef(null)
  const bottomSentinelRef = useRef(null)

  useObserveTopSentinel(topSentinelRef, { onChange })
  useObserveBottomSentinels(bottomSentinelRef, { onChange })

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
    {children}
  </StickyProvider>
)