import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import style from "../Searchbar/Searchbar.module.css";

export const Searchbar = () => {
  return (
    <nav className={style.nav}>
      <input></input>
      <AiOutlineSearch />
    </nav>
  );
};
