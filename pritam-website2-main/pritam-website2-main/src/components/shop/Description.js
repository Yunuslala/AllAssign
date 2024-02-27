import React from "react";
import { galleryImages } from "../../constants/constant";

const Description = ({ src, id, setDesc }) => {
  return (
    <div className="flex w-11/12 mx-auto my-36">
      <div className="w-[36rem] h-[36rem] flex-shrink-0">
        <img className="h-full w-full" src={src} alt="desc" />
      </div>
      <div className=" flex flex-col justify-between pb-10 items-start  px-12 pt-16 border border-t-primary border-r-primary border-b-primary">
        <h1 className="text-4xl font-medium text-primary">LOREM IPSUM!</h1>
        <p className="text-2xl font-normal text-left">
          Suspendisse vitae mattis ligula. Vivamus est felis, cursus at porta
          non, pretium quis tortor. Curabitur at orci quis felis tincidunt
          posuere. In volutpat dolor sit amet eros pharetra, in sagittis eros
          porta. Proin et ultricies ipsu
        </p>
        <p className="text-xl font-normal">
          Suspendisse vitae mattis ligula. Vivamus est felis, cursus at porta
          non, pretium quis tortor. Curabitur at orci quis felis tincidunt
          posuere. In volutpat dolor sit amet eros pharetra, in sagittis eros
          porta. Proin et ultricies ipsu
        </p>
        <div className="flex gap-2 ml-16">
          {galleryImages.map((item, index) => (
            <hr
              onClick={() => setDesc(index)}
              className={` rounded-xl h-2 ${
                id === index ? "w-28 bg-primary" : "bg-lighterGray w-11"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
