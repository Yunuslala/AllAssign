/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Sidebar from "./Sidebar";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Sidebar show={show} handleClose={handleClose} /> */}
      <div className="Navbar">
        <div className="main">
          <Link to="/">
            {" "}
            <img src="./Image/logo.png" alt="" />
          </Link>
        </div>

        <div className="main Hide_On_Tab">
          <Link to="/">Home</Link>
        </div>

        <div className="main Hide_On_Tab">
          <Link to="/event-booking">Event Booking</Link>
        </div>
        <div className="main Hide_On_Tab">
          <Link to="/courses">Courses</Link>
        </div>
        <div className="main Hide_On_Tab">
          <Link to="/about-us">About Us</Link>
        </div>

        <div className="main Hide_On_Tab">
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="main Hide_On_Tab">
          <div>
            <input type={"search"} placeholder="Search..." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="main Tab_Burger">
          <i className="fa-solid fa-bars" onClick={handleShow}></i>
          <Link to="/sign-in">
            <button>SIGN IN</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
