import "./invoice.css";
import { toast } from "react-toastify";
import { useState } from "react";

import { db } from "../../firebaseConnection";
import { collection, addDoc } from "firebase/firestore";

export default function Invoice() {
  const [nameCard, setNameCard] = useState("");
  const [valueCard, setValueCard] = useState("");
  const [dateMat, setDateMat] = useState("");
  const [dateRem, setDateRem] = useState("");

  async function handleAddInvoice(e) {
    e.preventDefault();

    // Verifica se algum campo está vazio
    if (!nameCard || !valueCard || !dateMat || !dateRem) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }
    await addDoc(collection(db, "invoice"), {
      name: nameCard,
      value: valueCard,
      maturity: dateMat,
      reminder: dateRem,
    });
    // Lógica para adicionar a fatura
    toast.success("Fatura adicionada!");
    setNameCard("");
    setValueCard("");
    setDateMat("");
    setDateRem("");
  }

  return (
    <div className="form_invoice">
      <header>
        <h1>Adicionar contas a pagar</h1>
      </header>
      <form>
        <div className="descrition">
          <label>Qual a conta a pagar?</label>
          <input
            type="text"
            name="nameInvoice"
            placeholder="Nome da conta"
            value={nameCard}
            onChange={(e) => setNameCard(e.target.value)}
          />
          <label>Valor total:</label>
          <input
            type="number"
            name="valueInvoice"
            placeholder="Valor da fatura"
            value={valueCard}
            onChange={(e) => setValueCard(e.target.value)}
          />
        </div>

        <div className="dates">
          <label>Qual a data de vencimento?</label>
          <input
            type="date"
            name="maturity"
            value={dateMat}
            onChange={(e) => setDateMat(e.target.value)}
          /> 
          <label>Qual a data de lembrete?</label>
          <input
            type="date"
            name="reminder"
            value={dateRem}
            onChange={(e) => setDateRem(e.target.value)}
          />
        </div>
      </form>
      <button className="btn_invoice" onClick={handleAddInvoice}>Adicionar fatura</button>
    </div>
  );
}
