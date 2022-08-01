import type { AppProps } from 'next/app'
import Header from '../src/common/header';
import Footer from '../src/common/footer';
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
      <Footer />
    </>
  )
}

export default MyApp
