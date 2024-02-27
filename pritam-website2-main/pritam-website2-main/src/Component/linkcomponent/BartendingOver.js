/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const BartendingOver = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="Ham_Menu over_One  "
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 200,
        background: "#f5a302",
        height: "90%",
      }}
    >
      <div className="Desc">
        <div className="Close-Button">
          <p className="title"> SCHOOL FOR BARTENDING </p>
          <i className="fa-solid fa-x" onClick={() => props.onHide()}></i>
        </div>

        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>

        <div className="buttons last_buttons">
          <button
            onClick={() => {
              props.closeSidebar && props.closeSidebar();
              props.onHide();
              navigate("/bartending");
            }}
          >
            JOIN NOW{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BartendingOver;
