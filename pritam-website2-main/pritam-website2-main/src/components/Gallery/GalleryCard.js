import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";

const GalleryCard = ({ src, service }) => {
  return (
    <Link
      to={
        "https://www.instagram.com/nurse.shahina/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
      }
      target="_blank"
    >
      <div className="relative h-[70vh]">
        <img
          className="h-full object-cover w-full"
          src={src}
          alt="gallerycard"
        />
        <div className="absolute bottom-5 text-white flex justify-between px-4 w-full">
          <AiOutlineInstagram className="text-5xl" />
          <span className="flex items-center gap-1">
            <BiSolidLike className="text-5xl" />
            <span className="text-xl font-semibold">30</span>
          </span>
        </div>
      </div>
      <h2 className="text-center text-xl font-semibold my-5">{service}</h2>
    </Link>
  );
};

export default GalleryCard;
