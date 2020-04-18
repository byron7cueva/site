import React from 'react'

import { Style } from '../styles/main'
import { LogoSection } from '../components/LogoSection'

export const Layout = ({ children }) => (
  <>
    <Style />
    <LogoSection />
    {children}
  </>
)