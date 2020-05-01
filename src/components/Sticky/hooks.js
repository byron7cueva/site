import { useEffect } from 'react'

import { useStickyState } from './context'
import { checkTopStuck } from '../../util/utils'

export function useObserveTopSentinel (topSentinelRef, { onChange }) {
  const { stickyRefs } = useStickyState()
  useEffect(() => {
    if (!stickyRefs) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const target = stickyRefs.get(entry.target)
        checkTopStuck(entry, target, onChange)
      })
    }, {
      threshold: [0]
    })

    const sentinel = topSentinelRef.current
    observer.observe(sentinel)

    return () => {
      observer.unobserve(sentinel)
    }
  },
  [topSentinelRef, stickyRefs, onChange ])
}

export function useObserveBottomSentinels (bottomSentinelRef, { onChange }) {
  const { stickyRefs } = useStickyState()

  useEffect(() => {
    if (!stickyRefs) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const target = stickyRefs.get(entry.target)
        const targetRect = target.getBoundingClientRect()
        const { boundingClientRect, rootBounds, intersectionRatio } = entry

        if (boundingClientRect.bottom > rootBounds.top &&
          intersectionRatio === 1 && 
          targetRect.bottom > boundingClientRect.top) {
          onChange(true, target)
        }

        if (boundingClientRect.top < rootBounds.top && boundingClientRect.bottom < rootBounds.bottom) {
          onChange(false, target)
        }
      })
    }, {
      threshold: [1]
    })

    const sentinel = bottomSentinelRef.current
    observer.observe(sentinel)

    return () => {
      observer.unobserve(sentinel)
    }
  },
  [bottomSentinelRef, stickyRefs, onChange]
  )
}