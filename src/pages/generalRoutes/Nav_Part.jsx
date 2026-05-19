import React from "react";
import { FaHome, FaCreditCard, FaHistory } from "react-icons/fa";

export const Nav_Part = () => {
  return (
    <div className="nav-part">
      <div className="icons">
        <FaHome size={34} />
        <p>Home</p>
      </div>
      <div className="icons">
        <FaCreditCard size={34} />
        <p>Payment</p>
      </div>
      <div className="icons">
        <FaHistory size={34} />
        <p>History</p>
      </div>
    </div>
  );
};
