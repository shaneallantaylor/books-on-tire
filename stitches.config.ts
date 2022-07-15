import { createStitches } from '@stitches/react';

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
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
    fonts: {
      nice: 'Inter, serif, apple-system, sans-serif',
      code: 'Söhne Mono, menlo, monospace',
    },
    fontSizes: {
    }
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