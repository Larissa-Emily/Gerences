import styles from "./Forms.module.css";
import Button from "./Button";
import { useState } from "react";

import {Link} from 'react-router-dom'

export default function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleName(e) {
    let textValue = e.target.value;
    setName(textValue);
  }

  function handleEmail(e) {
    let textValue = e.target.value;
    setEmail(textValue);
  }

  function handlePassword(e) {
    let textValue = e.target.value;
    setPassword(textValue);
  }
  return (
    <div>
      <h2>
        <span>Login</span> na sua conta.
      </h2>
      <form className={styles.content_form}>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          onChange={handleName}
        />
        <input
          type="email"
          name="email"
          placeholder="Digite seu email "
          onChange={handleEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha "
          onChange={handlePassword}
        />
      </form>
      <p>Lembrar da senha?</p>
      <Link to="/home"><button>Entrar</button></Link>
      {/* <br/>
      <br/>
      <p>ou</p>
      <Button  name={name} email={email} senha={password} /> */}
    </div>
  );
}
