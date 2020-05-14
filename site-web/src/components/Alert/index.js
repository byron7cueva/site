import React, { useState } from 'react'
import { AiFillInfoCircle, AiFillCloseCircle, AiFillWarning } from 'react-icons/ai'
import { size } from '../../config/constants'

import { AlertType } from '../../config/enum'
import { AlertContainer } from './style'

const Alert = ({type = AlertType.INFO, message, time = 0}) => {
  const [show, setShow] = useState(true)
  const iconSize = size.icon * 1.5
  let Icon
  
  switch (type) {
    case AlertType.ERROR:
      Icon = AiFillCloseCircle
      break
    case AlertType.WARNING: Icon = AiFillWarning
      break
    default: Icon = AiFillInfoCircle
  }

  if (time) {
    const timeId = setTimeout(() => {
      setShow(false)
      clearTimeout(timeId)
    }, time * 1000)
  }

  if (!show) return null

  return (
    <AlertContainer type={type}>
      <Icon size={iconSize} />
      <p className='alert__message'>{message}</p>
      </AlertContainer>
  )
}

export {
  Alert,
  AlertType
}