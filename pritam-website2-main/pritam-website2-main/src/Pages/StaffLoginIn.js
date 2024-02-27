/** @format */

import React, { useState, useEffect } from "react";
import { StaffLoginModal } from "../Component/Modals/staff-login-modal";
import { login_staff } from "../Repo/Api";

const StaffLoginIn = () => {
  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const userType = "STAFF";

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
      <StaffLoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="Staff-Login-Container">
        <div className="Training_Course">
          <div className="Event_Booking-Banner">
            <div className="upper">
              <h5 style={{ paddingTop: "5%" }}>Staff Log In</h5>
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
                        <span>*</span> Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
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

                  <button className="submit-btn" type='submit'>LOG IN</button>

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

export default StaffLoginIn;
