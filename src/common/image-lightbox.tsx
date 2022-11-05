import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Image from 'next/image';

import { styled, keyframes } from '../../stitches.config';

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

const ImageContainer = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '0',
  height: '80vh',
  width: '100%',
  transform: 'translateY(-50%)',
})

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
  zIndex: 1,
  transition: 'all 0.3s ease',
  border: '1px solid white',

  '&:hover': { backgroundColor: 'black', border: '1px solid #bd5b5b', color: '#bd5b5b' },
});

export default function ImageLightbox({
  children,
  srcLink,
  blurDataURL,
}: {
  children: React.ReactNode;
  srcLink: string;
  blurDataURL: string;
}) {

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild style={{ cursor: 'pointer' }}>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay>
          <Dialog.Content>
            <Dialog.Close asChild>
              <IconButton aria-label="Close">
                <Cross2Icon height={20} width={20} />
              </IconButton>
            </Dialog.Close>
            <ImageContainer>
              <Image
                src={srcLink}
                placeholder='blur'
                blurDataURL={blurDataURL}
                alt=''
                fill={true}
                style={{ objectFit: 'contain' }}
              />
            </ImageContainer>
          </Dialog.Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}