import Head from 'next/head'

export function HomeContent() {
  return (
    <div>
      <Head>
        <title>Journal as a Guide</title>
        <meta name="description" content="Writing words to connect with my feelings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Home
        </h1>
        <p>Wow, I really love cats</p>
      </main>
    </div>
  )
}