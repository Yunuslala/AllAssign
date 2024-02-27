import React, { useState } from "react";
import { Header } from "../../utils/helpingComponent";
import { BiSearch } from "react-icons/bi";
import Error from "./Error";
const ingredients = ["COSMETICS", "FOOD INGREDIENTS", "BIRTH CONTROL"];
const fullList = [
  "Acetylated Lanolin",
  "Acetylated Lanolin Alcohol",
  "Algae Extract",
  "Algin",
  "Butyl Stearate",
  "Carrageenan",
  "Cetyl Acetate",
  "Coal Tar",
  "Coconut Oil",
  "Design Oleate",
];
const CheckIngredients = () => {
  const [selected, setSelected] = useState("COSMETICS");
  const [iserror, setError] = useState(false);
  console.log(fullList.length);
  console.log(fullList.length - 1);
  return (
    <section className="bg-primary">
      <Header
        heading={"Check Ingredients"}
        styles={"font-light text-secondary"}
      />
      <main className="flex gap-24 justify-center pb-32">
        <div className="w-[54rem]">
          <ul className="flex  justify-between my-6">
            {ingredients.map((list, index) => (
              <li
                className={`${
                  selected === list
                    ? "text-secondary font-extrabold"
                    : "font-medium text-white"
                } whitespace-nowrap text-secondary w-48  text-2xl cursor-pointer flex justify-center `}
                onClick={() => setSelected(list)}
                key={index}
              >
                {list}
              </li>
            ))}
          </ul>

          <div
            className={`w-full flex ${
              selected === "FOOD INGREDIENTS"
                ? "items-center"
                : selected === "BIRTH CONTROL"
                ? "items-end"
                : "items-start"
            } flex-col rounded-full h-1.5 bg-lighterGray`}
          >
            <div
              className={`transition-all duration-700 ease-linear translate-[50%] h-1.5 rounded-full bg-secondary w-52`}
            ></div>
          </div>
          <p className="text-xl text-white font-normal line-clamp-4 my-16">
            If you have acne-prone skin, you need to check skincare, haircare,
            and makeup products for comedogenic ( pore-clogging ) ingredients.
            Please find the ingredients list of the product that you would like
            to check on the Internet, copy and insert it here :
          </p>
          <textarea
            className="w-full text-xl font-bold text-secondary placeholder:text-secondary py-5 px-16  h-72 border border-secondary bg-primary rounded-xl "
            name=""
            id=""
            placeholder="Please insert ingredients here....."
            cols="30"
            rows="10"
          ></textarea>
          <div className="text-2xl font-semibold flex justify-between items-center my-6">
            <button
              onClick={() => setError(true)}
              className="w-96 bg-secondary text-primary  rouded-xl py-3 rounded-xl"
            >
              Check
            </button>
            <button className="w-96 text-secondary border border-secondary rounded-xl py-3">
              Clear
            </button>
          </div>
        </div>
        <div className="w-96 bg-secondary text-primary px-5 rounded-xl">
          <div className="flex justify-between my-9  items-center">
            <span className="text-lg font-semibold">Full List</span>
            <BiSearch className="text-4xl " />
          </div>
          <div className="font-semibold text-sm">
            {fullList.map((list, index) => (
              <p
                key={`list ${index}`}
                className={`flex flex-col ${
                  index === fullList.length - 1
                    ? "border-none"
                    : "border-b border-b-primary  pb-6 mb-4"
                } ""`}
              >
                {list}
              </p>
            ))}
          </div>
        </div>
      </main>
      {iserror && <Error setError={setError} />}
    </section>
  );
};

export default CheckIngredients;
