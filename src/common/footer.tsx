import { styled } from "../../stitches.config";

export default function Footer() {

  const FooterContainer = styled('footer', {
    height: '72px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
    marginTop: '20px',
  })

  const FooterP = styled('p', {
    padding: 0,
  })

  return (
    <FooterContainer>
      <FooterP>Thanks for reading! Bye 👋🏻</FooterP>
      <nav>
      </nav>
    </FooterContainer>
  )
}