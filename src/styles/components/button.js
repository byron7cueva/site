import { css } from 'styled-components'

export const buttonStyle = css`
  button, a {
    -webkit-tap-highlight-color: transparent
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
  }
`