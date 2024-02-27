/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { toast } from "react-toastify";
import { Store } from "react-notifications-component";

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();

  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/dashboard ",
      name: "Dashboard",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/about",
      name: "About",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/privacy-policy",
      name: "Privacy Poilcy",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/terms",
      name: "Terms",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/faq",
      name: "FAQ",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/courses",
      name: "Courses",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/getWhoWeAre",
      name: "Who we are",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/popular-job",
      name: "Popular Job",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/trending_service",
      name: "Trending Service",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/freelancing",
      name: "Freelancing",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/ads",
      name: "ADS",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/event",
      name: "Event",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/clients",
      name: "Client",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/staff",
      name: "Staff",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/enquires",
      name: "Inquires",
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/newsletter",
      name: "Newsletter",
    },
   
    {
      icon: (
        <i className="fa-solid fa-image text-xl mr-3 rounded-full" />
      ),
      link: "/banner",
      name: "Banner",
    },
  ];

  const logOut = () => {
    localStorage.clear();
    navigate("/");
    Store.addNotification({
      title: "",
      message: msg,
      type: "success",
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  };

  return (
    <>
      <aside
        className="p-4 h-auto"
        style={{ backgroundColor: "#0c0c0c", minHeight: "100vh" }}
      >
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>{" "}
        <figure className="flex  flex-col items-center">
          <span
            className="font-bold text-[#fff]"
            style={{
              fontSize: "2rem",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {" "}
            ADMIN PANEL
          </span>
        </figure>
        <nav className="py-6">
          {nav.map((nav) => {
            return (
              <Link
                to={nav.link}
                key={nav.name}
                className=""
                style={{ textDecoration: "none", textTransform: "uppercase" }}
              >
                <span
                  className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
                  style={{ color: "#FFF" }}
                >
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            onClick={() => logOut()}
            style={{ color: "#FFF", textTransform: "uppercase" }}
          >
            <BiLogOutCircle className="text-xl mr-3 rounded-full " /> LogOut
          </span>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
