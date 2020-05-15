import styled from 'styled-components'

import { color } from '../../config/constants'
import { AlertType } from '../../config/enum'

function getColor (type, opacity) {
  switch (type) {
    case AlertType.ERROR: return `rgba(${color.rgb.error}, ${opacity})`
    case AlertType.WARNING: return `rgba(${color.rgb.warning}, ${opacity})`
    default: return `rgba(${color.rgb.info}, ${opacity})`
  }
}

export const AlertContainer = styled.div`
  margin-bottom: 0.5em;
  min-height: 3em;

  .alert__content {
    display: flex;
    align-items: center;
    padding: 0.5em 1em;
    background-color: ${props => getColor(props.type, 0.1)};
    color: ${props => getColor(props.type, 1)};
    border: 1px solid;
    border-radius: 2px;
  }

  .alert__message {
    padding-left: 1em;
    line-height: 1em;
  }
`