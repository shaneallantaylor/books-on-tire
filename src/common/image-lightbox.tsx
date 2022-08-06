import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import { styled, keyframes } from '../../stitches.config';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'scale(.96)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
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
  padding: '40px 40px 26px',
  margin: '0 20px',
  position: 'relative',
  color: '#fefefe',
  fontSize: '0.9rem',
  minWidth: '90vw',

  '@medAndUp': {
    background: 'white',
    minWidth: '40vw',
    maxWidth: '62vw',
  },

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 0.5s cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'red',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: 'green' },
  '&:focus': { boxShadow: `0 0 0 2px blue` },
});

export default function ImageLightbox({
  children,
  description,
}: {
  children: React.ReactNode;
  description: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild style={{ cursor: 'pointer' }}>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay>
          <Content>
            <Dialog.Close asChild>
              <IconButton aria-label="Close">
                <Cross2Icon />
              </IconButton>
            </Dialog.Close>
            {children}
            <Dialog.Description>
              {description}
            </Dialog.Description>
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}