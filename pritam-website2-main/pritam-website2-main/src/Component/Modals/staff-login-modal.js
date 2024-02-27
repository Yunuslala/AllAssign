/** @format */
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { register_staff } from "../../Repo/Api";

export function StaffLoginModal(props) {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [selectQuestion, setSelectedQuestion] = useState(null);
  const [yourAnswer, setYourAnswer] = useState(null);
  const [interest, setInterest] = useState(null);
  const [pinCode, setPinCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const userType = "STAFF";

  const payload = {
    firstName,
    lastName,
    phone,
    email,
    password,
    selectQuestion,
    yourAnswer,
    interest,
    pinCode,
    userType,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register_staff(payload, setLoading);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="staff-login-modal">
        <div className="Header">
          <p>Enter Your Details</p>
          <i className="fa-solid fa-xmark" onClick={() => props.onHide()}></i>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="two-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> First Name{" "}
              </p>
              <input
                type="text"
                required
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="item">
              <p>
                {" "}
                <span>*</span> Last Name{" "}
              </p>
              <input
                type="text"
                required
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="two-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> Postal Code{" "}
              </p>
              <input
                type="text"
                required
                name="postalCode"
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
            <div className="item">
              <p>
                {" "}
                <span>*</span> Email Address{" "}
              </p>
              <input
                type="text"
                required
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="single-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> Contact Number{" "}
              </p>
              <input
                type="tel"
                pattern="[0-9]{10}"
                required
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="single-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> Password{" "}
              </p>
              <input
                type="password"
                placeholder="*Minimum 10 character long"
                minLength={10}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="single-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> Select Question{" "}
              </p>
              <select onChange={(e) => setSelectedQuestion(e.target.value)}>
                <option>Chose Your Question</option>
                <option value=""></option>
              </select>
            </div>
          </div>

          <div className="single-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> Your Answer{" "}
              </p>
              <textarea
                required
                onChange={(e) => setYourAnswer(e.target.value)}
              />
            </div>
          </div>

          <div className="single-input">
            <div className="item">
              <p>
                {" "}
                <span>*</span> What are you Intrested In ?{" "}
              </p>
              <textarea
                required
                onChange={(e) => setInterest(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">REGISTER NOW</button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

StaffLoginModal.propTypes = {
  onHide: PropTypes.func.isRequired,
};
