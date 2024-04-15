import { Navbar, Container, Nav } from "react-bootstrap";

export const NavbarTop = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home">HOME</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/historia">Historia</Nav.Link>
          <Nav.Link href="/personajes">Personajes</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
