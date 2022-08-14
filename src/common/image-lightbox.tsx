import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';

import { styled, keyframes } from '../../stitches.config';
import type { OrientationModel } from '../lib/cloudinary/get-images';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});


const Overlay = styled(Dialog.Overlay, {
  background: 'rgba(0, 0, 0, 0.80)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'grid',
  placeItems: 'center',

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 0.4s cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const Content = styled(Dialog.Content, {
  background: '#121212',
  padding: '20px',
  lineHeight: 0,
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 40,
  width: 40,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  position: 'absolute',
  cursor: 'pointer',
  top: 20,
  right: 20,
  transition: 'all 0.3s ease',
  border: '1px solid white',

  '&:hover': { backgroundColor: 'black', border: '1px solid #bd5b5b', color: '#bd5b5b' },
});

export default function ImageLightbox({
  children,
  orientation,
  srcLink,
}: {
  children: React.ReactNode;
  orientation: OrientationModel
  srcLink: string;
}) {

  const isLandscape = orientation === 'landscape';

  const size = isLandscape ? {
    height: 1536,
    width: 2048
  } : {
    height: 4032,
    width: 3024
  };

  const maxWidth = isLandscape ? {
    base: '90vw',
    smAndUp: '90',
    medAndUp: '90vw',
    lgAndUp: '62vw'
  } : {
    base: '90vw',
    smAndUp: '70vw',
    medAndUp: '50vw',
    lgAndUp: '38vw'
  }



  return (
    <Dialog.Root>
      <Dialog.Trigger asChild style={{ cursor: 'pointer' }}>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay>
          <Content
            css={{
              maxWidth: maxWidth.base, // smallest - portrait
              '@smAndUp': {
                maxWidth: maxWidth.smAndUp, // small - portrait
              },
              '@medAndUp': {
                maxWidth: maxWidth.medAndUp, // med - portrait
              },
              '@lgAndUp': {
                //   background: 'white',
                //   minWidth: '40vw',
                // maxWidth: '62vw', // landscape
                maxWidth: maxWidth.lgAndUp,
              },
            }}>
            <Dialog.Close asChild>
              <IconButton aria-label="Close">
                <Cross2Icon height={20} width={20} />
              </IconButton>
            </Dialog.Close>
            <div>
              <Image
                src={srcLink}
                height={size.height}
                width={size.width}
              />
            </div>
            {/* <Dialog.Description>
              {description}
            </Dialog.Description> */}
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}