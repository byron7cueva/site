import React from 'react'
import { navigate } from '@reach/router';

import { ItemMenu } from '../ItemMenu'
import { MenuContainer } from './style'

export const Menu = ({ isShow, onClickItem, hasBackground }) => {
  const internalLink = (to) => {
    navigate(to)
    onClickItem()
  }

  let classCss = isShow ? 'show' : ''
  classCss = `${classCss} ${hasBackground ? 'hasBackground' : ''}`

  return (
    <MenuContainer className={classCss}>
      <div className='menu__mask' />
      <div className='menu__content'>
        <ul className='menu__content__list'>
          <ItemMenu to='#inicio' label='Inicio' onClick={internalLink} />
          <ItemMenu to='#about' label='Acerca de mi' onClick={internalLink} />
          <ItemMenu to='#opinions' label='Que opinan de mi trabajo' onClick={internalLink} />
          <ItemMenu to='#experiences' label='Experiencia' onClick={internalLink} />
          <ItemMenu to='#skills' label='Habilidades' onClick={internalLink} />
          <ItemMenu to='#contact' label='Contactame' onClick={internalLink} />
        </ul>
      </div>
    </MenuContainer>
  )
}