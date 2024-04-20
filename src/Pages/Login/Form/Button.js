import { db } from "../../../firebaseConnection";

import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(db, provider);
      const user = result.user;
      console.log("Usuário autenticado com Google:", user.uid);
      navigate("/"); // Redirecionamento para a página inicial (home)
    } catch (error) {
      console.error("Erro ao autenticar com Google:", error.message);
    }
  };

  return (
    <div className={styles.title}>
      <button onClick={handleGoogleSignIn}>Entrar com Google</button>
    </div>
  );
}
