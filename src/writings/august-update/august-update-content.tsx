import Head from 'next/head'

import Image from 'next/image'
import { styled } from '../../../stitches.config';
import ImageLightbox from '../../common/image-lightbox'
import WritingHeaderSection from '../../common/writing-header-section';
import WritingImageContainer from '../../common/writing-image-container';
import type { ImagePropsModel } from '../../lib/cloudinary/get-images';

const StyledList = styled('ul', {
  '& a': {
    fontSize: '1.25rem'
  }
})

const dictionary = {
  hammockViewAlt: 'Clear blue skies over a desert landscape with two hammock posts in the foreground.',
  inHammocksAlt: 'The faces of author and his partner laying back in hammocks, each face is not fully in frame. The author did his best taking this photo, but his partner was not impressed.',
  bridgeInMequiteAlt: 'Bridge Party.',
  alyssaLookingAlt: 'Alyssa looking for a bird.',
  anotherEdgeAlt: 'The Northern edge of the Preserve.',
  deerDeepAlt: 'A deer deep in the Preserve.',
  theHillsAlt: "The hills to the West of the Preserve. Cameo by Alyssa's head.",
  lookingAtThePreserveAlt: 'The Preserve from the outside.'
}

export function AugustUpdateContent({ images }: { images: ImagePropsModel }) {

  function BlogImageByName({
    name,
    alt,
    caption,
    priority = false
  }: {
    name: string;
    alt: string;
    caption: string;
    priority?: boolean;
  }) {
    const { blurDataURL, fullsize, orientation, thumbnail } = images[name];

    const thumbnailSize = orientation === 'landscape' ? {
      height: 614,
      width: 818,
    } : {
      height: 710,
      width: 532
    }

    return (
      <figure>
        <ImageLightbox
          orientation={orientation}
          srcLink={fullsize}
          blurDataURL={blurDataURL}
        >
          <Image
            src={thumbnail}
            alt={alt}
            height={thumbnailSize.height}
            width={thumbnailSize.width}
            layout="responsive"
            priority={priority}
          />
        </ImageLightbox>
        <figcaption>{caption}</figcaption>

      </figure>
    )
  }


  return (
    <>
      <Head>
        <title>August 2022 Update</title>
        <meta name="description" content="Writing to share" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WritingHeaderSection>
        <h1>
          Bird Walks Between Two Deserts
        </h1>
      </WritingHeaderSection>
      <p>In the middle of July, Alyssa and I went to Joshua Tree and visited the <a href='https://www.bigmorongo.org/' target='_blank' rel='noopener noreferrer'>Big Morongo Canyon Preserve</a> to check out the summer birds. It was beautiful and relaxing.</p>
      <p>We stayed at a cozy house a few miles north of Joshua Tree in the town of <a href='https://en.wikipedia.org/wiki/Landers,_California' target='_blank' rel='noopener noreferrer'>Landers, CA</a>. It had a great air conditioning system and a pair of hammocks that Alyssa and I used daily.</p>
      <WritingImageContainer columns='2'>
        <BlogImageByName
          name='view-from-hammocks'
          alt={dictionary.hammockViewAlt}
          caption='View from the hammocks.'
          priority={true}
        />
        <BlogImageByName
          name='us-in-hammocks'
          alt={dictionary.inHammocksAlt}
          caption='Alyssa and I enjoying the hammocks.'
        />
      </WritingImageContainer>
      <p>To avoid the worst of the heat, Alyssa and I made it to Big Morongo Canyon Preserve each morning by 8am. Thankfully, most of the trails in the Preserve have a lot of shade under the huge trees. We would usually spend two hours in the preserve, exploring the trail and getting lost in the songs of the birds.</p>
      <p>Our last morning at the Preserve was a Wednesday, which is also the day that the local birdwatching group hosts a <a href='https://www.bigmorongo.org/bird-walks/' target='_blank' rel='noopener noreferrer'>Bird Walk!</a> It's open to new bird nerds, so Alyssa and I joined and made some new friends. Every local bird watcher was over 50 years old and happy to share their knowledge and stories about the Preserve. One man told us about the hazard of pointing out nests while on the Bird Walk. He said that the <a href='https://www.allaboutbirds.org/guide/California_Scrub-Jay/overview' target='_blank' rel='noopener noreferrer'>California Scrub-Jays</a> would often follow the bird-watching group and would go search for nests of other birds in the places we pointed to! As predatory as they are, it's also facisinating that the Scrub-Jays are smart enough to follow the humans around and investigate what we point to. Birds are wild.</p>
      <p>I didn't take many pictures while we were there, but I managed to remember to take a few one day while we were in the Preserve. Most of these were taken while we were on the <a href='https://www.bigmorongo.org/trails/mesquite-trail/' target='_blank' rel='noopener noreferrer'>Mesquite Trail</a> on Tuesday, July 12th, 2022.</p>
      <WritingImageContainer columns='3'>
        <BlogImageByName
          name='bridge-in-mesquite'
          alt={dictionary.bridgeInMequiteAlt}
          caption='A small brdige on Mesquite Trail.'
        />
        <BlogImageByName
          name='looking-for-bird'
          alt={dictionary.alyssaLookingAlt}
          caption='Alyssa looking for a bird.'
        />
        <BlogImageByName
          name='northern-edge'
          alt={dictionary.anotherEdgeAlt}
          caption='The Northern edge of the Preserve.'
        />
        <BlogImageByName
          name='deer-deep'
          alt={dictionary.deerDeepAlt}
          caption='A deer deep in the Preserve.'
        />
        <BlogImageByName
          name='hill-west'
          alt={dictionary.theHillsAlt}
          caption="The hills to the West of the Preserve. Cameo by Alyssa's head."
        />
        <BlogImageByName
          name='view-from-outside'
          alt={dictionary.lookingAtThePreserveAlt}
          caption='The Preserve from the outside.'
        />
      </WritingImageContainer>
      <p>If you read this far, you <i>may</i> be interested in the birds that we saw while on the trip. While we didn't take any pictures of the birds ourselves (I don't have the patience or the equipment), other fine folks have taken plenty of pictures of all sorts of birds. Here's what we saw, with links to more details if you're into that sort of thing:</p>
      <StyledList>
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
      </StyledList>
    </>
  )
}