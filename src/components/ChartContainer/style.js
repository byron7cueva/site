import styled from 'styled-components'

export const ChartContent = styled.div.attrs(props => ({
  width: props.width || 400
}))`
  overflow-x: scroll;
  .chart-content__content {
    width: ${props => props.width}px;
    min-width: 400px;
    height: ${props => props.height + 5}px;
  }
`