import React from 'react'
import { useLocation } from '@reach/router'

import { ItemMenuContainer } from './style'

export const ItemMenu = ({ to, label, onClick }) => {
  const handleClick = () => {
    onClick(to)
  }

  const { hash } = useLocation()
  const activeClass = to === hash ? 'active' : ''

  return (
    <ItemMenuContainer className={activeClass}>
      <button onClick={handleClick}>{label}</button>
    </ItemMenuContainer>
  )
}