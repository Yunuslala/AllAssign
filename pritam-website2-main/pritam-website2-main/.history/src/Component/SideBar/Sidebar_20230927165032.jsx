/** @format */

import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearchengin } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";
import { BiDrink } from "react-icons/bi";
import { useContext, useState } from "react";
import { StoreContext } from "../../store/store-context";
import { HIDE_OVERLAY } from "../../store/action";
import FindworkOver from "../linkcomponent/FindworkOver";
import FindTalentedOver from "../linkcomponent/FindTalentedOver";
import FreelancingOver from "../linkcomponent/FreelancingOver";
import BartendingOver from "../linkcomponent/BartendingOver";

export default function SideBar() {
  const [state, dispatch] = useContext(StoreContext);
  const [show, setShow] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showWork1, setShowWork1] = useState(false);
  const [showWork2, setShowWork2] = useState(false);
  const [showWork3, setShowWork3] = useState(false);

  const hideOverlay = () => {
    dispatch({ type: HIDE_OVERLAY });
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="sideBarContainer" onClick={hideOverlay}>
        <div className="logoContainer">
          <Link to="/">
            <img src="/Image/9.png" alt="logo" />
          </Link>

          <RxHamburgerMenu
            className="icons"
            onClick={() => {
              setShowWork(false);
              setShowWork1(false);
              setShowWork2(false);
              setShowWork3(false);
              setShow(true);
            }}
          />

          {show ? (
            <div
              className="Ham_Menu"
              style={{
                position: "absolute",
                bottom: "-350px",
                zIndex: 200,
                background: "#f5a302",
                width: "80%",
                left: "10%",
                height: "400px",
              }}
            >
              <div className="close_button">
                <img
                  src="/Image/Mask group.png"
                  onClick={() => setShow(false)}
                  alt=""
                  style={{ cursor: "pointer" }}
                />
              </div>
              <ul>
                <li
                  style={{ paddingTop: "30px" }}
                  onClick={() => {
                    navigate("/");
                    setShow(false);
                  }}
                >
                  HOME
                </li>
                <li
                  style={{ paddingTop: "30px" }}
                  onClick={() => {
                    navigate("/event-booking");
                    setShow(false);
                  }}
                >
                  EVENT BOOKING
                </li>
                <li
                  style={{ paddingTop: "30px" }}
                  onClick={() => {
                    navigate("/bartending");
                    setShow(false);
                  }}
                >
                  COURSES
                </li>
                <li
                  style={{ paddingTop: "30px" }}
                  onClick={() => {
                    navigate("/about-us");
                    setShow(false);
                  }}
                >
                  ABOUT US
                </li>
                <li
                  style={{ paddingTop: "30px" }}
                  onClick={() => {
                    navigate("/contact-us");
                    setShow(false);
                  }}
                >
                  CONTACT US
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>

        <div
          className="para-div"
          style={{ position: "relative", minHeight: "400px" }}
        >
          <p className="hoverLinkStyles" onClick={() => setShowWork(true)}>
            <FaSearchengin className="smallIcons" />
            Find Work
          </p>

          {showWork === true ? (
            <FindworkOver onHide={() => setShowWork(false)} />
          ) : (
            ""
          )}

          <p className="hoverLinkStyles" onClick={() => setShowWork1(true)}>
            <AiOutlineStar className="smallIcons" />
            Find Talented
          </p>

          {showWork1 ? (
            <FindTalentedOver onHide={() => setShowWork1(false)} />
          ) : (
            ""
          )}
          <p className="hoverLinkStyles" onClick={() => setShowWork2(true)}>
            <BsLaptop className="smallIcons" />
            Freelancing
          </p>

          {showWork2 ? (
            <FreelancingOver onHide={() => setShowWork2(false)} />
          ) : (
            ""
          )}

          <p className="hoverLinkStyles" onClick={() => setShowWork3(true)}>
            <BiDrink className="smallIcons" />
            School for <br /> Bartending
          </p>

          {showWork3 ? (
            <BartendingOver onHide={() => setShowWork3(false)} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
