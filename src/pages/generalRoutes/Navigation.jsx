import React from "react";
import mia from "../../assets/mia.svg";

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

      <div>
        <nav>
          <ul>
            <li>Nyumbani</li>
            <li>Malipo</li>
            <li>Profile</li>
          </ul>
        </nav>
      </div>

      <div>
        <p>Ibrahim Amour Ali</p>
      </div>
    </div>
  );
};
