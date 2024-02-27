/** @format */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBannerType, getSocialLinks } from "../../Repo/Api";

export default function HomeImage() {
  const [data, setData] = useState({});
  const [response, setResponse] = useState({});

  useEffect(() => {
    getBannerType("Homepage", setData);
    getSocialLinks(setResponse);
  }, []);

  return (
    <div  className="BackViedo">
      <Link to="/sign-in">
        <button className="home_page_SingIn"> SIGN IN</button>
      </Link>
      <video
        className="homeImage"
        src={data?.bannerVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="imageInfo">
        <h1>{data?.bannerTitle}</h1>
        <p>{data?.bannerDescription}</p>
      </div>
      <div className="socialLinks">
        <a href={response?.instagram} target="_blank">
          <img src="/Image/26.png" alt="insta" />
        </a>
        <a href={response?.fb} target="_blank">
          <img src="/Image/27.png" alt="facebook" />
        </a>
        <a href={response?.twitter} target="_blank">
          <img src="/Image/28.png" alt="twitter" />
        </a>
        <a href={response?.linkedIn} target="_blank">
          <img src="/Image/29.png" alt="linkedin" />
        </a>
        <a href={response?.whatAppchat} target="_blank">
          <img src="/Image/30.png" alt="whatsapp" />
        </a>
      </div>
    </div>
  );
}
