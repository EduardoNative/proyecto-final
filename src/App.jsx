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
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";
import { Logout } from "./components/Logout";
import "bootstrap-icons/font/bootstrap-icons.css"

export const LoginContext = createContext();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutNav />} >
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<WithNav />} >
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<WithNav />} >
          <Route path="/historia" element={<Historia />} />
        </Route>
        <Route element={<WithNav />} >
          <Route path="/personajes" element={<Personajes />} />
        </Route>
        <Route element={<WithNav />} >
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
