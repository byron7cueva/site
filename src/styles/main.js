import{ createGlobalStyle } from 'styled-components'

import { variables } from './defaults/variables'
import { defaults } from './defaults/global'

export const Style = createGlobalStyle`
  ${variables}
  ${defaults}
`