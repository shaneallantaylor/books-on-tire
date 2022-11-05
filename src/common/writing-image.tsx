import Image from 'next/image'

import { ImagePropsModel } from "../lib/cloudinary/get-images";
import { ImageLightbox } from './index'

export default function WritingImage({
  image,
  alt,
  caption,
  priority = false
}: {
  image: ImagePropsModel;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  const { blurDataURL, fullsize, orientation, thumbnail } = image;

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