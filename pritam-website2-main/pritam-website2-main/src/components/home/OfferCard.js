/** @format */

import React from "react";

const OfferCard = ({ setBanner }) => {
  return (
    <div className="flex gap-5 bg-secondary items-center justify-between px-3  rounded-md h-full">
      <div className="w-44 xl:w-48 p-2">
        <img src="/asessts/specialOffer.png" className="w-full" alt="" />
      </div>
      <div className="flex flex-col gap-3 py-2">
        <h5 className="text-center text-xs font-bold">
          Get $50 OFF on your First Visit
        </h5>
        <h5
          className="cursor-pointer font-bold"
          onClick={() => setBanner(true)}
        >
          {"CLICK TO VIEW MORE"}
        </h5>
      </div>
    </div>
  );
};

export default OfferCard;
