/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./E-CommerceAdmin/forms/Login";
import Dashboard from "./E-CommerceAdmin/pages/Dashboard";
import Privacy from "./E-CommerceAdmin/pages/Privacy/Privacy";
import { ReactNotifications } from "react-notifications-component";
import Terms from "./E-CommerceAdmin/pages/Terms/Terms";
import Faq from "./E-CommerceAdmin/pages/Faq/Faq";
import Courses from "./E-CommerceAdmin/pages/Courses/Courses";
import WhoWeAre from "./E-CommerceAdmin/pages/WhoWeAre/WhoWeAre";
import PopularJob from "./E-CommerceAdmin/pages/PopularJob/PopularJob";
import TrendingService from "./E-CommerceAdmin/pages/TrendingService/TrendingService";
import Freelancing from "./E-CommerceAdmin/pages/Freelancing/Freelancing";
import Ads from "./E-CommerceAdmin/pages/Ads/Ads";
import Event from "./E-CommerceAdmin/pages/Event/Event";
import SubEvent from "./E-CommerceAdmin/pages/Event/SubEvent";
import Client from "./E-CommerceAdmin/pages/Client/Client";
import Staff from "./E-CommerceAdmin/pages/Staff/Staff";
import Inquires from "./E-CommerceAdmin/pages/Inquires/Inquires";
import NewsLetter from "./E-CommerceAdmin/pages/Newsletter/NewsLetter";
import About from "./E-CommerceAdmin/pages/About/About";
import Banner from "./E-CommerceAdmin/pages/Banner/Banner";
import Profile from "./E-CommerceAdmin/pages/Profile/Profile";

function App() {
  return (
    <>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ReactNotifications />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/getWhoWeAre" element={<WhoWeAre />} />
        <Route path="/popular-job" element={<PopularJob />} />
        <Route path="/trending_service" element={<TrendingService />} />
        <Route path="/freelancing" element={<Freelancing />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/event" element={<Event />} />
        <Route path="/sub-event/:id" element={<SubEvent />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/enquires" element={<Inquires /> } />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/about" element={<About />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/socialLinks" elem
      </Routes>
    </>
  );
}

export default App;
