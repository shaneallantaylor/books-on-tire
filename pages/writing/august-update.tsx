import { getImages } from '../../src/lib/cloudinary/get-images';
import { imagesToGet } from '../../src/writings/august-update/constants';
import { AugustUpdatePage } from '../../src/writings/august-update';

export default AugustUpdatePage;

export async function getStaticProps() {

  const results = await getImages(imagesToGet);

  return {
    props: {
      images: results
    }
  }
}