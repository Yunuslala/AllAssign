import React from "react";
import ServiceHead from "../Services/ServiceHead";
import { BiSearch } from "react-icons/bi";
import { PRODUCTS_HEADER_IMAGE } from "../../constants/products";
import AllProducts from "./AllProducts";
import Options from "./Options";

const skintype = [
  "All Skin Types",
  "Aging",
  "Dry",
  "Normal",
  "Oily",
  "Sensitive",
];
const productType = ["Moisturizer", "Cleanser", "Toner"];
const skinConditions = ["Aging", "Pigmentation", "Rosacea", "Sensitive"];
const ProductPage = () => {
  return (
    <section>
      <ServiceHead img={PRODUCTS_HEADER_IMAGE} title={"DMK Products"} />
      <section>
        <div className="relative">
          <h1 className="text-4xl text-center font-medium text-primary my-20">
            ALL PRODUCTS
          </h1>
          <div className="absolute top-0 right-12 flex gap-5 items-center text-xl border-b-2 pb-2   w-80 border-b-primary text-primary">
            <BiSearch className="text-3xl" />
            <input
              className="px-2"
              type="text"
              placeholder="Search Products...."
            />
          </div>
        </div>

        <div className="flex flex-shrink-0 justify-between items-start">
          <div className=" w-[30%] px-12 py-4">
            <Options type={"SKIN TYPE"} options={skintype} />
            <Options type={"PRODUCT TYPE"} options={productType} />
            <Options type={"SKIN CONDITION"} options={skinConditions} />
          </div>
          <div className="w-full border-l-2 border-l-primary mb-20">
            <AllProducts />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductPage;
