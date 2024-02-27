/** @format */

import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Footer from "./Component/Footer/Footer";
import Overlay from "./Component/Overlay/Overlay";
import { StoreContext } from "./store/store-context";
import SideBar from "./Component/SideBar/Sidebar";
import GlobalModal from "./Component/Modals/Globalmodal";
import { RxHamburgerMenu } from "react-icons/rx";
import 
MobileSideBar from "./Component/SideBar/MobileSideBar";
import { SHOW_MOBILE_SIDEBAR } from "./store/action";
import HomeImage from "./Component/Partial/HomeImage";
import { ReactNotifications } from "react-notifications-component";
import "./Css/Navbar.css";
import "./Css/Lap.css";
import "./Css/Responsive.css";
import "./Css/Mobile.css";

const App = () => {
  const [state, dispatch] = useContext(StoreContext);
  const location = useLocation();

  const openMobileSidebar = () => {
    dispatch({ type: SHOW_MOBILE_SIDEBAR });
  };

  return (
    <>
      <ReactNotifications />
      <SideBar />
      {location.pathname === "/" && <HomeImage />}
      {state.showMobileSideBar && <MobileSideBar />}
      <div className="appDisplay">
        <AnimatedRoutes />
        <Footer />
      </div>
      <div className="app-hamburger-icon">
        {!state.showMobileSideBar && (
          <RxHamburgerMenu onClick={openMobileSidebar} />
        )}
      </div>
      {state.showOverlay.show && <Overlay data={state.showOverlay} />}
      {state.showModal.show && <GlobalModal data={state.showModal} />}
    </>
  );
};

export default App;
