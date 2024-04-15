import { Image, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import morty from "../assets/morty.jpg";

export const Home = () => {
  return (
    <Container fluid>
      <Col>
        <h1>Bienvenido a la pagina de</h1>
        <h1>RICKAND MORTY</h1>
        <Image className="Image1" src={morty} roundedCircle />
        <h1>By Eduardo</h1>
      </Col>
    </Container>
  );
};
