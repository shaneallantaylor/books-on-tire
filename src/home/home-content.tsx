import Head from 'next/head'
import Link from 'next/link'
import { styled } from '../../stitches.config'




const BlogRoll = styled('div', {
  display: 'grid',
  '& a': {
    // border: '2px solid black',
    borderRadius: '6px',
    padding: '20px',
    color: 'aliceblue',
    textDecoration: 'none',
    display: 'grid',

    '& h4': {
      marginBottom: '10px',
    },

    '& p': {
      fontStyle: 'italic',
      padding: '0',
      marginBottom: '10px',
    },

  }
})

export function HomeContent() {
  return (
    <>
      <Head>
        <title>Journal as a Guide</title>
        <meta name="description" content="Writing words to connect with my feelings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Stuff and Things
      </h1>
      <BlogRoll>
        <Link href="/august-update">
          <a>
            <h4>Bird Walks Between Two Deserts</h4>
            <p>In the middle of July, Alyssa and I went to Joshua Tree and visited the Big Morongo Canyon Preserve to check out the summer birds. It was beautiful and relaxing. We stayed at a cozy house a few...</p>

          </a>
        </Link>
      </BlogRoll>
    </>
  )
}

// MOST RECENT

// PREV // PREV