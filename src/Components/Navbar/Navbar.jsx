import React from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import style from "../Navbar/Navbar.module.css";
import logo from "../../Resources/Logo.png";

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <img src={logo} />
      <Searchbar />
      <div>3 DIV</div>
    </nav>
  );
};
