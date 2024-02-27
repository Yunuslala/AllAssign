/** @format */
import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

export function EventModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="Chef_Modal">
      <i class="fa-solid fa-x"  onClick={() => props.onHide()}></i>
        <div className="container">
          <div className="left">
            <img src={props.img} alt="" />
          </div>
          <div className="right">
            <h5> {props.head} </h5>
            <p className="desc">{props.desc}</p>

            <div className="small-C">
              {props?.descPoints?.map((ele, i) => (
                <div className="two-sec">
                  <i className="fa-solid fa-check"></i>
                  <p>{ele}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

EventModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
};
