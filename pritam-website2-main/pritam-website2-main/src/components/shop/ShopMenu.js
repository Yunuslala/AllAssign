import React, { useState } from "react";
import { shopMenu } from "../../constants/shopConstant";
import { BsChevronDown } from "react-icons/bs";
import {
  Brands,
  Nutrition,
  ProductType,
  SkinConditions,
  SkinType,
} from "./shopHelpingcomponents";

const ShopMenu = () => {
  const [hoveredType, setHoveredType] = useState(null);
  const [isBrand, setBrand] = useState(true);

  const handleHover = (id) => {
    if (id === 2) {
      setBrand(true);
    }
    setHoveredType(id);
  };

  const handleLeave = () => {
    setBrand(false);
    setHoveredType(null);
  };

  return (
    <div className="relative">
      <ul className="flex justify-evenly items-center py-14">
        {shopMenu.map((item, id) => (
          <li key={id} className="text-2xl font-light cursor-pointer">
            <div
              className="flex items-center gap-2"
              onMouseEnter={() => handleHover(id)}
              onMouseLeave={() => handleLeave()}
            >
              {item}
              <BsChevronDown />
            </div>
          </li>
        ))}
      </ul>
      <div
        className={`absolute top-[92px] py-12 z-[1000] w-full bg-white ${
          hoveredType !== null ? "fade-entered" : "fade-exiting"
        }`}
        onMouseEnter={() => handleHover(hoveredType)}
        onMouseLeave={() => handleLeave()}
      >
        {hoveredType === 0 && <SkinType />}
        {hoveredType === 1 && <ProductType />}
        {hoveredType === 2 && <Brands isBrand={isBrand} />}
        {hoveredType === 3 && <SkinConditions />}
        {hoveredType === 4 && <Nutrition />}
      </div>
    </div>
  );
};

export default ShopMenu;
