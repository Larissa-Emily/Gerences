import React from "react";
import "./styles.css";
import DaytimeGreeting from "./DaytimeGreeting";
import { MdOutlineAccountBalance } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { PiPiggyBankLight } from "react-icons/pi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container_global">
      <div className="container">
        <div className="greeting">
          <span>
            <DaytimeGreeting />
          </span>
          <h1>Larissa Emily</h1>
        </div>
        <div className="quick_access">
          <div className="icon despesa">
            <span>
              <Link to="/despesas">
                <IoIosRemoveCircleOutline />
              </Link>
            </span>
            <h4>Despesa</h4>
          </div>
          <div className="icon conta">
            <span>
              <Link to="/contas">
                <MdOutlineAccountBalance />
              </Link>
            </span>

            <h4>Contas</h4>
          </div>
          <div className="icon fatura">
            <span>
              <Link to="/faturas">
                <LiaFileInvoiceDollarSolid />
              </Link>
            </span>

            <h4>Contas a pagar</h4>
          </div>
          <div className="icon reserva">
            <span>
              <PiPiggyBankLight />
            </span>

            <h4>Reserva</h4>
          </div>
          <div className="icon relatorio">
            <span>
              <HiOutlineDocumentReport />
            </span>

            <h4>Relatório</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
