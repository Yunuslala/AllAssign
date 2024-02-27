/** @format */

import React, { useEffect } from "react";
import Newsletter from "../Component/Partial/About Us Component/Newsletter";
import HeadingCont from "../Component/Partial/heading-cont";
import UserSelection from "../Component/Partial/Sign In Component/user-selection";

const SignIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeadingCont title={"Continue Signing In with"} content={""} />
      <UserSelection />
      <div className="mt-5" ></div>
      <Newsletter />
      <div style={{ width: "90%", margin: "80px auto" }}>
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/JxZ9iqWVlSE?si=InTXwsXs3JbTwAMf&amp;start=3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="pt-5"></div>
    </>
  );
};

export default SignIn;
