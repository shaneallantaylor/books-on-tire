import { buildUrl } from 'cloudinary-build-url';
import { getPlaiceholder } from 'plaiceholder';

export type OrientationModel = 'landscape' | 'portrait'

type ImageToGetModel = {
  name: string,
  orientation: OrientationModel
}

export type ImagePropsModel = {
  blurDataURL: string;
  fullsize: string;
  orientation: OrientationModel;
  thumbnail: string;
}

type ImageModel<Name extends string> = Record<Name, ImagePropsModel>

export type NamedImagePropsModel<Name extends string> = ImageModel<Name>;

export const getImages = async (imagesToGet: readonly ImageToGetModel[]): Promise<NamedImagePropsModel<typeof imagesToGet[number]['name']>> => (
  imagesToGet.reduce(async (result, { name, orientation }) => {

    const fullsizeURL = buildUrl(`books-on-tire/${name}`, {
      cloud: {
        cloudName: 'dk3ahfitr',
      },
      transformations: {
        rawTransformation: 'f_webp,q_auto'
      }
    });

    const thumbnailURL = buildUrl(`books-on-tire/${name}`, {
      cloud: {
        cloudName: 'dk3ahfitr',
      },
      transformations: {
        transformation: orientation === 'landscape' ? 'thumb_landscape' : 'thumb_portrait',
      }
    });

    const valueFromResultPromise = await result;
    const { base64 } = await getPlaiceholder(fullsizeURL);

    const newImageValues = {
      blurDataURL: base64,
      fullsize: fullsizeURL,
      orientation,
      thumbnail: thumbnailURL,
    }
    return {
      ...valueFromResultPromise,
      [name]: newImageValues,
    }

  }, {} as Promise<NamedImagePropsModel<''>>)
)