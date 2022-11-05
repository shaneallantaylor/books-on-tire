import { getImages } from '../../src/lib/cloudinary/get-images';
import { CatGettingPage } from '../../src/writings/cat-getting';
import { imagesToGet } from '../../src/writings/cat-getting/constants';

export default CatGettingPage;

export async function getStaticProps() {

  const results = await getImages(imagesToGet);

  return {
    props: {
      images: results
    }
  }
}