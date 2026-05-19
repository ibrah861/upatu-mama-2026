import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/Background.jpg";
import graph from "../../assets/graph.jpg";
import users from "../../assets/user.svg";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

//
import { useContext } from "react";
import { Auth } from "../../utility/AuthContext";
import { useAuthentication } from "../../custom_hooks/useAuthHooks";
import api from "../../utility/Axios";

export const UserDashboard = () => {
  const [name, setFullname] = useState("");
  const [userEmail, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");

  useAuthentication("/user");

  const { authResponse, setAuthResponse } = useContext(Auth);

  const user = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await api.get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAuthResponse(response.data);
      // console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    user();
  }, []);

  const userdata = () => {
    if (authResponse <= 0) return null;
    else {
      const { _id, name, email, phone, fullname } = authResponse.user;
      console.log(email);
      setFullname(fullname);
      setEmail(email);
      setPhone(phone);
    }
  };

  useEffect(() => {
    userdata();
  }, []);

  return (
    <>
      <div>
        <main>
          <h3>Welcome, {name}</h3>

          <div className="detail">
            <div className="box-shadow">
              <p className="bold">Personal details</p>
              <div className="profile-infor">
                <div className="image">
                  <div className="image-profile">
                    <img
                      src={users}
                      alt="user"
                      className="user-image-avator"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="user-infor">
                  <p>{name}</p>
                  <p>{userEmail}</p>
                  <p>{phoneNumber}</p>
                  <br />
                  <div className="left">
                    Status : &nbsp;
                    {false ? (
                      <div>
                        <span className="active"> Active</span>&nbsp;&nbsp;
                        <FaCheckCircle color="blue" size={13} />
                      </div>
                    ) : (
                      <div>
                        <span>
                          Disabled <FaTimesCircle color="red" size={13} />
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="left">
                    Payment type : &nbsp;
                    <span className="payment-type"> WATER BILL</span>
                  </p>
                  <button>View more Infor</button>
                </div>
              </div>
            </div>

            <div>
              <div className="profile-dynamic">
                <p className="progress-head">Payment Progress Bar</p>
                <div className="progress">
                  <div className="blue-color"></div>
                </div>
                <span>8%</span>
              </div>
              <div className="progress-bar-details">
                <div className="progress-bar-img">
                  <img src={graph} alt="graph" loading="lazy" />
                </div>
                <div className="progress-bar-description">
                  <p>
                    From <span>January</span> to <span>Decembar</span>
                  </p>
                  <p>Last paid : 02/01/2026</p>

                  <div className="btn-progress">
                    <button className="view-full-details">
                      View payment details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
