import { color as colorSite, size, font } from './siteConstants'

export const color = {
  blue: '#2980b9',
  greenLight: '#85eba2',
  green: '#27ae60',
  greenDark: '#3abbb3',
  fuchsia: '#f649a7',
  coral: '#fe6a6a',
  orange: '#e67e22',
  red: '#ff5555'
}

export const theme = {
  axis: {
    ticks: {
      line: { fill: colorSite.alternative, stroke: 'transparent' },
      text: {
        fill: colorSite.dark,
        fontSize: size.text.content,
        fontFamily: font.content
      }
    },
    legend: {
      text: {
        fill: colorSite.dark,
        fontSize: size.text.content,
        fontFamily: font.content
      }
    }
  },
  grid: {
    line: { stroke: colorSite.alternative, strokeDasharray: '1 2', strokeOpacity: 0.4 }
  },
  tooltip: {
    container: {
      background: colorSite.gray,
      color: colorSite.dark,
      fontSize: size.text.content,
      borderRadius: 0
    }
  },
  labels: {
    text: {
      fill: colorSite.dark,
      fontSize:  size.text.content,
      fontWeight: 500,
      fontFamily: font.content
    }
  }
}
