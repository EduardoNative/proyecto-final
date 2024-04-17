import { Image, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import morty from "../assets/morty.jpg";

export const Home = () => {
  return (
    <Container fluid>
      <Col>
      <svg  width="50" height="16%" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
</svg>
        <h1>Bienvenido a la pagina de</h1>
        <h1>RICKAND MORTY</h1>
        <Image className="Image1" src={morty} roundedCircle />
        <h1>By Eduardo</h1>
      </Col>
    </Container>
  );
};
