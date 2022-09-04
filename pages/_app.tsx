import type { AppProps } from 'next/app'
import Layout from '../src/common/layout';
import { globalStyles } from '../src/styles/global';
import { ThemeProvider } from '../src/context/theme-context';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
