import React from 'react'

import { ButtonContainer } from './style'
import { IoIosMenu } from 'react-icons/io'
import { size, color } from '../../config/constants'

export const MenuButton = ({ onClick }) => (
  <ButtonContainer onClick={onClick}>
    <IoIosMenu size={size.icon} color={`rgb(${color.rgb.light})`}  />
  </ButtonContainer>
)