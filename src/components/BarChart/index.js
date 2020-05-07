import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

import { color, size } from '../../config/siteConstants'
import { color as colorChart, theme } from '../../config/chart'
import { formatSkills } from '../../util/chart'

const BarComponent = props => (
  <g transform={`translate(${props.x},${props.y})`}>
    <rect width={props.width} height={props.height} fill={props.color} />
    <text
      x={props.width - 16}
      y={props.height / 2}
      textAnchor='end'
      dominantBaseline='central'
      fill={color.light}
      style={{
        fontSize: size.text.content
      }}
    >
      {props.data.indexValue}
    </text>
  </g>
)

export const BarChart = ({ data }) => (
  <ResponsiveBar
    data={data}
    barComponent={BarComponent}
    theme={theme}
    layout='horizontal'
    margin={{ top: 25, right: 35, bottom: 30, left: 0 }}
    colorBy='indexValue'
    colors={[colorChart.orange, colorChart.greenDark, colorChart.blue, colorChart.coral]}
    enableGridX
    enableGridY={false}
    axisLeft={null}
    axisTop={{
      format: formatSkills
    }}
    axisBottom={{
      format: formatSkills
    }}
  />
)