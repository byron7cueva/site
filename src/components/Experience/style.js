import styled from 'styled-components'

import { color, padding, zIndex } from '../../config/siteConstants'

export const ExperienceContent = styled.article`
  background-color: ${color.alternative};
  color: ${color.light};
  border-bottom: 1px solid ${color.secondary};
  position: relative;

  .experience__date {
    z-index: ${zIndex.sectionSticky};
    position: sticky;
    top: 4.5em;
    background-color: ${color.alternative};
    text-align: right;
    padding: 0 1em;

    p {
      display: inline-flex;
      &::before, &::after {
      content: '';
      width: 0.5em;
      height: 0.5em;
      background-color: ${color.gray};
      border-radius: 50%;
      margin-top: 0.5em;
    }

    &::before {
      margin-right: 1em;
    }

    &::after {
      margin-left: 1em;
    }
    }
  }

  .experience__cover {
    position: relative;
    display: grid;
    grid-template: 1fr 1fr 1fr / 50% 50%;
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
  }

  .expereience__description {
    padding: ${padding.block};
    div {
      padding: inherit;
      background-color: rgba(117,123,157,0.16);
    }
  }
`