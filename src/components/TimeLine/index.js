import React, { useContext, useEffect } from 'react'

import { TimeLineContent, Scroller } from './style'
import { StickyStateContext } from '../Sticky/context'

export const TimeLine = () => {

  const { currentTitle } = useContext(StickyStateContext)

  return (
    <TimeLineContent>
      <div className='timeline__scroll'>
        <div className='timeline__scroll__padding-top'/>
        <Scroller>
          <div className='scroller__handle' />
          <div className='scroller__content'>
            {currentTitle}
          </div>
        </Scroller>
        <div className='timeline__scroll__padding-bottom'/>
      </div>
    </TimeLineContent>
  )
}