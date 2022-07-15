import Link from "next/link";

export default function Header() {

  const headerStyles = {
    height: '72px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'saturate(180%) blur(20px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottom: '1px solid black',
    // boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    padding: '0 20px',
    position: 'fixed',
    top: 0,
  };

  const pStyles = {
    padding: 0,
  }

  return (
    <header style={headerStyles}>
      <p style={pStyles}>Vade Mecum</p>
      <nav>
        <Link href="/">
          Home
        </Link>
      </nav>
    </header>
  )
}