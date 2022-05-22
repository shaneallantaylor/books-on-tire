import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />
}

export default MyApp
