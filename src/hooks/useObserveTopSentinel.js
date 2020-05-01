import { useEffect } from 'react'

import { checkTopStuck } from '../util/utils';

export function useObserveTopSentinel (topSentinelRef, stickyRef, { onChange }) {
  useEffect(() => {
    if (!stickyRef) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const target = stickyRef.current
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
  [topSentinelRef, stickyRef, onChange ])
}