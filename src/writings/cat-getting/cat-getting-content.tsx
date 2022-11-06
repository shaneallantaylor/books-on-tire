import Head from 'next/head'

import { styled } from '../../../stitches.config';
import { WritingHeaderSection, WritingImageContainer, WritingImage } from '../../common/';
import { NamedImagePropsModel } from '../../lib/cloudinary/get-images';
import { CatImageNames, dictionary } from './constants';

const StyledList = styled('ul', {
  marginBottom: '10px',
  fontSize: '1.25rem',
  '& a': {
    fontSize: '1.25rem'
  }
})


export function CatGettingContent({ images }: { images: NamedImagePropsModel<CatImageNames> }) {
  return (
    <div>
      <Head>
        <title>The Cat Life</title>

        <meta property="og:title" content="The Cat Life" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="We've both wanted a cat for a long time. We've been nervous about fucking things up." />
        <meta property="og:image" content="https://res.cloudinary.com/dk3ahfitr/image/upload/v1667766124/books-on-tire/og_image_books_on_tire_jomhnk.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WritingHeaderSection>
          <h1>
            Cat is Scary; Cat is Fun!
          </h1>
        </WritingHeaderSection>
        <p>We've both wanted a cat for a long time. We've been nervous about fucking things up. But I think we'll be okay because we'll support each other.</p>
        <p>We finally got a cat and her name is <b>Squish</b>!</p>
        <p>Squish is a six-year-old cat with solid black fur. She is timid, food-driven, and ready to play at any time. She had some signs of fleas/worms in her first week with us, so she quickly became acquainted with a new veterinarian. She did so well in her cat carrier and during her visit with the vet. She is a fucking champ.</p>
        <WritingImageContainer columns='2'>
          <WritingImage
            image={images['squish-day2']}
            alt={dictionary.squishDay2Alt}
            caption='The second day in her new home, she journeyed out of her safety cave and looked at us.'
            priority={true}
          />
          <WritingImage
            image={images['squish-vet']}
            alt={dictionary.squishVetAlt}
            caption="During her first visit to the Vet with us, she curled up on Alyssa's shoulder for safety."
            priority={true}
          />
        </WritingImageContainer>
        <p>What we did to prepare:</p>
        <StyledList>
          <li>Get a fancy litter box (Litter-Robot)</li>
          <li>Get a fancy automatic feeder</li>
          <li>Get a water bowl</li>
          <li>Get a cat carrier</li>
          <li>Get a cat bag (<i>yes</i>, <a href='https://www.cat-in-the-bag.com/' target='_blank' rel='noopener noreferrer'>they are different</a>)</li>
          <li><b>Build</b> a litter station</li>
          <li>Get <i>too many</i> cat toys</li>
          <li>Become convinced we cannot handle caring for a cat</li>
        </StyledList>

        <WritingImageContainer columns='3'>
          <WritingImage
            image={images['squish-arm']}
            alt={dictionary.squishArmAlt}
            caption='After about two months Squish feels comfortable commandeering my shoulder/arm/wrist as her personal perch.'
          />
          <WritingImage
            image={images['squish-berg']}
            alt={dictionary.squishBergAlt}
            caption="Ruth Bader Squishburg's Supreme Court confirmation photo"
          />
          <WritingImage
            image={images['squish-play']}
            alt={dictionary.squishPlayAlt}
            caption='High out of her mind and playing'
          />
        </WritingImageContainer>

        <p>What we have done since adopting Squish:</p>
        <StyledList>
          <li>Get a slow-feeder for Squish's dry food and wet food</li>
          <li><b>Make</b> an extension for her fancy automatic feeder so it can work with the dry food slow-feeder</li>
          <li><b>Crochet</b> toys for her, including a <a href='https://www.imdb.com/title/tt0096283/' target='_blank' rel='noopener noreferrer'>Totoro</a>, a basketball, and a training ball</li>
          <li>Project <i>all of our feelings</i> onto her</li>
          <li>Discover that the cat bag may not be amazing for her</li>
          <li>Lose valuable bed space to her entitled ass ploping down in the goddamn middle of the fucking bed</li>
          <li><b>Knit</b> her a snug cat bed, which we call her bucket</li>
          <li>Confirm that caring for a cat brings up all sorts of childhood trauma</li>
        </StyledList>

      </main>
    </div>
  )
}