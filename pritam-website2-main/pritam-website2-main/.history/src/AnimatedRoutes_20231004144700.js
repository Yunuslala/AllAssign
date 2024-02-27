/** @format */

import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./pages/AboutUs";
import EventBooking from "./pages/EventBooking";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/SignIn";
import FindWork from "./pages/FindWork";
import Staff from "./pages/Staff";
import Courses from "./pages/Courses";
import Community from "./pages/Community";
import StaffLoginIn from "./pages/StaffLoginIn";
import BookAnEvent from "./pages/book-an-event";
import BookFullService from "./pages/book-full-service";
import PermanentJob from "./pages/permanent-job";
import CasualStaff from "./pages/casual-staff";
import PermanentStaff from "./pages/permanent-staff";
import ClientLoginIn from "./pages/client-logIn";
import { AnimatePresence } from "framer-motion";
import HOC from "./Pages/HOC";
import PropTypes from "prop-types";
import Freelance from "./pages/Freelance";
import Bartending from "./pages/bartending";
import WhoWeAre from "./pages/WhoWeAre";
import AdScreen from "./pages/AdScreen";

const AnimatedRoutes = () => {
  const location = useLocation();

  const Wrapper = ({ childer }) => {
    return <HOC> {childer} </HOC>;
  };

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Wrapper childer={<HomePage />} />} />
          <Route path="/ads/:id" element={<AdScreen />} />
          <Route 
            path="/bartending"
            element={<Wrapper childer={<Bartending />} />}
          />
          <Route path="/about-us" element={<Wrapper childer={<AboutUs />} />} />
          <Route
            path="/event-booking"
            element={<Wrapper childer={<EventBooking />} />}
          />
          <Route
            path="/contact-us"
            element={<Wrapper childer={<ContactUs />} />}
          />
          <Route path="/sign-in" element={<Wrapper childer={<SignIn />} />} />

          <Route
            path="/find-work"
            element={<Wrapper childer={<FindWork />} />}
          />
          <Route path="/staff" element={<Wrapper childer={<Staff />} />} />
          <Route
            path="/courses/:id"
            element={<Wrapper childer={<Courses />} />}
          />
          <Route
            path="/community/:id"
            element={<Wrapper childer={<Community />} />}
          />
          <Route
            path="/staff-logIn"
            element={<Wrapper childer={<StaffLoginIn />} />}
          />
          <Route
            path="/book-an-event/:id"
            element={<Wrapper childer={<BookAnEvent />} />}
          />
          <Route
            path="/book-full-bar"
            element={<Wrapper childer={<BookFullService />} />}
          />
          <Route
            path="/permanent-job"
            element={<Wrapper childer={<PermanentJob />} />}
          />
          <Route
            path="/casual-staff/:id"
            element={<Wrapper childer={<CasualStaff />} />}
          />
          <Route
            path="/permanent-staff"
            element={<Wrapper childer={<PermanentStaff />} />}
          />
          <Route
            path="/client-login"
            element={<Wrapper childer={<ClientLoginIn />} />}
          />
          <Route
            path="/freelance"
            element={<Wrapper childer={<Freelance />} />}
          />

          <Route path="/whoWeAre/:id" element={<WhoWeAre />} />

        </Routes>
      </AnimatePresence>
    </>
  );
};

AnimatedRoutes.propTypes = {
  childer: PropTypes.node,
};

export default AnimatedRoutes;
