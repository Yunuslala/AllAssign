import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }
  return (
    <>
      <div className="Backward_Heading">
        <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        <p>Sign-Up</p>
      </div>

      <div className="Indivisual-Appointment">
        <p className="title">
        You are One Step away to Become our 
VIP Member!
        </p>

        <form>
          <div>
            <p>First Name</p>
            <input type="text" placeholder="Enter Your First Name" />
          </div>

          <div>
            <p>Last Name</p>
            <input type="text" placeholder="Enter Your Last Name" />
          </div>

          <div>
            <p>Email</p>
            <input type="text" placeholder="Enter your Email ID" />
          </div>

          <div>
            <p>Contact Number</p>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter your 10-Digit Phone Number"
            />
          </div>

          <div>
            <p>Date Of Birth</p>
            <input type="date" />
          </div>

          <div>
            <p> New Password</p>
            <input type="password" placeholder="Enter Your New Password" />
          </div>

          <div>
            <p>Select your Gender</p>
            <div className="gender_selection">
              <img src="/Image/4.png" alt="" />
              <img src="/Image/5.png" alt="" />
              <img src="/Image/6.png" alt="" />
            </div>
          </div>

          <div>
            <img src="/Image/7.png" alt="" className="Full_Image" />
          </div>

          <div className="check" style={{ marginTop: "40px" }}>
            <input type="checkbox" />
            <div>
              <p className="title">I Agree to the ‘Terms & Conditions’</p>
            </div>
          </div>

          <button type="button">REGISTER ACCOUNT</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
