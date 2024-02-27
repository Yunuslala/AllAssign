/** @format */

import { Link, useNavigate } from "react-router-dom";
import { FaSearchengin } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";
import { BiDrink } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { StoreContext } from "../../store/store-context";
import { useContext, useState } from "react";
import { HIDE_MOBILE_SIDEBAR } from "../../store/action";
import FindworkOver from "../linkcomponent/FindworkOver";
import FindTalentedOver from "../linkcomponent/FindTalentedOver";
import FreelancingOver from "../linkcomponent/FreelancingOver";
import BartendingOver from "../linkcomponent/BartendingOver";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MobileSideBar() {
  const [state, dispatch] = useContext(StoreContext);
  const [showWork, setShowWork] = useState(false);
  const [showWork1, setShowWork1] = useState(false);
  const [showWork2, setShowWork2] = useState(false);
  const [showWork3, setShowWork3] = useState(false);
  const [show, setShow] = useState(false);

  const closeSidebar = () => {
    dispatch({
      type: HIDE_MOBILE_SIDEBAR,
    });
  };

  const navigate = useNavigate();

  function NavHandler(link) {
    setShowWork(false);
    setShowWork1(false);
    setShowWork2(false);
    setShowWork3(false);
    navigate(link);
    setShow(false);
    closeSidebar();
  }

  function OpenMenu() {
    setShowWork(false);
    setShowWork1(false);
    setShowWork2(false);
    setShowWork3(false);
    setShow(!show);
  }

  return (
    <div className="mobile-sidebar-container">
      <div className="logoContainer">
        <Link to="/">
          <img src="/Image/9.png" alt="logo" />
        </Link>
        <IoMdClose className="icons" onClick={closeSidebar} />
      </div>

      <RxHamburgerMenu className="icons ham_menu" onClick={() => OpenMenu()} />

      {show ? (
        <div
          className="Ham_Menu"
          style={{
            position: "absolute",
            top: "2%",
            zIndex: 200,
            background: "#f5a302",
            width: "90%",
            marginLeft: "5%",
            height: "420px",
          }}
        >
          <div className="close_button">
            <i className="fa-solid fa-x" onClick={() => setShow(false)}></i>
          </div>
          <ul>
            <li style={{ paddingTop: "30px" }} onClick={() => NavHandler("/")}>
              HOME
            </li>
            <li
              style={{ paddingTop: "30px" }}
              onClick={() => NavHandler("/event-booking")}
            >
              EVENT BOOKING
            </li>
            <li
              style={{ paddingTop: "30px" }}
              onClick={() => NavHandler("/bartending")}
            >
              COURSES
            </li>
            <li
              style={{ paddingTop: "30px" }}
              onClick={() => NavHandler("/about-us")}
            >
              ABOUT US
            </li>
            <li
              style={{ paddingTop: "30px" }}
              onClick={() => NavHandler("/contact-us")}
            >
              CONTACT US
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      <div
        className="para-div"
        style={{ position: "relative", minHeight: "450px" }}
      >
        <p className="hoverLinkStyles" onClick={() => setShowWork(true)}>
          <FaSearchengin className="smallIcons" />
          Find Work
        </p>

        {showWork === true ? (
          <FindworkOver
            onHide={() => setShowWork(false)}
            closeSidebar={closeSidebar}
          />
        ) : (
          ""
        )}

        <p className="hoverLinkStyles" onClick={() => setShowWork1(true)}>
          <AiOutlineStar className="smallIcons" />
          Find Talented
        </p>

        {showWork1 ? (
          <FindTalentedOver
            onHide={() => setShowWork1(false)}
            closeSidebar={closeSidebar}
          />
        ) : (
          ""
        )}

        <p className="hoverLinkStyles" onClick={() => setShowWork2(true)}>
          <BsLaptop className="smallIcons" />
          Freelancing
        </p>

        {showWork2 ? (
          <FreelancingOver
            onHide={() => setShowWork2(false)}
            closeSidebar={closeSidebar}
          />
        ) : (
          ""
        )}

        <p className="hoverLinkStyles" onClick={() => setShowWork3(true)}>
          <BiDrink className="smallIcons" />
          School for Bartending
        </p>

        {showWork3 ? (
          <BartendingOver
            onHide={() => setShowWork3(false)}
            closeSidebar={closeSidebar}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
