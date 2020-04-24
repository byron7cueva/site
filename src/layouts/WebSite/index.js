import React from 'react'

import { Style } from '../../styles/main'
import { LogoSection } from '../../components/LogoSection'
import { MenuButton } from '../../components/MenuButton'
import { Menu } from '../../components/Menu' 
import { Footer } from '../../components/Footer'
import { Helmet } from 'react-helmet'
import { color } from '../../config/constants'

export const Layout = ({ children, showMenu, onClickMenuButton, onClickItemMenu }) => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Byron Cueva</title>
      <meta name='theme-color' content={`rgb(${color.rgb.alternative})`} />
    </Helmet>
    <Style />
    <LogoSection />
    <MenuButton onClick={onClickMenuButton}/>
    <Menu isShow={showMenu} onClickItem={onClickItemMenu} />
    <main>
      {children}
    </main>
    <Footer />
  </>
)