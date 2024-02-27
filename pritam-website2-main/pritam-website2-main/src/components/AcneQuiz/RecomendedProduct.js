import React from "react";
import { Header } from "../../utils/helpingComponent";
import { Link } from "react-router-dom";

const RecomendedProduct = () => {
  return (
    <div>
      {" "}
      <Header heading={"Acne Quiz"} />
      <div className="w-[59rem] h-[75rem] bg-secondary text-white flex flex-col  items-center mx-auto mb-20  px-24 py-40">
        <h1 className="text-4xl font-medium text-center">
          Recommended Product
        </h1>
        <div className="flex items-center my-20 -ml-24">
          <div className="w-[26rem]  h-[30rem]">
            <img
              className="w-full h-full object-contain"
              src="https://s3-alpha-sig.figma.com/img/8aa2/1810/81fafc0d4a4758661022f9dba6ba1763?Expires=1696204800&Signature=RtIbeyvxB8hLnstt2cVX5LHDV5EaGKqkVdi7mfysioES7wwtRHblTsCJH--h2FbihMm4F7zkFhYxrwVIGy5yli1K3yVz1UQjJViqhuj6THb-JEX-kx4KVG63iNydNSIoU-hrp1PqeL4O6pdzR~lwZOHViEA0CHDUUAfKNRBsPaJS92AC2RQMqevTU4ztV-viIiWGAlTQ7kmC58OHDDkmbE9mUd46lStO0QkRYvCeEx6GAOixqaW0n0bwUyBF~vOU~U~Ow78IfpRbXNWDa24x36wqOI7MlGRUOXUmQSxhde6XLvOAgxyxe~PCSUY~6d-J2EALtd-lSBkPRXZ7aTTpaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="product"
            />
          </div>
          <div className="flex  flex-col gap-14">
            <h1 className="text-4xl font-normal">EXODERMA PEEL</h1>
            <p className="w-[29rem] text-xl ">
              A natural exfoliating formula from the sea that helps remove dead,
              dry skin cells. Exoderma Peel provides a quick pick-up and
              skin-tightening treatment suitable for mature, sensitive skin. Mix
              with Foamy Lift Tightening Facial Mask for a deeper exfoliating
              treatment. Size: 60ml (2oz)
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 text-center w-[45rem] text-2xl font-bold">
          <Link className="bg-primary py-6">VIEW PRODUCT</Link>
          <Link to={"/"} className="border-2 py-6 text-primary border-primary">
            GO BACK TO HOME PAGE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecomendedProduct;
