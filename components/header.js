import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Navbar, Container, Nav } from 'react-bootstrap'
import styles from './header.module.css';
import './header.module.css'

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const [session, loading] = useSession()

  return (
    <>
      <style type="text/css"> {
        `
        #basic-navbar-nav {
          position: absolute;
          right: 20px;
        }
        `
      }

      </style>

      
        {/* <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Admin Page</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Hello</Nav.Link>
                <Nav.Link href="/">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
    
    </>

  )
}
