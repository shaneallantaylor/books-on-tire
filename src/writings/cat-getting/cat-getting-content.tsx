import Head from 'next/head'

import { styled } from '../../../stitches.config'

const HeaderSection = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '20px',
});

export function CatGettingContent() {
  return (
    <div>
      <Head>
        <title>How We Got A Cate</title>
        <meta name="description" content="Writing to share" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeaderSection>
          <h1>
            Cat is Scary; Cat is Fun.
          </h1>
        </HeaderSection>
        <p>We've both wanted a cat for a long time. We are finally getting one. We're nervous about fucking things up. But I think we'll be okay because we'll support each other.</p>
        <p>Cat's name is [redacted]!</p>
      </main>
    </div>
  )
}