/** @format */

import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceCardImages } from "../../constants/constant";

const Services = () => {
  return (
    <section style={{ marginBottom: "40px" }}>
      <div className="py-3 my-14 text-center font-medium text-4xl  mx-auto w-[34rem] h-[4.6]  bg-secondary text-primary">
        Services Menu By Concern
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 service-card ">
        {ServiceCardImages.map((card, index) => (
          <ServiceCard key={index} src={card.src} service={card.service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
