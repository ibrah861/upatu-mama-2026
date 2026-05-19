import React from "react";
import mia from "../../assets/mia.svg";
import { Nav_Part } from "./Nav_Part";

export const Navigation = () => {
  return (
    <div className="nav">
      <div className="img-mia">
        <img
          src={mia}
          alt="siteLogo"
          style={{ width: "2.9rem" }}
          className="image-mia"
        />
      </div>

      <div className="nav-class">
        <nav>
          <ul>
            <li>Nyumbani</li>
            <li>Malipo</li>
            <li>Profile</li>
          </ul>
        </nav>
      </div>

      <Nav_Part />

      <div className="signout-button">
        <button>Sign out</button>
      </div>
    </div>
  );
};
