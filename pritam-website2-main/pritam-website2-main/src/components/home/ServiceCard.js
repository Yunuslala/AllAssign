/** @format */

import React, { useState } from "react";
import ServiceDrawer from "../Drawer/ServiceDrawer";

const ServiceCard = ({ src, service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <>
      <ServiceDrawer onClose={onClose} open={open} title={service} />
      <div
        className="m-2 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full h-[30rem] xl:h-[39rem]">
          <img
            src={src}
            alt="service1"
            className="w-full h-full object-cover"
          />
          {!isHovered && (
            <div className="absolute top-0 w-full h-full  bg-black bg-opacity-30">
              <p className="absolute bottom-20 left-0 right-0 text-center text-white text-4xl font-medium">
                {service}
              </p>
            </div>
          )}

          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70">
              <div className="flex flex-col items-center space-y-3">
                <span className="text-4xl font-medium">{service}</span>

                <button
                  className="btn-bookNow px-4 border border-white text-white"
                  onClick={() => showDrawer()}
                >
                  {" Book Now"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
