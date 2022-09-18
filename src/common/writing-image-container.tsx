import { ReactNode } from 'react';
import { styled } from '../../stitches.config'

const StyledWritingImageContainer = styled('div', {
  display: 'grid',
  gridGap: '20px',
  padding: '20px 20px 10px 20px',
  marginBottom: '20px',
  border: '1px solid $imageContainerBorder',
  background: '$imageContainerBackground',
  gridTemplateColumns: '1fr',
  variants: {
    columns: {
      '2': {
        '@smAndUp': {
          gridTemplateColumns: '1fr 1fr',
        }
      },
      '3': {
        '@medAndUp': {
          gridTemplateColumns: '1fr 1fr 1fr',
        }
      },
    },
  },
  'figcaption': {
    fontSize: '1rem',
    fontWeight: '200',
    color: '$caption',
    lineHeight: 1,
    paddingTop: '6px',
  }
});


export default function WritingImageContainer({ children, columns }: { children: ReactNode, columns: '2' | '3'; }) {
  return (
    <StyledWritingImageContainer columns={columns}>
      {children}
    </StyledWritingImageContainer>
  )
}