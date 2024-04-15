import { useEffect, useState } from "react";
import { getPersonaje } from "../actions/api.personajes";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { getDetalle } from "../actions/api.detalle";

export const Personajes = () => {
  //aqui van useState useEffect 
  const [personajes, setPersonajes] = useState([]);
  const [detalle, setDetalle] = useState("");
  const [id, setId] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getPersonaje().then((res) => setPersonajes(res.results));
  }, []);

  //aqui van las funciones
  const clickEnVerDetalle = (id) => {
    setShow(true);
    setId(id);
    setDetalle("");
    console.log("holahola" + id);
  };
  const handleClose = () => {
    setShow(false); 
  }

  const clickMostrarInformacion = () =>{
    getDetalle(id).then((res) => setDetalle(`id: ${res.id} - nombre: ${res.name} - status: ${res.status}`));
  }

  //aqui va la vista
  return (
    <>
     <Col>
      <h1>PERSONAJES Y NOMBRES</h1>
      <ul>
        {personajes.map((personaje) => (
          <li key={personaje.id}>
            <Card>
              <Card.Img
                className="CardImg"
                variant="top"
                src={personaje.image}
              />
              <Card.Body>
                <Card.Title> {personaje.name} </Card.Title>
                <Button onClick={() => clickEnVerDetalle(personaje.id)}>
                  Ver Detalles
                </Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </Col>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>{detalle} </h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={clickMostrarInformacion}>
            Mostrar Detalle
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};
