import React from 'react'

import { ButtonContainer } from './style'

export const ScrollDownButton = () => (
  <ButtonContainer>
    <p>Ver más</p>
    <div className='scroll-down-button__mouse'>
      <span></span>
    </div>
    <div className='scroll-down-button__arrow'>
      <span></span>
    </div>
  </ButtonContainer>
)