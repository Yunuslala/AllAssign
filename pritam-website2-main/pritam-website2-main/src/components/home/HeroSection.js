/** @format */

import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative flex flex-shrink-0 justify-between  h-[47rem] bg-primary ">
      <div className=" flex flex-col  justify-evenly ml-20">
        <h1 className="font-Sacramento text-7xl xl:text-8xl text-secondary ml- SacFont">
          Shahina Hoja Aesthetics
        </h1>
        <ul
          className=" text-xl list-disc mt-5 ml-4 space-y-4 "
          style={{ color: "white" }}
        >
          <li>High Acne Clearing Success Rate</li>
          <li>Trained by Top Doctors in NYC</li>
          <li>Top & Latest Technology</li>
          <li>One Time Melasma Treatment</li>
          <li>High Quality Medical Grade Products</li>
        </ul>
        <Link to="/appointment">
          <button className="w-1/4 py-2 font-bold ml-5 text-xl mt-10 text-primary bg-secondary ">
            BOOK ONLINE
          </button>
        </Link>
      </div>
      <div className="absolute right-0 bottom-0 w-[40rem] h-[47rem] ">
        <img
          className="w-full h-full"
          src="/asessts/hero-img.png"
          alt="hero img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
