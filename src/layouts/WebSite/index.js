import React from 'react'
import Media from 'react-media'

import { Style } from '../../styles/main'
import { LogoSection } from '../../components/LogoSection'
import { MenuButton } from '../../components/MenuButton'
import { Menu } from '../../components/Menu' 
import { Footer } from '../../components/Footer'
import { desktopFirst } from '../../config/constants'
import { SEO } from '../../components/SEO'

export const Layout = ({ children, showMenu, onClickMenuButton, onClickItemMenu }) => (
  <>
    <SEO />
    <Style />
    <LogoSection />
    <Media query={desktopFirst.tablet} render={() => (
      <MenuButton onClick={onClickMenuButton}/>
    )}/>
    <Menu isShow={showMenu} onClickItem={onClickItemMenu} />
    <main>
      {children}
    </main>
    <Footer />
  </>
)