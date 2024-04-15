import { useState, createContext } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarTop } from "./components/NavbarTop";
import { Home } from "./components/Home";
import { Personajes } from "./components/Personajes";
import { Historia } from "./components/Historia";
import { Login } from "./components/Login";

const userObjectContext = { loggedIn: false };
export const UserContext = createContext(userObjectContext);

function App() {
  const [user] = useState(userObjectContext);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <div>
          <NavbarTop></NavbarTop> 

          <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/historia" element={<Historia></Historia>} />
            <Route path="/personajes" element={<Personajes></Personajes>} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
