import { createStitches } from '@stitches/react';
// Color Scale - the higher the number, the darker the color.
// ex: purple500 is lighter than purple800.

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    borderWidths: {},
    borderStyles: {},
    colors: {
      yt: 'hsl(0, 0%, 100%)',
      black900: 'hsl(0deg 0% 0%)',
      gray250: 'hsl(0deg 0% 84%)',
      gray500: 'hsl(0deg 0% 50%)',
      green500: 'hsl(120deg 100% 25%)',
      lime100: 'hsl(93deg 100% 91%)',
      yellow200: 'hsl(60deg 100% 94%)',
      lemon200: 'hsl(61, 100%, 88%)',
      orange200: 'hsl(25, 60%, 50%)',
      crimson200: 'hsl(6, 60%, 50%)',
      crimson110: 'hsl(15, 57%, 95%)',
      crimson170: 'hsla(6, 60%, 50%, 70%)',
      redsand300: 'hsl(0, 50%, 47%)',

      action: '$green500',
      emojiDropShadow: '$gray250',
      primaryBackground: '$yt',
      headerBackground: 'hsl(0deg 0% 100% / 80%)',
      imageContainerBackground: '$crimson110',
      imageContainerBorder: '$crimson170',
      primary: '$black900',
      themeButtonBackground: '$yt',
      linkExternal: '$crimson200',
      linkExternalVisited: '$orange200',
      caption: '$redsand300',
      nudge: '$lemon200'
    },
    fonts: {
      nice: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      code: 'Consolas, monaco, monospace',
    },
    fontSizes: {
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    radii: {},
    shadows: {},
    sizes: {},
    space: {},
    transitions: {
      themeChange: 'all 0.2s ease, letter-spacing 0s',
    },
    zIndices: {},

  },
  media: {
    smAndUp: '(min-width: 640px)',
    medAndUp: '(min-width: 768px)',
    lgAndUp: '(min-width: 1024px)',
    xlAndUp: '(min-width: 1440px)',
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value }),
  },
});

const pslTheme = createTheme({
  colors: {
    action: 'green',
    emojiDropShadow: 'hsl(0deg 0% 0%)',
    headerBackground: 'hsl(0deg 0% 9% / 80%)',
    primaryBackground: 'hsl(15deg 7% 9%)',
    imageContainerBackground: 'hsl(37deg 100% 5%)',
    // imageContainerBorder: 'hsl(31deg 100% 47%)',
    imageContainerBorder: 'hsl(21deg 49% 13%)',
    primary: 'hsl(203deg 100% 98%)',
    themeButtonBackground: 'transparent',
    // linkExternal: 'hsl(11deg 89% 55%)',
    // linkExternal: 'hsl(0deg 0% 100%)',
    // linkExternal: 'hsl(24deg 62% 55%)',
    linkExternal: 'hsl(41deg 39% 65%)',
    linkExternalVisited: 'hsl(41deg 39% 65%)',
    caption: 'hsl(17deg 39% 50%)',
    nudge: 'hsl(214, 37%, 30%)'
  }
});

const ageOfStarsTheme = createTheme({
  colors: {
    action: 'green',
    emojiDropShadow: 'hsl(0deg 0% 0%)',
    headerBackground: 'hsla(214, 65%, 9%, 80%)',
    primaryBackground: 'hsl(214, 65%, 9%)',
    imageContainerBackground: 'hsl(235, 100%, 5%)',
    imageContainerBorder: 'hsl(211, 49%, 13%)',
    primary: 'hsl(203deg 100% 98%)',
    themeButtonBackground: 'transparent',
    // linkExternal: 'hsl(11deg 89% 55%)',
    // linkExternal: 'hsl(0deg 0% 100%)',
    // linkExternal: 'hsl(24deg 62% 55%)',
    linkExternal: 'hsl(203, 100%, 71%)',
    linkExternalVisited: 'hsl(203, 100%, 71%)',
    caption: 'hsl(208, 34%, 73%)',
    nudge: 'hsl(214, 37%, 30%)'
  }
});

export const gradientShift = keyframes({
  '0%': { backgroundPosition: '0 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  'to': { backgroundPosition: '0 50%' },
});

export function getThemeClassName(theme: string) {
  switch (theme) {
    case 'psl':
      return pslTheme;
    case 'ageOfStars':
      return ageOfStarsTheme;
    default:
      return '';
  }
};