import { ReactNode } from 'react';
import { styled } from '../../stitches.config'
import Footer from './footer';
import Header from './header';

const StyledMain = styled('main', {
  minHeight: '100%',
  padding: '72px 60px 0',
  maxWidth: '1000px',
  margin: '0 auto',
  color: 'whitesmoke',
});

// TODO: Theme className can go on this component.
const StyleApplicator = styled('div', {
  letterSpacing: '0.3px',
  lineHeight: "1.5",
  fontSmoothing: "antialiased",
  fontFamily: "$nice",
  color: 'whitesmoke',
})


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <StyleApplicator>
      <Header />
      <StyledMain>
        {children}
      </StyledMain>
      <Footer />
    </StyleApplicator>
  )
}