import Menu from "../../Menu/Menu";
import React, { useState, useEffect } from "react";

import "./PageInvoice.css";

import { db } from "../../../firebaseConnection";
import { collection, onSnapshot } from "firebase/firestore";

export default function PageInvoice() {
  const [fatura, setFatura] = useState([]);
  const [faturasVencidas, setFaturasVencidas] = useState(0);
  const [totalFaturasVencidas, setTotalFaturasVencidas] = useState(0); // Estado para o total das faturas vencidas
  useEffect(() => {
    const faturasRef = collection(db, "invoice");

    const searchInvoice = onSnapshot(faturasRef, (snapshot) => {
      let lista = [];
      let vencidas = 0;
      let totalVencidas = 0; // Variável para acumular o total das faturas vencidas
      const dataAtual = new Date();

      snapshot.forEach((doc) => {
        const maturity = doc.data().maturity || "";
        const name = doc.data().name || "";
        const reminder = doc.data().reminder || 0;
        const value = Number(doc.data().value) || 0;

        const maturityDate = new Date(maturity);

        lista.push({
          id: doc.id,
          name: name,
          maturity: maturity,
          reminder: reminder,
          value: value,
        });

        if (maturityDate < dataAtual) {
          vencidas++;
          totalVencidas += value; // Adiciona o valor da fatura vencida ao total das faturas vencidas
        }
      });

      setFatura(lista);
      setFaturasVencidas(vencidas);
      setTotalFaturasVencidas(totalVencidas); // Atualiza o estado do total das faturas vencidas
    });

    return () => searchInvoice();
  }, []);

  const totalSaldo = fatura
    .reduce((total, fatura) => total + fatura.value, 0)
    .toFixed(2);
  const totalFaturaCriada = fatura.length;

  // Função para formatar a data no formato dd/mm/yyyy
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  };

  // async function payInvoice() {
  //   setFaturasPagas((acount) => acount + 1);

  //   await addDoc(collection(db, "payInvoice"), {
  //     account: faturasPagas,
  //   });
  // }

  return (
    <div>
      <Menu />
      <div className="container_invoice">
        <header>
          <h1>Painel de contas a pagar</h1>
        </header>
        <div className="amount_card">
          <div className="not_pay">
            <span className="not_pay_color">Montante total</span>
            <span className="not_pay_value">R${totalSaldo}</span>
          </div>
          <div className="total_due">
            <span className="total_due_color">Montante total vencido</span>
            <span className="total_due_value">
              R${totalFaturasVencidas.toFixed(2)}
            </span>
            {/* Exibe o total das faturas vencidas */}
          </div>
          <div className="invoice_create">
            <div className="invoice_create_color">
              <h1>{totalFaturaCriada}</h1>
              <span>Faturas criadas</span>
            </div>
            <div>Todas as faturas</div>
          </div>
          <div className="invoice_not_pay">
            <div className="invoice_not_pay_color">
              <h1>{faturasVencidas}</h1>
              <span>Faturas vencidas</span>
            </div>
            <div>Ver faturas vencidas</div>
          </div>
          <div className="invoices_paid">
            <div className="invoices_paid_color">
              <h1>1</h1>
              <span>Faturas pagas</span>
            </div>
            <div>Ver faturas pagas</div>
          </div>
        </div> 
      </div>
      <div className="container_area">
        <ul className="area">
          {fatura && fatura.length > 0 ? (
            fatura.map((fatura) => (
              <li key={fatura.id}>
                <span>Fatura: {fatura.name}</span>
                <span>Data de vencimento: {formatDate(fatura.maturity)}</span>
                <span>Data de lembrete: {formatDate(fatura.reminder)}</span>
                <span>Valor a pagar: R${fatura.value.toFixed(2)}</span>
                <button>Pago</button>
              </li>
            ))
          ) : (
            <span>Não há faturas</span>
          )}
        </ul>
      </div>
    </div>
  );
}
