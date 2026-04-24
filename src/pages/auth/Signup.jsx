import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import { Loader } from "../../component/Loader/Loader";

// Signin
export const Signup = () => {
  const [emailPhoneBox, setEmailPhoneBox] = useState(false);
  // functions
  const handlePhoneBox = () => {
    setEmailPhoneBox(false);
  };
  const handleEmailBox = () => {
    setEmailPhoneBox(true);
  };
  return (
    <>
      <div className="auth-center">
        <div className="form-wrapper card-round-box">
          <h2>Ingia</h2>

          <p className="signin-description">
            Ingia ndani ya akaunti yako kwa kuandika barua pepe au nambari za
            simu. <b>tumia chumba cha hapo chini</b>
          </p>
          <form>
            {emailPhoneBox ? (
              <div className="form-input-box flex-column-left">
                <label htmlFor="name">Andika nambari za simu </label>
                <input type="text" placeholder="000 0000 000" />
              </div>
            ) : (
              <div className="form-input-box flex-column-left">
                <label htmlFor="name">Andika barua pepe </label>
                <input type="text" placeholder="mfano12@gmail.com" />
              </div>
            )}

            <div>
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
            </div>

            {false && (
              <div className="form-input-box flex-column-left">
                <label htmlFor="name">Andika neno la siri </label>
                <input type="text" />
              </div>
            )}
            <div className="form-input-box flex-column-left margin-top">
              {false ? (
                <button>Ingia</button>
              ) : (
                <div className="signin-text flex-center">
                  <Loader />
                  <span>Tafadhi subiri Inaingia...</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
