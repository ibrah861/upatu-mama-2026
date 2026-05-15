import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

// Components
import { Loader } from "../../component/Loader/Loader";
import api from "../../utility/Axios";

// assets
import mia from "../../assets/mia.svg";
import internet from "../../assets/internet.jpg";

export const Signup = () => {
  const [emailPhoneBox, setEmailPhoneBox] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //
  const [verifyPasw, setverifyPasw] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Error Message
  const [err, setErr] = useState("");
  const [sucMs, setSucMs] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // disable
  const [isDisable, setIsDisable] = useState(false);

  // navigate
  const navigate = useNavigate();

  // email path
  const CHECK_EMAIL = "/auth-email";
  const SIGN_IN = "/auth-signin";

  //  handleEmail
  const handleCheckEmail = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const payload = emailPhoneBox ? { phone } : { email };

      const verifyemail = await api.post(CHECK_EMAIL, payload);

      const user = verifyemail.data.isExist;

      const getemail = verifyemail.data.user;

      localStorage.setItem("email", getemail);

      if (user === true) {
        setverifyPasw(true);
      }

      if (user === false) {
        setverifyPasw(false);
      }
    } catch (err) {
      if (!err.response) {
        setErr("No response from server");
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  };

  // handleSignin
  const handleSignin = async (e) => {
    e.preventDefault();
    const userEmail = localStorage.getItem("email");
    //
    try {
      const signin = await api.post(SIGN_IN, {
        email: userEmail,
        password,
      });

      const user_token = signin.data.token;
      localStorage.setItem("token", user_token);
      setSucMs(signin.data.message);

      const hidesuccMS = () => {
        setSucMs(null);
        navigate("/userdashboard");
        setIsDisable(true);
      };

      setTimeout(hidesuccMS, 3000);
    } catch (err) {
      setErr(err.response.data.message);

      const hideErrMS = () => {
        setErr(null);
      };

      setTimeout(hideErrMS, 3000);
    }
  };

  const handlePhoneBox = () => setEmailPhoneBox(false);
  const handleEmailBox = () => setEmailPhoneBox(true);

  return (
    <>
      <div className="auth-center">
        {err && <p className="errMs">{err}</p>}
        {sucMs && <p className="sucMs">{sucMs}</p>}

        <div className="form-wrapper card-round-box">
          <div className="green-bg">
            <div className="mia">
              <img src={mia} alt="mia" />
            </div>

            <hr className="hr" />
            <br />

            <h2>Ingia</h2>

            <p className="signin-description">
              Ingia ndani ya akaunti yako kwa kuandika barua pepe au nambari za
              simu.
              <b> tumia chumba cha hapo chini</b>
            </p>
          </div>

          <form onSubmit={verifyPasw ? handleSignin : handleCheckEmail}>
            {verifyPasw ? (
              <div className="form-input-box flex-column-left">
                <label>Andika neno la siri</label>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="* * * * * * *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p
                  className="changePassword"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "Hide" : "Show"}
                </p>
              </div>
            ) : (
              <div>
                {emailPhoneBox ? (
                  <div className="form-input-box flex-column-left">
                    <label>Andika nambari za simu</label>
                    <div className="input-email">
                      <FiPhone className="phone-icon" />
                      <input
                        type="text"
                        required
                        placeholder="000 0000 000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="form-input-box flex-column-left">
                    <label>Andika barua pepe</label>
                    <div className="input-email">
                      <MdOutlineMail size={20} color="#555" />
                      <input
                        type="email"
                        required
                        placeholder="mfano12@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {!verifyPasw && (
              <div>
                <div className="or-usephone">
                  <span>______au______</span>
                </div>

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
            )}

            <div className="form-input-box loader-margin">
              {loading ? (
                <div className="signin-text flex-center">
                  <Loader />
                  <span>Tafadhali subiri...</span>
                </div>
              ) : (
                <>
                  <button type="submit">
                    {verifyPasw ? (
                      "Tuma"
                    ) : (
                      <div className="icons-btn">
                        <FaSignInAlt size={13} color="white" />{" "}
                        <span>Ingia</span>
                      </div>
                    )}
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="bottom-img">
        <img src={internet} alt="" />
      </div>
    </>
  );
};
