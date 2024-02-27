/** @format */
import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function BoardingModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body
        className="Find_Work_Modal"
        style={{ backgroundColor: "#033C59" }}
      >
        <i className="fa-solid fa-xmark" onClick={() => props.onHide()}></i>
        <h6>School for Bartending</h6>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat
          quis tortor eget pharetra. Proin leo turpis, scelerisque vitae mattis
          et, porttitor in purus. Maecenas interdum ornare purus id{" "}
        </p>

        <div className="two-btn">
          <Link to="/courses" style={{ width: "100%" }}>
            <button>JOIN NOW</button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}

BoardingModal.propTypes = {
  onHide: PropTypes.func.isRequired,
};