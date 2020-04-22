import styled from 'styled-components'

import { color, padding } from '../../config/siteConstants'

export const ExperienceContent = styled.article`
  background-color: ${color.alternative};
  color: ${color.light};
  border-bottom: 1px solid ${color.secondary};

  .experience__cover {
    position: relative;
    display: grid;
    grid-template: 1fr 1fr 1fr / 50% 40% 10%;
    width: 100%;
    height: 20em;
    padding: ${padding.block};

    h3 {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      text-align: center;
    }

    div {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
      border-left: 1px solid ${color.gray};
      padding-left: ${padding.content};
    }

    &__date {
      position: absolute;
      grid-column: 4;
      grid-row: 1 / 4;
      top: 0;
      left: 0;
      transform-origin: 0 0;
      display: flex;
      justify-content: center;
      width: 20em;
      transform: rotate(90deg);
    }

    &__date::before, &__date::after {
      content: '';
      width: 0.5em;
      height: 0.5em;
      background-color: ${color.gray};
      border-radius: 50%;
      margin-top: 0.5em;
    }

    &__date::before {
      margin-right: 1em;
    }

    &__date::after {
      margin-left: 1em;
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