import styled from 'styled-components'

export const StickyContent = styled.article.attrs(props => ({
  width: props.width || 400
}))`
  width: ${props => props.width}px;
  height: 85vh;
  margin: 0 3.5em;

  .sticky-item__content {
    width: 100%;
    height: ${props => props.height + 5}px;
  }
`