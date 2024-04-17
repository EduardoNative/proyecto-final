import { Navbar, Container, Nav } from "react-bootstrap";

export const NavbarTop = () => {
  return (
    <Navbar fixed-top>
      <Container>
        <Navbar.Brand href="/home">HOME</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/historia">Historia</Nav.Link>
          <Nav.Link href="/personajes">Personajes</Nav.Link>
          <Nav.Link href="/logout">Cerrar Sesion</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};