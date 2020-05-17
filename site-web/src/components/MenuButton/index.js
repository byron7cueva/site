import React from 'react'

import { ButtonContainer } from './style'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import { size, color } from '../../config/constants'

export const MenuButton = ({ onClick, isClicked }) => {
  const Icon = isClicked ? IoMdClose : IoIosMenu
  return (
    <ButtonContainer onClick={onClick}>
      <Icon size={size.icon} color={`rgb(${color.rgb.light})`} />
    </ButtonContainer>
  )
}