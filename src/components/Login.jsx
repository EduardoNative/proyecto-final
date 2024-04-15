import {useContext} from "react";
import { Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../App";


export const Login = () => {
    const context = useContext(UserContext);
    const navigate = useNavigate();

    const clickEnLogin = () =>{
        context.loggedIn = true;
        navigate("/home");
    }

  return (
    <div>
      <Button onClick={clickEnLogin} >login</Button>
    </div>
  );
};
