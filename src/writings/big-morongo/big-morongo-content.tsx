import Head from 'next/head'
import DropCap from '../../common/drop-cap'

export function BigMorongoContent() {
  return (
    <div>
      <Head>
        <title>Birds in the Desert in the Summer</title>
        <meta name="description" content="Writing words to sooth my feelings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Birds
        </h1>
        <DropCap text="Wow, I love cats" />
      </main>
    </div>
  )
}