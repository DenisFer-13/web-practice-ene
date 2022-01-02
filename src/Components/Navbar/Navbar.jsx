import React from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import style from "../Navbar/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div>1 DIV</div>
      <Searchbar />
      <div>3 DIV</div>
    </nav>
  );
};
