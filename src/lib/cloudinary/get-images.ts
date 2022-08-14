import { buildUrl } from 'cloudinary-build-url';

export type OrientationModel = 'landscape' | 'portrait'

type ImageToGetModel = {
  name: string,
  orientation: OrientationModel
}

export type ImagePropsModel = Record<string, {
  thumbnail: string;
  fullsize: string;
  orientation: OrientationModel;
}>

export const getImages = (imagesToGet: ImageToGetModel[]): ImagePropsModel => (
  imagesToGet.reduce((result, { name, orientation }) => {
    result[name] = {
      thumbnail: buildUrl(`books-on-tire/${name}`, {
        cloud: {
          cloudName: 'dk3ahfitr',
        },
        transformations: {
          transformation: orientation === 'landscape' ? 'thumb_landscape' : 'thumb_portrait',
        }
      }),
      fullsize: buildUrl(`books-on-tire/${name}`, {
        cloud: {
          cloudName: 'dk3ahfitr',
        },
        transformations: {
          rawTransformation: 'f_webp,q_auto'
        }
      }),
      orientation,
    }

    return result

  }, {} as ImagePropsModel)
)