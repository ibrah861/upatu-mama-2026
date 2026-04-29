import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import { Loader } from "../../component/Loader/Loader";
import api from "../../utility/Axios";

// assets
import mia from "../../assets/mia.svg";

export const Signup = () => {
  const [emailPhoneBox, setEmailPhoneBox] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const payload = emailPhoneBox ? { phone } : { email };

      await api.post("/auth-email", payload);

      console.log("Success");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneBox = () => setEmailPhoneBox(false);
  const handleEmailBox = () => setEmailPhoneBox(true);

  return (
    <div className="auth-center">
      <div className="form-wrapper card-round-box">
        <div className="mia">
          <img src={mia} alt="mia" />
        </div>

        <hr />
        <br />

        <h2>Ingia</h2>

        <p className="signin-description">
          Ingia ndani ya akaunti yako kwa kuandika barua pepe au nambari za
          simu.
          <b> tumia chumba cha hapo chini</b>
        </p>

        <form onSubmit={handleSignin}>
          {emailPhoneBox ? (
            <div className="form-input-box flex-column-left">
              <label>Andika nambari za simu</label>
              <input
                type="text"
                placeholder="000 0000 000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          ) : (
            <div className="form-input-box flex-column-left">
              <label>Andika barua pepe</label>
              <input
                type="email"
                placeholder="mfano12@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}

          <p className="or-usephone">_______au_______</p>

          <div className="phone-email-box font-size">
            {emailPhoneBox ? (
              <p className="email" onClick={handlePhoneBox}>
                Tumia barua pepe
              </p>
            ) : (
              <p className="phone-number" onClick={handleEmailBox}>
                Tumia nambari za simu
              </p>
            )}
          </div>

          <div className="form-input-box flex-column-left margin-top">
            {loading ? (
              <div className="signin-text flex-center">
                <Loader />
                <span>Tafadhali subiri...</span>
              </div>
            ) : (
              <button type="submit">Ingia</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
