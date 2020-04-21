import styled from 'styled-components'

import { color, padding } from '../../config/siteConstants'

export const ExperienceContent = styled.article`
  .experience__cover {
    position: relative;
    display: grid;
    grid-template: 1fr 1fr 1fr / 50% 40% 10%;
    width: 100%;
    height: 20em;
    padding: ${padding.block};
    color: ${color.light};

    h3 {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    div {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
      border-left: 1px solid ${color.gray};
      padding-left: ${padding.content};
    }

    &__date {
      grid-column: 4;
      grid-row: 1 / 4;
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: 0 0;
      display: flex;
      justify-content: center;
      width: 20em;
      transform: rotate(90deg);
    }
  }

  .expereience__description {
    padding: ${padding.block};
    div {
      padding: inherit;
      background-color: rgba(117,123,157,0.16);
    }
  }
`