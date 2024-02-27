import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const CartProduct = () => {
  return (
    <div>
      <div className="flex justify-between gap-14">
        <div className="w-60 h-60">
          <img
            className="h"
            src="https://s3-alpha-sig.figma.com/img/44b6/7c99/b6d3d6d36c562375270d02921fdfcdd1?Expires=1695600000&Signature=VhB~f4b7r52ZWVD3kEjw8aRv0w9nZWcCwicHDGCzZqC8AUTxQ8X6kZCD20viYwaC-3zIOycJ4L1k5~XbGL-Wl5k2LAE1ZvpOyNh1o0AMYZd52kgoOXVSjCvwxUt4cXVJuZNUC5wgLqzef2-ayAOem0mcfATjiXgreFqYEd90crFMlDylbHpFPhwrQujvMfK-nAyaPa9Il6ej0pBaWMdb0SgPo9aCz4zU2Mpo4e-MidmRTQNCGYP0XQBNFgBvsbuER6e0jpCEKnd8irQpT2zLqVwmhxERuu6vUsDhXm6y-ZKW69KQ7kucg3mgcw~oAixOC41e0rhH-nok4Nq6AAdryQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="product"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xl leading-10">PORE REDUCTION PLUS</p>
          <span className="text-sm text-center">
            {"Size : 30 ml ( 1 fl oz) "}
          </span>
          <div className="mt-10">
            <span className="font-bold text-xl leading-10">OTY</span>
            <div className="flex justify-center">
              <span className="flex justify-center items-center text-xl font-medium w-8 h-8 bg-gray-400">
                -
              </span>
              <input
                className="text-center border border-black"
                type="number"
              />
              <span className="flex justify-center items-center text-xl font-medium w-8 h-8 bg-gray-400">
                +
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between ">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary leading-10">
              $125.00
            </span>
            <p className="line-through text-center">$125.00</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <button className="py-2 text-lg px-8 font-medium border-2 border-primary text-primary">
              REPLACE BUTTON
            </button>
            <button className="flex gap-2 py-2 px-8 font-medium text-lg items-center text-orange-600">
              <RiDeleteBin6Fill />
              DELETE ITEM
            </button>
          </div>
        </div>
      </div>
      <hr className="bg-black h-0.5  my-10" />
    </div>
  );
};

export default CartProduct;
