import React, { useEffect } from 'react'
import { AiFillInfoCircle, AiFillCloseCircle, AiFillWarning } from 'react-icons/ai'
import { size } from '../../config/constants'

import { AlertType } from '../../config/enum'
import { AlertContainer } from './style'

const Alert = ({type = AlertType.INFO, message, isShow, time, onChangeShow }) => {
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

  useEffect(() => {
    let timeId
    if (isShow && time) {
        timeId = setTimeout(() => {
          onChangeShow(false)
      }, time * 1000)
    }
    return () => {
      clearTimeout(timeId)
    }
  },
  [isShow, time, onChangeShow]
  )

  return (
    <AlertContainer type={type}>
      { isShow ? (
        <div className='alert__content'>
        <Icon size={iconSize} />
        <p className='alert__message'>{message}</p>
      </div>
      ) : null
     }
    </AlertContainer>
  )
}

export {
  Alert,
  AlertType
}