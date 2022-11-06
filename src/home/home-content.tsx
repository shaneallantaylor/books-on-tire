import Head from 'next/head'
import Link from 'next/link'
import { styled } from '../../stitches.config'

const HomeSection = styled('section', {
  marginBottom: '40px',
})


const BlogRoll = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '20px',
  borderTopLeftRadius: '0',
  borderBottomLeftRadius: '0',
  transition: 'all 0.3s ease',
  position: 'relative',
  '&::before': {
    content: '',
    position: 'absolute',
    height: '0%',
    width: '1px',
    background: 'tomato',
    top: '0',
    left: '0',
    transition: 'height 0.3s ease',
  },
  '& a:first-child': {
    gridArea: '1 / 1 / 1 / 3',
    '& h4': {
      fontSize: '1.75rem',
    },
    '& p': {
      fontSize: '1.5rem',
    },
  },
  '& a': {
    padding: '20px',
    color: 'aliceblue',
    textDecoration: 'none',
    display: 'grid',
    transition: 'border 0.4s ease',
    '& h4': {
      marginBottom: '10px',
      fontSize: '1.3rem',
      transition: 'all 0.3s ease',
      position: 'relative',
      // color: '',
      '&::before': {
        content: '',
        width: '0%',
        height: '1px',
        background: 'tomato',
        position: 'absolute',
        bottom: '0',
        left: '0',
        transition: 'width 0.3s ease',
      },
    },
    '& p': {
      fontStyle: 'italic',
      padding: '0',
      marginBottom: '10px',
      fontSize: '1.1rem',
      color: 'lightgray',
      transition: 'color 0.3s ease',
    },
    '&:hover h4': {
      color: 'tomato',
    },
    '&:hover p': {
      color: 'aliceblue',
    },
    '&:hover h4::before': {
      width: '90%',
    },
  },
});

const WorkRoll = styled('ul', {
  listStyle: 'none',
  display: 'grid',
  padding: '0',
  gridTemplateColumns: '1fr',
  gridAutoRows: '400px',
  gridGap: '40px',
  '& figure': {
    cursor: 'pointer',
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    boxShadow: '0px 0px 20px -20px white',
    transition: 'all 0.3s ease',
    '&:hover h3': {
      background: 'hsla(0, 0%, 0%, 60%)',
    },
    '&:hover figcaption': {
      background: 'hsla(0, 0%, 0%, 60%)',
    },
    '&::before': {
      content: '',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      background: 'hsla(0, 0%, 0%, 60%)',
      opacity: '0',
      transition: 'opacity 0.4s ease',
    },
    '&:hover::before': {
      opacity: '0',
    },
    '& h3': {
      position: 'absolute',
      top: '0',
      left: '0',
      borderTopLeftRadius: '6px',
      borderTopRightRadius: '6px',
      width: '100%',
      padding: '0 24px',
      fontSize: '1.60rem',
      fontWeight: '300',
      textAlign: 'center',
      background: 'hsla(0, 0%, 0%, 0%)',
      transition: 'background 0.3s ease',
    },
    '& figcaption': {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      textAlign: 'center',
      padding: '5px 24px',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
    },
  },
  '@lgAndUp': {
    gridTemplateColumns: '1fr 1fr 1fr',
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

      <HomeSection>
        <h2>
          Writings
        </h2>
        <BlogRoll>
          <Link href="/writing/cat-getting">
            <h4>We Got A Cat!</h4>
            <p>We've both wanted a cat for a long time. We're nervous about fucking things up. But I think we'll be okay because we'll support each other.</p>
          </Link>
          <Link href="/writing/august-update">
            <h4>Bird Walks Between Two Deserts</h4>
            <p>In the middle of July, Alyssa and I went to Joshua Tree and visited the Big Morongo Canyon Preserve to check out the summer birds. It was beautiful and relaxing. We stayed at a cozy house a few...</p>
          </Link>
        </BlogRoll>
      </HomeSection>

      {/* <HomeSection>
        <h2>Professional Things</h2>
        <WorkRoll>
          <li>
            <Link href="/">
              <figure>
                <h3>Disney+</h3>
                <Image
                  style={{ zIndex: '-1' }}
                  src='https://res.cloudinary.com/dk3ahfitr/image/upload/v1663456383/books-on-tire/dplus-logo.png'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
                <figcaption>Commerce / TypeScript / NextJS</figcaption>
              </figure>
            </Link>
          </li>
          <li>
            <Link href="/">
              <figure>
                <h3>GLAAD</h3>
                <Image
                  style={{ zIndex: '-1' }}
                  className='work-image'
                  src='https://res.cloudinary.com/dk3ahfitr/image/upload/v1663456383/books-on-tire/glaad-logo.png'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
                <figcaption>Advocacy / HTML/jQuery / Drupal 7</figcaption>
              </figure>
            </Link>
          </li>
          <li>
            <Link href="/">
              <figure>
                <h3>Lettuce Grow</h3>
                <Image
                  style={{ zIndex: '-1' }}
                  src='https://res.cloudinary.com/dk3ahfitr/image/upload/v1663456383/books-on-tire/lettuce-grow-logo.png'
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                />
                <figcaption>Commerce / React / Redux</figcaption>
              </figure>
            </Link>
          </li>
        </WorkRoll>
      </HomeSection> */}


    </>
  )
}