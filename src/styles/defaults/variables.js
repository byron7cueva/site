import { css } from 'styled-components'

import { color } from '../../config/constants'

export const variables = css`
    :root {
        /* Color */
        --color-primary : #1e85e6;
        --color-secondary: #1dd1a1;
        --color-alternative: rgb(${color.rgb.alternative});
        --color-light: rgb(${color.rgb.light});
        --color-dark: rgb($color.rgb.dark);
        --color-gray: #dfe6e9;

        /* Size */
        --size-text: 13px;
        --size-h1: 2em;
        --size-h2: 1.8em;
        --size-h3: 1.6em;
        --size-h4: 1.4em;

        /* Font */
        --font-content: 'Titillium Web', sans-serif;
        --font-title: 'Khand', sans-serif;

        /* Padding */
        --padding-content: 0.5em;
        --padding-block: 1em;

        /* Margin */
        --margin-block: 1em;
        --margin-text: 0.5em;

        /* z-index*/
        --z-index-logo: 1;
        --z-index-menu: 2;
    } 
`