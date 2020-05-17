import React, { useState } from 'react'
import Media from 'react-media'

import { MenuButton } from '../MenuButton'
import { Menu } from '../Menu'
import { desktopFirst } from '../../config/constants'

export const MenuContainer = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handlerClickMenuButton = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <Media query={desktopFirst.tablet} render={() => (
        <MenuButton onClick={handlerClickMenuButton} isClicked={showMenu} />
      )}/>
      <Menu isShow={showMenu} onClickItem={handlerClickMenuButton} />
    </>
  )
}