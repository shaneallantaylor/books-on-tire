import type { AppProps } from 'next/app'
import Header from '../src/common/header';
import Layout from '../src/common/layout';
import { globalStyles } from '../src/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
