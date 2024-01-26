import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/almosttheband">Almost - The Band</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/almosttheband/gallery">Gallery</Nav.Link>
            <Nav.Link href="/almosttheband/about">About</Nav.Link>
            <Nav.Link href="/almosttheband/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;