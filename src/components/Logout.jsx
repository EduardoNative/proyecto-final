import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import react2 from "../assets/react2.jpg";

export const Logout = () => {
  const navigate = useNavigate();

  const clickEnLogout = () => {
    localStorage.setItem("LOGEADO", false);
    navigate("/");
  };

  return (
    <div>
      <div>
        <svg
          width="5%"
          height="10%"
          fill="currentColor"
          class="bi bi-code-slash"
          viewBox="0 0 16 16"
        >
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
        </svg>
      </div>
      <div>
      <Image className="react2" src={react2} />
      </div>
      <br />
      <Button
        className="buttonCerrarS"
        onClick={clickEnLogout}
      >{`Cerrar Sesion`}</Button>
    </div>
  );
};
