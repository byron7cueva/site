import React from 'react'

import { Style } from '../../styles/main'
import { LogoSection } from '../../components/LogoSection'
import { MenuButton } from '../../components/MenuButton'
import { Footer } from '../../components/Footer'
import { Helmet } from 'react-helmet'
import { color } from '../../config/constants'

export const Layout = ({ children }) => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Byron Cueva</title>
      <meta name='theme-color' content={`rgb(${color.rgb.alternative})`} />
    </Helmet>
    <Style />
    <LogoSection />
    <MenuButton />
    <main>
      {children}
    </main>
    <Footer />
  </>
)