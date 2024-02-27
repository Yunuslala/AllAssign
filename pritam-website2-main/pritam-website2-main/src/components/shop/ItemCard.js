import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({
  src,
  type,
  baseType,
  largeCardType,
  nutritionType,
  styles,
}) => {
  return (
    <Link to={"/allproducts"}>
      <div className={` flex flex-col items-center cursor-pointer`}>
        <div className={`${styles} relative flex justify-center items-end`}>
          <img className="w-full h-full object-cover" src={src} alt="card" />
          {(type || largeCardType) && (
            <div className="absolute bg-black w-full h-full bg-opacity-25 flex justify-center items-end">
              <h3 className="font-medium text-white mb-16">
                {type || largeCardType}
              </h3>
            </div>
          )}
        </div>
        {baseType && (
          <span className="text-2xl font-normal text-black my-6">
            {baseType}
          </span>
        )}

        {nutritionType && (
          <span className="text-2xl font-normal text-black my-6">
            {nutritionType}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ItemCard;
