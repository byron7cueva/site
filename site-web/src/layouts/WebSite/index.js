import React from 'react'

import { Style } from '../../styles/main'
import { LogoSection } from '../../components/LogoSection'
import { Footer } from '../../components/Footer'
import { SEO } from '../../components/SEO'
import { MenuContainer } from '../../components/MenuContainer'

export const Layout = ({ children }) => (
  <>
    <SEO />
    <Style />
    <LogoSection />
    <MenuContainer />
    <main>
      {children}
    </main>
    <Footer />
  </>
)