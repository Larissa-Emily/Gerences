import "./styles.css";
import { toast } from "react-toastify";
import { useState } from "react";

import { db } from "../../firebaseConnection";
import { collection, addDoc } from "firebase/firestore";

export default function Accounts() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [balance, setBalance] = useState("");

  async function handleAddAccounts(e) {
    e.preventDefault();

    // Verifica se algum campo está vazio
    if (!name || !type || !balance) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    await addDoc(collection(db, "accounts"), {
      name: name,
      type: type,
      balance: balance,
    });

    // Lógica para adicionar a fatura
    toast.success("Conta adicionada!");
    setName("");
    setType("");
    setBalance("");
  }

  return (
    <div className="form_account">
      <form>
        <div className="header">
          <h1>Adicionar conta</h1>
        </div>
        <label>Nome da conta:</label>
        <input
          type="text"
          name="nameAccounst"
          placeholder="Nome da conta"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Tipo de conta:</label>
        <input
          type="text"
          name="typeAccounst"
          placeholder="Conta corrente"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <label>Saldo em conta:</label>
        <input
          type="number"
          name="balanceAccounts"
          placeholder="Seu saldo total"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
        <button className="button_add" onClick={handleAddAccounts}>
          Adicionar conta
        </button>
      </form>
    </div>
  );
}
