import React from "react";
import Services from "../home/Services";
import ServiceHead from "./ServiceHead";
import { SERVICE_HEAD_IMAGE } from "../../constants/constant";
import { Outlet, useParams } from "react-router-dom";

const ServiceTab = () => {
  const { service } = useParams();
  console.log(service);
  return (
    <section>
      {service ? (
        <Outlet />
      ) : (
        <>
          <ServiceHead
            title={"Services"}
            button={"BOOK ONLINE"}
            img={SERVICE_HEAD_IMAGE}
          />
          <Services />
        </>
      )}
    </section>
  );
};

export default ServiceTab;
