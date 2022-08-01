import Link from "next/link";
import { styled } from "../../stitches.config";

export default function Header() {

  const HeaderContainer = styled('header', {
    height: '72px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'saturate(180%) blur(20px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    position: 'fixed',
    top: 0,
    zIndex: 1,
  })

  const HeaderP = styled('p', {
    padding: 0,
  })

  return (
    <HeaderContainer>
      <HeaderP>Stuff I Wrote</HeaderP>
      <nav>
      </nav>
    </HeaderContainer>
  )
}