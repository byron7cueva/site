import { css } from 'styled-components'

import { color, devices } from '../../config/constants'

export const variables = css`
    :root {
        /* Color */
        --color-primary : #1e85e6;
        --color-secondary: #1dd1a1;
        --color-alternative: rgb(${color.rgb.alternative});
        --color-light: rgb(${color.rgb.light});
        --color-dark: rgb($color.rgb.dark);
        --color-gray: rgb(${color.rgb.gray});
        --color-gray-dark: #cecdcc;
        --color-info: rgb(${color.rgb.info});
        --color-warning: rgb(${color.rgb.warning});
        --color-error: rgb(${color.rgb.error});

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
        --z-index-section-sticky: 1;
        --z-index-header-sticky: 2;
        --z-index-menu: 3;
        --z-index-logo: 4;
    } 

    @media ${devices.phablet} {
        :root {
            /* Size */
            --size-text: 16px;

            /* Padding */
            --padding-content: 0.7em;
            --padding-block: 1.5em;
        }
    }
`