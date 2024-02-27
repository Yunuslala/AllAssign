/** @format */
import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function Freelancing(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="Find_Work_Modal Find_Work_Modal2">
        <i className="fa-solid fa-xmark" onClick={() => props.onHide()}></i>
        <h6>Freelancing</h6>
        <p className="desc">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        </p>

        <div className="two-btn">
          <Link to="/freelance" style={{ width: "100%" }}>
            <button>Join Now</button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}

Freelancing.propTypes = {
  onHide: PropTypes.func.isRequired,
};
