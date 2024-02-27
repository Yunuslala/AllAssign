/** @format */

import React, { useEffect, useState } from "react";
import AboutUs from "../Component/Shared/about-us";
import ServiceSlider from "../Component/Sliders/ServiceSlider";
import ReviewSlider from "../Component/Sliders/ReviewSlider";
import PopularJobSlider from "../Component/Sliders/PopularJobSlider";
import StaffSlider from "../Component/Sliders/staffSlider";
import GetJob from "../Component/Partial/GetJob";
import DownBanner from "../Component/DownBanner/DownBanner";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setshow] = useState(true);

  return (
    <>
      {show ? <DownBanner setshow={setshow} /> : ""}
      <AboutUs />
      <PopularJobSlider />
      <ServiceSlider />
      <ReviewSlider />
      <StaffSlider />
      <GetJob />
    </>
  );
};

export default HomePage;
