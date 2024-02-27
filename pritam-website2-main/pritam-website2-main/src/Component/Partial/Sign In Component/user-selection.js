/** @format */

import React from "react";
import { Link } from "react-router-dom";

const UserSelection = () => {
  return (
    <div className="sign-in-account-selector">
      <div className="container">
        <img src="./Image/24.png" alt="" />
        <h5>Client </h5>
        <Link to="/client-login">
          {" "}
          <button>SIGN IN</button>
        </Link>
      </div>
      <div className="container">
        <img src="./Image/25.png" alt="" />
        <h5>Staff</h5>
        <Link to="/staff-logIn">
          <button>SIGN IN</button>
        </Link>
      </div>
    </div>
  );
};

export default UserSelection;
