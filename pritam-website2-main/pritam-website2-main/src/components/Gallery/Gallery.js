import React from "react";
import GalleryCard from "./GalleryCard";
import { galleryImages } from "../../constants/constant";
import { Header } from "../../utils/helpingComponent";

const Gallery = () => {
  return (
    <div>
      <Header heading={"Gallery"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-12">
        {galleryImages.map((item, index) => (
          <GalleryCard key={index} src={item.src} service={item.service} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
