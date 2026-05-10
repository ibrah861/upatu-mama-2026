import React, { useEffect } from "react";
import backgroundImage from "../../assets/Background.jpg";
import graph from "../../assets/graph.jpg";

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
            <h3>Karibu, Ibrahim Amour Ali</h3>

            <div className="detail">
              <div>
                <p className="bold">Taarifa binafsi</p>
                <div className="profile-infor">
                  <div className="image-profile">I</div>
                  <div className="user-infor">
                    <p>Ibrahim Amour Ali</p>
                    <p>ibra1980f@gmail.com</p>

                    <hr />
                    <p>
                      Status :<span className="active"> Active</span>
                    </p>
                    <p>Payment type : Water bill</p>
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

            {/* <div className="about-service">
              <section className="sec1 heigth box-shadow">1</section>
              <h2 className="sec2 heigth box-shadow">2</h2>
              <aside className="sec3 heigth box-shadow">3</aside>
            </div> */}
          </main>
        </div>
      </div>
    </>
  );
};
