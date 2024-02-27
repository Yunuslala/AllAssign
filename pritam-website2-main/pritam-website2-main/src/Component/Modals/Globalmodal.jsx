/** @format */

import { useContext } from "react";
import { BsCheckLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { StoreContext } from "../../store/store-context";
import { HIDE_MODAL } from "../../store/action";

export default function GlobalModal({ data }) {
  const [state, dispatch] = useContext(StoreContext);

  const closeHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: HIDE_MODAL,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <img src={data.image} alt="" />
        <div className="modal-info-div">
          <h1>{data.title}</h1>
          <p>{data.info}</p>
          <div className="modal-list-container">
            {data.points && (
              data.points.map((item, index) => {
                  return (
                    <p className="modal-list-items" key={index}>
                      {" "}
                      <BsCheckLg className="modal-list-icon" /> {item}
                    </p>
                  );
                })
            )}
          </div>
        </div>

        <IoMdClose className="closeIcon" onClick={closeHandler} />
      </div>
    </div>
  );
}
