import React from 'react'
import { ResponsiveBump } from '@nivo/bump'

import { ChartContainer } from '../ChartContainer'
import { formatSkills } from '../../util/chart'
import { color as colorSite } from '../../config/siteConstants'
import { color, theme } from '../../config/chart'

const CustomPoint = ({ x, y, size, borderColor, borderWidth, data, isInactive }) => {
  return (
    <g transform={`translate(${x}, ${y})`} style={{ pointerEvents: 'none' }}>
      <circle
        r={size}
        fill={colorSite.light}
        stroke={borderColor}
        strokeWidth={borderWidth}
      />
      {!isInactive &&
        <text textAnchor='middle' y={4} fill={borderColor} style={{ fontSize: 9 }}>
          {formatSkills(data.value)}
        </text>}
    </g>
  )
}

const format = d => {
  switch (d) {
    case 1: return 'Principal'
    case 4: return 'Sin uso'
    default: return d
  }
}

export const BumpChart = ({ title, data, height, width }) => (
  <ChartContainer title={title} height={height} width={width}>
    <ResponsiveBump
      height={height}
      data={data}
      pointComponent={CustomPoint}
      theme={theme}
      margin={{ top: 20, right: 150, bottom: 25, left: 150 }}
      lineWidth={4}
      activeLineWidth={5}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      axisTop={{ tickSize: 0, tickPadding: 9 }}
      axisBottom={{ tickSize: 0, tickPadding: 9 }}
      axisLeft={{
        tickSize: 80,
        tickPadding: 0,
        legend: 'Prioridad de uso',
        legendPosition: 'middle',
        legendOffset: -140,
        format: format,
        scaleLineColor: 'transparent'
      }}
      axisRight={{
        tickSize: 80,
        tickPadding: 0,
        legend: 'Prioridad de uso',
        legendPosition: 'middle',
        legendOffset: 140,
        format: format
      }}
      startLabelPadding={10}
      endLabelPadding={10}
      pointSize={24}
      pointBorderWidth={3}
      pointBorderColor={{ from: 'serie.color' }}
      activePointSize={25}
      activePointBorderWidth={4}
      inactivePointSize={0}
      inactivePointBorderWidth={2}
      colors={[color.blueLight, color.greenLight, color.orange, color.coral]}
      startLabel={d => (d.id)}
    />
  </ChartContainer>
)