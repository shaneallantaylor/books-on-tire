import type { AppProps } from 'next/app'
import Header from '../src/common/header';
import Footer from '../src/common/footer';
import Layout from '../src/common/layout';
import { globalStyles } from '../src/styles/global';
import { ThemeProvider } from '../src/context/theme-context';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <ThemeProvider>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
