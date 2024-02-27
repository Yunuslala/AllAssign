/** @format */
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { EventModal } from "../Modals/event-modal";

export default function HoverCard({ data }) {
  const [modalShow, setModalShow] = useState(false);
  const [img, setImg] = useState("");
  const [head, setHead] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <>
      <EventModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        img={img}
        head={head}
        desc={desc}
      />

      <div className="hover-card-container">
        <img src={data.mainImage} alt="" className="hover-card-image" />
        <div className="hidden-div">
          <h6>{data.title}</h6>
          <p>{data.desc}</p>
          <p
            className="para-link"
            onClick={() => {
              setImg(data.mainImage);
              setHead(data.title);
              setDesc(data.desc);
              setModalShow(true);
            }}
          >
            FIND OUT MORE 
            <BsArrowRightShort style={{ fontSize: "24px" }} />
          </p>
        </div>
        <div className="hover-card-info-container">
          <h6>{data.title}</h6>
          <p>
            Earn upto {data.earnUpto} {data.currency} per {data.per}
          </p>
        </div>
      </div>
    </>
  );
}
