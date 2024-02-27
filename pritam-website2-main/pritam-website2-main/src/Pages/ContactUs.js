/** @format */

import React, { useEffect, useState } from "react";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import OverflowingContent from "../Component/Partial/Contact Us Components/Overflowing-content";
import { getBannerType } from "../Repo/Api";

const ContactUs = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getBannerType("	Contact Us", setData);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="Contact-Us_Banner"
        style={{ backgroundImage: `url(${data?.bannerImage})` }}
      >
        <div className="content" style={{ width: "80%" }}>
          <h2> {data?.bannerTitle} </h2>
          <p>{data?.bannerDescription}</p>
        </div>
      </div>

      <OverflowingContent />
      <FAQ />
      <div className="pt-5"></div>
    </>
  );
};

export default ContactUs;
