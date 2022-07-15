import { ReactNode } from 'react';
import { styled } from '../../stitches.config'

const StyledContainer = styled('div', {
  minHeight: '100%',
  padding: '72px 60px 0',
  maxWidth: '1000px',
  margin: '0 auto',
});


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}