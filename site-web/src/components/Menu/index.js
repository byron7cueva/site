import React from 'react'
import { navigate } from '@reach/router';

import { MenuContainer } from './style'

export const Menu = ({ isShow, onClickItem }) => {
  const internalLink = (to) => {
    navigate(`#${to}`)
    onClickItem(to)
  }

  return (
    <MenuContainer className={isShow ? 'show' : ''}>
      <div className='menu__mask' />
      <div className='menu__content'>
        <ul className='menu__content__list'>
          <li>
            <button onClick={internalLink.bind(this, 'inicio')}>Inicio</button>
          </li>
          <li>
            <button onClick={internalLink.bind(this, 'about')}>Sobre mi</button>
          </li>
          <li>
            <button onClick={internalLink.bind(this, 'opinions')}>Que opinan de mi trabajo</button>
          </li>
          <li>
            <button onClick={internalLink.bind(this, 'experiences')}>Experiencia</button>
          </li>
          <li>
            <button onClick={internalLink.bind(this, 'skills')}>Habilidades</button>
          </li>
          <li>
            <button onClick={internalLink.bind(this, 'contact')}>Contactame</button>
          </li>
        </ul>
      </div>
    </MenuContainer>
  )
}