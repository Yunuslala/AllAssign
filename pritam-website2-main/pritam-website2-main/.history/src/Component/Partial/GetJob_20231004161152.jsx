/** @format */

import { useState } from "react";
import { BsArrowRightShort, BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function GetJob() {

  const [ data , setData ] = useState({})

  const 


  return (
    <div style={{ margin: "auto", width: "90%" }}>
      <h3 className="center-heading">Get Job</h3>
      <h1 className="bold-heading">Get the job of your dreams quickly.</h1>
      <div className="get-job-list-container">
        <p>
          {" "}
          <BsCheckLg className="get-job-bulletStyle" />
          Digital Marketing Solutions for Tommorow
        </p>
        <p>
          {" "}
          <BsCheckLg className="get-job-bulletStyle" />
          Our Talented & Experienced Marketing Agency
        </p>
        <p>
          {" "}
          <BsCheckLg className="get-job-bulletStyle" />
          Create Your Own Skin to match your Brand
        </p>
        <p>
          {" "}
          <BsCheckLg className="get-job-bulletStyle" />
          Digital Marketing Solutions for Tommorow
        </p>
      </div>
      <img
        className="get-job-image"
        src="https://images.unsplash.com/photo-1571805529673-0f56b922b359?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        alt=""
      />

      <div className="business-container">
        <img
          className="business-container-image"
          src="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt=""
        />
        <div className="business-info-div">
          <h3>Get Job</h3>
          <p>Business we Support</p>
          <div className="business-list-container">
            <div className="business-list-item-container">
              <img className="business-list-image" src="/Image/4.png" alt="" />
              <span>Robin Sharma</span>
            </div>
            <div className="business-list-item-container">
              <img className="business-list-image" src="/Image/69.png" alt="" />
              <span>Robin Sharma</span>
            </div>
            <div className="business-list-item-container">
              <img className="business-list-image" src="/Image/66.png" alt="" />
              <span>Robin Sharma</span>
            </div>
            <div className="business-list-item-container">
              <img className="business-list-image" src="/Image/58.png" alt="" />
              <span>Robin Sharma</span>
            </div>
            <div className="business-list-item-container">
              <img className="business-list-image" src="/Image/68.png" alt="" />
              <span>Robin Sharma</span>
            </div>
            <div className="business-list-item-container">
              <img className="business-list-image" src="/Image/5.png" alt="" />
              <span>Robin Sharma</span>
            </div>
          </div>
          <Link to="/" className="business-link">
            View All <BsArrowRightShort style={{ fontSize: "24px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
