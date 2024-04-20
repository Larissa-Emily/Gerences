import React from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

const MenuList = () => {
  return (
    <div className="menu_container">
      <ul className={styles.menu_list}>
        <li className={styles.item}>
          <Link to="/home">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/historico">Mais serviços</Link>
        </li>
        <li className={styles.item}>
          <Link to="/">Sair</Link>
        </li>
      </ul>
    </div>
  );
};

export default function Menu() {
  return (
    <div className={styles.menu_container}>
      <div className={styles.logo}>
        <Link to="/home">
          <h1>Gerences</h1>
        </Link>
      </div>
      <MenuList />
    </div>
  );
}
