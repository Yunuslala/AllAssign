/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { partners } from "../../constants/constant";

const DescriptionView = ({
  src,
  title,
  content,
  desc,
  desc1,
  btnName,
  styles,
  reverse,
  link,
}) => {
  const navigate = useNavigate();

  return (
    <div className={`flex ${reverse} flex-shrink-0`}>
      {title === "Our Partners" ? (
        <div className="w-1/2 h-[44rem] flex-shrink-0 grid grid-cols-2 gap-3 justify-items-center items-center py-28 px-16 bg-lightSecondary">
          {partners.map((src, index) => (
            <div key={`partner ${index}`}>
              <img className="w-2/3" src={src} alt="partner" />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-1/2 h-[44rem] flex-shrink-0">
          <img className="h-full w-full object-cover" src={src} alt="" />
        </div>
      )}

      <div className="flex flex-col items-center justify-between  w-full">
        <h1 className=" bg-secondary w-full text-center  py-4 text-4xl font-medium text-primary">
          {title}
        </h1>
        <div className="px-12 py-10 h-full text-center ">
          {content && (
            <h4
              className={`text-3xl  font-medium leading-10 ${
                styles ? styles : "mb-28"
              }`}
            >
              {content}
            </h4>
          )}

          <p className="text-2xl font-normal mb- leading-10 text-left">
            {desc}
          </p>
          {desc1 && (
            <p className="text-2xl font-normal leading-10 text-left mt-8">
              {desc1}
            </p>
          )}
        </div>
        {btnName && (
          <button
            className="w-96 py-3 mb-14 text-primary bg-secondary  text-2xl font-semibold"
            onClick={() => navigate(link)}
          >
            {btnName}
          </button>
        )}
      </div>
    </div>
  );
};

export default DescriptionView;
