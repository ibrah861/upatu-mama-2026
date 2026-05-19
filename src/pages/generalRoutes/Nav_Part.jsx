import React from "react";
import {
  FaHome,
  FaCreditCard,
  FaHistory,
  FaBars,
  FaFileInvoiceDollar,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export const Nav_Part = () => {
  return (
    <div className="nav-part">
      <Link to={"/"}>
        <div className="icons">
          <FaHome size={24} />
          <p>Home</p>
        </div>
      </Link>

      <Link to={"/payment"}>
        <div className="icons">
          <FaCreditCard size={24} />
          <p>Payment</p>
        </div>
      </Link>

      <Link to={"/invoice"}>
        <div className="icons">
          <FaFileInvoiceDollar size={24} />
          <p>Invoice</p>
        </div>
      </Link>

      <Link to={"/history"}>
        <div className="icons">
          <FaHistory size={24} />
          <p>History</p>
        </div>
      </Link>

      <div className="icons">
        <FaBars size={24} />
        <p>Menu</p>
      </div>
    </div>
  );
};
