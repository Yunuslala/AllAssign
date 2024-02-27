import React from "react";
import { Link } from "react-router-dom";

const MenuOptions = () => {
  return (
    <header className="bg-primary text-xl font-medium  text-secondary py-7">
      <ul className="flex justify-evenly">
        <Link>HOME</Link>
        <Link to={"shop"}>SHOP</Link>
        <Link to={"services"}>SERVICES</Link>
        <Link to={"gallery"}>GALLERY</Link>
        <Link to={"paymentplan"}>PAYMENT PLANS</Link>
        <Link to={"contact"}>CONTACT</Link>
        <Link to={"aboutus"}>ABOUT US</Link>
      </ul>
    </header>
  );
};

export default MenuOptions;
