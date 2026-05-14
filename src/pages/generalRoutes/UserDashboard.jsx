import React, { useEffect } from "react";
import backgroundImage from "../../assets/Background.jpg";
import graph from "../../assets/graph.jpg";
import user from "../../assets/user.svg";
import { FaCheckCircle } from "react-icons/fa";

// custom hooks
import { useAuthentication } from "../../custom_hooks/useAuthHooks";

export const UserDashboard = () => {
  const USER = "/user";

  useAuthentication(USER);

  return (
    <>
      <div>
        <div className="background-hero-image">
          <main>
            <h3>Welcome, Ibrahim Amour Ali</h3>

            <div className="detail">
              <div>
                <p className="bold">Personal details</p>
                <div className="profile-infor">
                  <div className="image">
                    <div className="image-profile">
                      <img
                        src={user}
                        alt="user"
                        className="user-image-avator"
                      />
                    </div>
                  </div>

                  <div className="user-infor">
                    <p>Ibrahim Amour Ali</p>
                    <p>ibra1980f@gmail.com</p>
                    <br />
                    <p className="left">
                      Status : &nbsp;
                      <span className="active"> Active</span>&nbsp;&nbsp;
                      <FaCheckCircle color="blue" size={13} />
                    </p>
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
                    <img src={graph} alt="graph" />
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
      </div>
    </>
  );
};
