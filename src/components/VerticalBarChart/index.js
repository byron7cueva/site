import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

import { color, theme } from '../../config/chart'
import { color as colorSite} from '../../config/siteConstants'
import { formatSkills } from '../../util/chart'

const BarComponent = props => {
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <rect width={props.width} height={props.height} fill={props.color} />
      <text
        x={-60}
        y={props.width / 2}
        textAnchor='end'
        transform='rotate(270)'
        dominantBaseline='central'
        fill={colorSite.light}
        style={{
          fontSize: 13
        }}
      >
        {formatSkills(props.data.value)}
      </text>
    </g>
  )
}

export const VerticalBarChart = ({ data }) => (
  <ResponsiveBar
    margin={{ top: 10, right: 0, bottom: 30, left: 75 }}
    data={data}
    colors={[color.fuchsia, color.orange, color.blue, color.coral, color.greenDark]}
    colorBy='indexValue'
    theme={theme}
    axisLeft={{
      format: formatSkills
    }}
    barComponent={BarComponent}
  />
)