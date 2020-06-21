import React from "react";
import {NavLink} from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header>
      <NavLink to="/">
        Inicio
      </NavLink>
      <NavLink to="/elecciones">
        Elecciones
      </NavLink>
      <NavLink to="/autoridades">
        Autoridades
      </NavLink>
    </header>
  )
}
