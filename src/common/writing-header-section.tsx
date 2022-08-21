import { ReactNode } from 'react';
import { styled } from '../../stitches.config'

const StyledWritingHeaderSection = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '20px',
});


export default function WritingHeaderSection({ children }: { children: ReactNode }) {
  return (
    <StyledWritingHeaderSection>
      {children}
    </StyledWritingHeaderSection>
  )
}