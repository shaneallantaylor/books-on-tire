import Head from 'next/head'
import Image from 'next/image'
import hammockView from '../../../public/august-update/hammock-view.jpg'
import inHammocks from '../../../public/august-update/in-hammocks.jpg'
import bridgeInMequite from '../../../public/august-update/bridge-in-the-preserve.jpg'
import deerDeep from '../../../public/august-update/deer-deep-in-the-preserve.jpg'
import anotherEdge from '../../../public/august-update/another-edge-of-the-preserve.jpg'
import alyssaLooking from '../../../public/august-update/edge-of-the-preserve.jpg'
import theHills from '../../../public/august-update/just-outside-the-preserve.jpg'
import lookingAtThePreserve from '../../../public/august-update/looking-at-the-preserve.jpg'
import { styled } from '../../../stitches.config'

const HeaderSection = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '20px',
});

const ImageContainer = styled('div', {
  display: 'grid',
  gridGap: '20px',
  padding: '20px 20px 10px 20px',
  marginBottom: '20px',
  border: '1px solid grey',
  background: 'lightyellow',
  variants: {
    columns: {
      '2': {
        gridTemplateColumns: '1fr 1fr',
      },
      '3': {
        gridTemplateColumns: '1fr 1fr 1fr',
      },
    },
  },
  'figcaption': {
    fontSize: '12px',
    color: 'grey',
    lineHeight: 1,
  }
});

export function AugustUpdateContent() {
  return (
    <div>
      <Head>
        <title>August 2022 Update</title>
        <meta name="description" content="Writing to share" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeaderSection>
          <h1>
            Bird Walks Between Two Deserts
          </h1>
        </HeaderSection>
        <p>In the middle of July, Alyssa and I went to Joshua Tree and visited the <a href='https://www.bigmorongo.org/' target='_blank' rel='noopener noreferrer'>Big Morongo Canyon Preserve</a> to check out the summer birds. It was beautiful and relaxing.</p>
        <p>We stayed at a cozy house a few miles north of Joshua Tree in the town of <a href='https://en.wikipedia.org/wiki/Landers,_California' target='_blank' rel='noopener noreferrer'>Landers, CA</a>. It had a great air conditioning system and a pair of hammocks that Alyssa and I used daily.</p>
        <ImageContainer columns='2'>
          <figure>
            <Image
              src={hammockView}
              alt='Clear blue skies over a desert landscape with two hammock posts in the foreground.'
              onClick={() => alert('you clicked')}
            />
            <figcaption>View from the hammocks.</figcaption>
          </figure>
          <figure>
            <Image
              src={inHammocks}
              alt='The faces of author and his partner laying back in hammocks, each face is not fully in frame. The author did his best taking this photo, but his partner was not impressed.'
              onClick={() => alert('you clicked')}
            />
            <figcaption>Alyssa and I enjoying the hammocks.</figcaption>
          </figure>
        </ImageContainer>
        <p>To avoid the worst of the heat, Alyssa and I made it to Big Morongo Canyon Preserve each morning by 8am. Thankfully, most of the trails in the Preserve have a lot of shade under the huge trees. We would usually spend two hours in the preserve, exploring the trail and getting lost in the songs of the birds.</p>
        <p>Our last morning at the Preserve was a Wednesday, which is also the day that the local birdwatching group hosts a <a href='https://www.bigmorongo.org/bird-walks/' target='_blank' rel='noopener noreferrer'>Bird Walk!</a> It's open to new bird nerds, so Alyssa and I joined and made some new friends. Every local bird watcher was over 50 years old and happy to share their knowledge and stories about the Preserve. One man told us about the hazard of pointing out nests while on the Bird Walk. He said that the <a href='https://www.allaboutbirds.org/guide/California_Scrub-Jay/overview' target='_blank' rel='noopener noreferrer'>California Scrub-Jays</a> would often follow the bird-watching group and would go search for nests of other birds in the places we pointed to! As predatory as they are, it's also facisinating that the Scrub-Jays are smart enough to follow the humans around and investigate what we point to. Birds are wild.</p>
        <p>I didn't take many pictures while we were there, but I managed to remember to take a few one day while we were in the Preserve. Most of these were taken while we were on the <a href='https://www.bigmorongo.org/trails/mesquite-trail/' target='_blank' rel='noopener noreferrer'>Mesquite Trail</a> on Tuesday, July 12th, 2022.</p>
        <ImageContainer columns='3'>
          <figure>
            <Image
              src={bridgeInMequite}
              alt='...'
              onClick={() => alert('you clicked')}
            />
            <figcaption>A small brdige on Mesquite Trail.</figcaption>
          </figure>
          <figure>
            <Image
              src={alyssaLooking}
              alt='...'
              onClick={() => alert('you clicked')}
            />
            <figcaption>Alyssa looking for a bird.</figcaption>
          </figure>
          <figure>
            <Image
              src={anotherEdge}
              alt='...'
              onClick={() => alert('you clicked')}
            />
            <figcaption>The Northern edge of the Preserve.</figcaption>
          </figure>
          <figure>
            <Image
              src={deerDeep}
              alt='...'
              onClick={() => alert('you clicked')}
            />
            <figcaption>A deer deep in the Preserve.</figcaption>
          </figure>
          <figure>
            <Image
              src={theHills}
              alt='...'
              onClick={() => alert('you clicked')}
            />
            <figcaption>The hills to the West of the Preserve. Cameo by Alyssa's head.</figcaption>
          </figure>
          <figure>
            <Image
              src={lookingAtThePreserve}
              alt='...'
              onClick={() => alert('you clicked')}
            />
            <figcaption>The Preserve from the outside.</figcaption>
          </figure>
        </ImageContainer>
        <p>If you read this far, you <i>may</i> be interested in the birds that we saw while on the trip. While we didn't take any pictures of the birds ourselves (I don't have the patience or the equipment), other fine folks have taken plenty of pictures of all sorts of birds. Here's what we saw, with links to more details if you're into that sort of thing:</p>
        <ul>
          <li><a href='https://www.allaboutbirds.org/guide/Vermilion_Flycatcher/overview' target='_blank' rel='noopener noreferrer'>Vermilion Flycatcher</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Yellow_Warbler/overview' target='_blank' rel='noopener noreferrer'>Yellow Warbler</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Summer_Tanager/overview' target='_blank' rel='noopener noreferrer'>Summer Tanger</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Black_Phoebe/overview' target='_blank' rel='noopener noreferrer'>Black Pheobe</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Bullocks_Oriole/overview' target='_blank' rel='noopener noreferrer'>Bullock's Oriole</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Hooded_Oriole/overview' target='_blank' rel='noopener noreferrer'>Hooded Oriole</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/California_Scrub-Jay/overview' target='_blank' rel='noopener noreferrer'>California Scrub-Jay</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/California_Thrasher/overview' target='_blank' rel='noopener noreferrer'>California Thrasher</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/American_Crow/overview' target='_blank' rel='noopener noreferrer'>American Crow</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Black-headed_Grosbeak/overview' target='_blank' rel='noopener noreferrer'>Black-headed Grosbeak</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Verdin/overview' target='_blank' rel='noopener noreferrer'>Verdin</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Bewicks_Wren/overview' target='_blank' rel='noopener noreferrer'>Bewick's Wren</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Bells_Vireo/overview' target='_blank' rel='noopener noreferrer'>Bell's Vireo</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Coopers_Hawk/overview' target='_blank' rel='noopener noreferrer'>Cooper's Hawk</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Gambels_Quail/overview' target='_blank' rel='noopener noreferrer'>Gambel's Quail</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/White-winged_Dove/overview' target='_blank' rel='noopener noreferrer'>White-winged Dove</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Brown-headed_Cowbird/overview' target='_blank' rel='noopener noreferrer'>Brown-headed Cowbird</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Western_Bluebird/overview' target='_blank' rel='noopener noreferrer'>Western Bluebird</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Oak_Titmouse/overview' target='_blank' rel='noopener noreferrer'>Oak Titmouse</a></li>
          <li><a href='https://www.allaboutbirds.org/guide/Black-throated_Sparrow/overview' target='_blank' rel='noopener noreferrer'>Black-throated Sparrow</a></li>
        </ul>
      </main>
    </div>
  )
}