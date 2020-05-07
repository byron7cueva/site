import React, { useRef, useEffect } from 'react'

import { TimeLineContent, Scroller } from './style'

export const TimeLine = ({ period, scrollerContainer, isScrolling }) => {
  const timelineScrollRef = useRef(null)
  const paddingTop = useRef(null)

  const onScrolling = () => {
    const boundingScroolContainer = scrollerContainer.current.getBoundingClientRect()
    const boundingTimeLine = timelineScrollRef.current.getBoundingClientRect()

    const height = Math.abs(boundingScroolContainer.top) * boundingTimeLine.height / boundingScroolContainer.height
    paddingTop.current.style.height = `${height}px`

  }

  useEffect(() => {
    if (isScrolling) {
      window.addEventListener('scroll', onScrolling)
    } else {
      console.log('Liberando desde condicion')
      window.removeEventListener('scroll', onScrolling)
    }

    return () => {
      console.log('Liberando desde effect')
      window.removeEventListener('scroll', onScrolling)
    }
  },
  [scrollerContainer, timelineScrollRef, paddingTop, isScrolling]
  )
  
  return (
    <TimeLineContent>
      <div className='timeline__scroll' ref={timelineScrollRef}>
        <div className='timeline__scroll__padding-top' ref={paddingTop} />
        <Scroller>
          <div className='scroller__handle' />
          <div className='scroller__content'>
            {period}
          </div>
        </Scroller>
        <div className='timeline__scroll__padding-bottom'/>
      </div>
    </TimeLineContent>
  )
}