import{ createGlobalStyle } from 'styled-components'

import { variables } from './defaults/variables'
import { defaults } from './defaults/global'
import { heading } from './components/heading'

export const Style = createGlobalStyle`
  ${variables}
  ${defaults}
  ${heading}
`