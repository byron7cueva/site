import React from 'react'
import { Helmet } from 'react-helmet'
import Media from 'react-media'

import { Style } from '../../styles/main'
import { LogoSection } from '../../components/LogoSection'
import { MenuButton } from '../../components/MenuButton'
import { Menu } from '../../components/Menu' 
import { Footer } from '../../components/Footer'
import { color, desktopFirst } from '../../config/constants'

export const Layout = ({ children, showMenu, onClickMenuButton, onClickItemMenu }) => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Byron Cueva</title>
      <meta name='theme-color' content={`rgb(${color.rgb.alternative})`} />
    </Helmet>
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