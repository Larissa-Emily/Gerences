import React, { useState, useEffect } from "react";
import Menu from "../../Menu/Menu.js";
import "./PageExpenses.css";
import { db } from "../../../firebaseConnection.js";
import { collection, onSnapshot } from "firebase/firestore";

export default function PageExpenses() {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    const despesasRef = collection(db, "expenses");

    const unsubscribe = onSnapshot(
      despesasRef,
      (snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            expense: doc.data().expense,
            value: Number(doc.data().value) || 0,
            date: doc.data().date, // Inclui a data
          });
        });
        setDespesas(lista);
      },
      (error) => {
        console.error("Erro ao buscar documentos: ", error);
      }
    );

    return () => unsubscribe();
  }, []);

  // Função para agrupar despesas por data
  const agruparDespesasPorData = (despesas) => {
    return despesas.reduce((acc, despesa) => {
      if (!acc[despesa.date]) {
        acc[despesa.date] = [];
      }
      acc[despesa.date].push(despesa);
      return acc;
    }, {});
  };

  // Calcula a soma total dos valores das despesas
  const totalSaldo = despesas.reduce(
    (total, despesa) => total + despesa.value,
    0
  );

  // Agrupar as despesas por data
  const despesasAgrupadas = agruparDespesasPorData(despesas);

  return (
    <>
      <Menu />
      <div className="content">
        <header>
          <h1>Gerencie suas despesas</h1>
          <span>Saldo das despesas: R${totalSaldo.toFixed(2)}</span>
        </header>
        <div className="expense_area">
          {Object.entries(despesasAgrupadas).map(([data, despesasDaData]) => (
            <div key={data}>
              <span>Data: {data}</span>
              <ul>
                {despesasDaData.map((despesa) => (
                  <li key={despesa.id}>
                    <span>Despesa: {despesa.expense}</span>
                    <span>Valor: R${despesa.value.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
