import{ createGlobalStyle } from 'styled-components'

import { variables } from './defaults/variables'
import { defaults } from './defaults/global'
import { heading } from './components/heading'
import { containers } from './components/containers'
import { buttonStyle } from './components/button'
import { opinionsStyle }  from './components/opinions'

export const Style = createGlobalStyle`
  ${variables}
  ${defaults}

  /* Components */
  ${heading}
  ${buttonStyle}
  ${containers}
  ${opinionsStyle}
`