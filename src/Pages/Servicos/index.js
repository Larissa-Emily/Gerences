import React from "react";
import "./style.css";

import Accounts from "../Accounts";
import Expenses from "../Expenses";
import Invoice from "../Invoice";
import Reserve from "../Reserve";

export default function Servico() {
  return (
    <div className="service">
      <div className="grupoA">
        <Accounts />
        <Expenses />
      </div>
      <div className="grupoB">
        <Invoice />
        <Reserve />
      </div>
    </div>
  );
}
 