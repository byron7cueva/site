import React, { useState } from 'react'
import Media from 'react-media'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { MenuButton } from '../MenuButton'
import { Menu } from '../Menu'
import { desktopFirst } from '../../config/constants'

export const MenuContainer = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [hasBackground, setHasBackground] = useState(false)

  const handlerClickMenuButton = () => {
    setShowMenu(!showMenu)
  }

  useScrollPosition(({currPos}) => {
    if (currPos.y < -48) {
      setHasBackground(true)
    } else {
      setHasBackground(false)
    }
  }, [hasBackground])

  return (
    <>
      <Media query={desktopFirst.tablet} render={() => (
        <MenuButton onClick={handlerClickMenuButton} isClicked={showMenu} />
      )}/>
      <Menu isShow={showMenu} onClickItem={handlerClickMenuButton} hasBackground={hasBackground}/>
    </>
  )
}