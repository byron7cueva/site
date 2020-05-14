import React from 'react'

import { MenuContainer } from './style'

export const Menu = ({ isShow, onClickItem }) => (
  <MenuContainer className={isShow ? 'show' : ''}>
    <div className='menu__mask' />
    <div className='menu__content'>
      <ul className='menu__content__list'>
        <li>
          <a href='#home' onClick={onClickItem} >Inicio</a>
        </li>
        <li>
          <a href='#about' onClick={onClickItem} >Sobre mi</a>
        </li>
        <li>
          <a href='#opinions' onClick={onClickItem}>Que opinan de mi trabajo</a>
        </li>
        <li>
          <a href='#experiences' onClick={onClickItem}>Experiencia</a>
        </li>
        <li>
          <a href='#skills' onClick={onClickItem}>Habilidades</a>
        </li>
        <li>
          <a href='#contact' onClick={onClickItem}>Contactame</a>
        </li>
      </ul>
    </div>
  </MenuContainer>
)