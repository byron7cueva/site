import { css } from 'styled-components'

import { color as colorSite , font, size } from '../../config/siteConstants'

export const defaults = css`
  * {
    box-sizing: border-box;
  }

  html, body, p {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${font.content};
    font-size: ${size.text.content};
    color: ${colorSite.dark};
    background-color: ${colorSite.light};
    line-height: 2em;
  }

  ::-webkit-scrollbar-track
  {
	  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	  background-color: ${colorSite.alternative};
  }
  ::-webkit-scrollbar
  {
	  width: 7px;
	  background-color: ${colorSite.alternative};
  }
  
  ::-webkit-scrollbar-thumb
  {
	  background-color: ${colorSite.secondary};
	  border: 1px solid #555555;
    border-radius: 25px;
  }
`