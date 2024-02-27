/** @format */

import React, { useState } from "react";
import { pictures } from "../../constants/constant";
import { PiInstagramLogoLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Pictures = () => {
  const [hover, sethover] = useState(null);

  return (
    <div className="w-full">
      <div className="grid grid-flow-col overflow-x-scroll no-scrollbar ">
        {pictures.map((picture, index) => (
          <div
            onMouseEnter={() => sethover(index)}
            onMouseLeave={() => sethover(null)}
            key={index}
            className="relative w-72 h-72 flex-shrink-0"
          >
            <img
              key={index}
              className="w-full h-full object-cover"
              src={picture}
              alt=""
            />
            {hover === index && (
              <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 ">
                <Link
                  to={"https://www.instagram.com/nurse.shahina/"}
                  target="_blank"
                  className="flex flex-col gap-2 items-center text-white"
                >
                  <PiInstagramLogoLight className="text-9xl text-white cursor-pointer" />
                  <span className="text-lg font-normal">VIEW ON INSTAGRAM</span>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictures;
