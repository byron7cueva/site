import{ createGlobalStyle } from 'styled-components'

import { variables } from './defaults/variables'
import { defaults } from './defaults/global'
import { heading } from './components/heading'
import { containers } from './components/containers'
import { buttonStyle } from './components/button'
import { inputStyle } from './components/input'
import { opinionsStyle } from './components/opinions'
import { contactStyle } from './components/contact'

export const Style = createGlobalStyle`
  ${variables}
  ${defaults}

  /* Components */
  ${heading}
  ${buttonStyle}
  ${inputStyle}
  ${containers}

  /* */ 
  ${opinionsStyle}
  ${contactStyle}
`