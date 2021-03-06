import styled from 'styled-components'

import { color, padding } from '../../config/siteConstants'

export const ExperienceContent = styled.div`
  position: relative;
  background-color: ${color.alternative};
  color: ${color.light};
  border-radius: 5px;
  overflow: hidden;

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
  }

  .experience__position {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    border-left: 1px solid ${color.gray};
    padding-left: ${padding.content};
  }

  .expereience__description {
    padding: ${padding.block};
    div {
      padding: inherit;
      background-color: rgba(117,123,157,0.16);
    }
  }
`