import React from 'react'

import { Style } from '../../styles/main'
import { LogoSection } from '../../components/LogoSection'
import { MenuButton } from '../../components/MenuButton'

export const Layout = ({ children }) => (
  <>
    <Style />
    <LogoSection />
    <MenuButton />
    <main>
      {children}
    </main>
  </>
)