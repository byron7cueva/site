export const color = {
  rgb: {
    primary: '30,133,230', // #1e85e6
    alternative: '82,91,131', // #525b83
    light: '253,253,251', // #fdfdfb
    dark: '39,44,74', // #272c4a
    gray: '223,230,233', // #dfe6e9
    info: '30,133,230', // #1e85e6
    warning: '252,130,16', //#ffb86c
    error: '255,85,85' // #ff5555
  }
}

export const size = {
  icon: 20
}

export const devices = {
  phablet: '(min-width: 480px)',
  tablet: '(min-width: 768px)',
  laptop: '(min-width: 1024px)',
  desktop: '(min-width: 1280px)'
}

export const desktopFirst = {
  tablet: '(max-width: 767px)',
  laptop: '(max-width: 1023px)'
}

export const api = {
  url: process.env.API_URL
}