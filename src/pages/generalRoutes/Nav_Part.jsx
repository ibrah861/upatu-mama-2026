import React from "react";
import { FaHome, FaCreditCard, FaHistory } from "react-icons/fa";

export const Nav_Part = () => {
  return (
    <div className="nav-part">
      <div className="icons">
        <FaHome size={24} />
        <p>Home</p>
      </div>
      <div className="icons">
        <FaCreditCard size={24} />
        <p>Payment</p>
      </div>
      <div className="icons">
        <FaHistory size={24} />
        <p>History</p>
      </div>
    </div>
  );
};
