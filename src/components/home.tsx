import Head from 'next/head'
import Link from 'next/link'
import FirstParagraph from './first-paragraph'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Journal as a Guide</title>
        <meta name="description" content="Writing words to sooth my feelings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Home Page
        </h1>
        <FirstParagraph text="Wow, I love cats" />
      </main>
      <Link href='/first'>Go to first</Link>
    </div>
  )
}