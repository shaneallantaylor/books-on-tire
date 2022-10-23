import { getImages } from '../../src/lib/cloudinary/get-images';
import { AugustUpdatePage } from '../../src/writings/august-update';

export default AugustUpdatePage;

export async function getStaticProps() {

  const results = await getImages([
    {
      name: 'view-from-hammocks',
      orientation: 'landscape'
    },
    {
      name: 'us-in-hammocks',
      orientation: 'landscape'
    },
    {
      name: 'bridge-in-mesquite',
      orientation: 'portrait'
    },
    {
      name: 'looking-for-bird',
      orientation: 'portrait'
    },
    {
      name: 'northern-edge',
      orientation: 'portrait'
    },
    {
      name: 'deer-deep',
      orientation: 'landscape'
    },
    {
      name: 'hill-west',
      orientation: 'landscape'
    },
    {
      name: 'view-from-outside',
      orientation: 'landscape'
    },
  ]);

  return {
    props: {
      images: results
    }
  }
}