/** @format */

import React, { useEffect, useState } from "react";
import SignUpModal from "../Component/Modals/SignUpModal";
import { login_staff } from "../Repo/Api";

const ClientLoginIn = () => {
  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const userType = "CLIENT";

  const payload = { email, password, userType };

  const handleSubmit = (e) => {
    e.preventDefault();
    login_staff(payload);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SignUpModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="Staff-Login-Container">
        <div className="Training_Course">
          <div className="Event_Booking-Banner">
            <div className="upper Client-Login">
              <h5 style={{ paddingTop: "5%" }}>Client Log In</h5>
            </div>
          </div>

          <div className="contact-us-overflow-main">
            <div className="Content">
              <div className="contact-query-form">
                <form onSubmit={handleSubmit}>
                  <h5 className="head">Enter your Credentials</h5>
                  <div className="two-inputs">
                    <div>
                      <label>
                        <span>*</span> Email
                      </label>
                      <input
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label>
                        <span>*</span> Password
                      </label>
                      <input
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="checbox">
                    <input type="checkbox" />
                    <p>Remember Me</p>
                  </div>

                  <button className="submit-btn" type="submit">
                    LOG IN
                  </button>

                  <p className="forget-password">
                    Forgot Password? <span>Reset Here</span>
                  </p>

                  <div className="empty-one">
                    <div className="empty"></div>
                    <p>OR</p>
                    <div className="empty"></div>
                  </div>

                  <p className="forget-password">
                    Don’t Have an account yet?{" "}
                    <span onClick={() => setModalShow(true)}>
                      Register Here
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLoginIn;
