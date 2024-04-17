import { useContext, useEffect } from "react";
import { Button, Container, Image, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.jpg";

export const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("LOGEADO") === true) {
      navigate("/home")
    }
  }, []);


  const clickEnLogin = () => {
    localStorage.setItem("LOGEADO", true)
    navigate("/home");
  }

  return (

    <Container fluid>
      <Col>
      <Image className="ImageLogin" src={login} />
      <div>
      <Button className="buttonLogin" onClick={clickEnLogin}>INGRESA AQUI</Button>
      </div>
    
      </Col>
      

    </Container>
    
    
  );
};