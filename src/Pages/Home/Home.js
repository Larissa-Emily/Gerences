import React from "react";
import styles from "./Home.module.css";
import Menu from "../Menu/Menu.js";
import Header from "../Header/Header.js";
import Servico from "../Servicos/index.js";

export default function Home() {
  return (
    <div className={styles.area}>
      <Menu />
      <Header />
      <Servico/>
    </div>
  );
}
