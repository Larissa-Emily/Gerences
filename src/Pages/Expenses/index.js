import style from "./styles.module.css";
import { useState } from "react";
import { toast } from "react-toastify";

import { db } from "../../firebaseConnection";
import { collection, addDoc } from "firebase/firestore";

export default function Expenses() {
  const [expense, setExpense] = useState("");
  const [value, setValue] = useState("");
  async function handleAddExpenses(e) {
    e.preventDefault();
 
    if (!expense || !value) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    const today = new Date().toISOString().split("T")[0]; // Obtém a data como 'YYYY-MM-DD'

    await addDoc(collection(db, "expenses"), {
      expense: expense,
      value: value,
      date: today, // Adiciona a data
    });

    toast.success("Despesa adicionada!");
    setExpense("");
    setValue("");
  }

  return (
    <div className={style.form_expense}>
      <form>
        <div className={style.header}>
          <h1>Adicionar despesas</h1>
          {/* <span className={style.dest}>R${sum.toFixed(2)}</span> */}
        </div>
        <label>Qual é a despesa?</label>
        <input
          type="text"
          name="nameAccounst"
          placeholder="Despesas"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <label>Valor gasto:</label>
        <input
          type="number"
          name="typeAccounst"
          placeholder="Valor total"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={style.button_add} onClick={handleAddExpenses}>
          Adicionar despesa
        </button>
      </form>
    </div>
  );
}
