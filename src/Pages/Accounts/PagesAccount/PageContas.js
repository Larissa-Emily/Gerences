import React, { useState, useEffect } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import Menu from "../../Menu/Menu.js";
import "./pageContas.css";
import { db } from "../../../firebaseConnection.js";
import { collection, onSnapshot } from "firebase/firestore";

function Contas() {
  const [contas, setContas] = useState([]);

  useEffect(() => {
    const contasRef = collection(db, "accounts");

    const unsubscribe = onSnapshot(
      contasRef,
      (snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          const nomeConta = doc.data().nameConta || doc.data().name || "";
          const type = doc.data().type || "";
          const balance = Number(doc.data().balance) || 0; // Assegura que balance é um número.
          lista.push({
            id: doc.id,
            name: nomeConta,
            type: type,
            balance: balance,
          });
        });
        setContas(lista);
      },
      (error) => {
        console.error("Erro ao buscar documentos: ", error);
      }
    );

    return () => unsubscribe();
  }, []);

  // Calcula a soma total dos saldos das contas
  const totalSaldo = contas
    .reduce((total, conta) => total + conta.balance, 0)
    .toFixed(2);

  return (
    <>
      <Menu />
      <header>
        <h1>Gerencie suas contas</h1>
        <span>Saldo em contas: R${totalSaldo}</span>
      </header>
      <div className="cardAccounts">
        <ul>
          {contas.map((conta) => (
            <li key={conta.id}>
              <span>Nome conta: {conta.name}</span>
              <span>Tipo de conta: {conta.type}</span>
              <span>Saldo: R${conta.balance.toFixed(2)}</span>
              <div className="btns">
                <button>
                  <MdModeEdit />
                </button>
                <button>
                  <MdDelete />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Contas;
