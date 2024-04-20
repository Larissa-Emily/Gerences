import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/LoginForm.js";
import Home from "./Pages/Home/Home.js";
import Contas from "./Pages/Accounts//PagesAccount/PageContas.js";
import Historico from "./Pages/Historico.js";
import Servicos from "./Pages/Servicos.js";

import Despesas from "./Pages/Expenses/PagesExpenses/PageExpenses.js";
import Faturas from "./Pages/Invoice/PagesInvoices/PageInvoice.js";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contas" element={<Contas />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/despesas" element={<Despesas />} />
        <Route path="/faturas" element={<Faturas />} />
      </Routes>
    </BrowserRouter>
  );
}
