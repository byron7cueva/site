import React from 'react'

import { LoadingContainer } from './style'

export const Loading = ({show, message}) => {
  if (!show) return null

  return (
    <LoadingContainer>
      <div className='loading__content'>
        <div className='loading__content__bar' />
        <p className='loading__content__message'>{message}</p>
      </div>
    </LoadingContainer>
  )
}