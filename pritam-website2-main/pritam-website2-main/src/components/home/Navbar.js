import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isLoggedIn } = useSelector((store) => store.user);
  return (
    <div className="bg-primary">
      <header className="flex px-3 justify-between items-center ">
        <div className="w-40 h-40 ">
          <Link className="text-decoration-none" to={"/"}>
            <img
              className="w-full h-full object-contain"
              src="/asessts/navbar/logo.png"
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <img
            className="w-8 h-8"
            src="/asessts/navbar/search.png"
            alt="search"
          />
          <Link to={"mycart"}>
            <FaShoppingCart className="text-secondary w-8 h-8 text-2xl" />
          </Link>
          {isLoggedIn ? (
            <div className="w-8 h-8">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                className="w-full h-full object-cover "
                alt="profiles"
              />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <img
                src="/asessts/navbar/profile.png"
                className="w-8 h-8"
                alt="profiles"
              />
              <Link className="text-secondary font-medium" to={"/login"}>
                <span>LOGIN</span>
              </Link>
            </div>
          )}

          <Link to={"membership"}>
            <img
              className="w-12 h-12"
              src="/asessts/navbar/crown.png"
              alt="crown"
            />
          </Link>
        </div>
      </header>
      <div
        className="mx-auto mt-5"
        style={{ backgroundColor: "#E5D896", height: "2px", width: "85%" }}
      ></div>
    </div>
  );
};

export default Navbar;
