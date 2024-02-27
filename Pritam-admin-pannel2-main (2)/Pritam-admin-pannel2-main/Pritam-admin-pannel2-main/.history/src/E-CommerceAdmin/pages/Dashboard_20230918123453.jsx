/** @format */

import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import HOC from "../layout/HOC";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [ data , setData ] = useState({})


  const fetchData = async () => {
    try{
      const response = await axios.get("https://pritam-backend.vercel.app/api/v1/admin/dashboard")
      const res = response.data.data
      setData(res)
    }catch{}
  }


  useEffect(() => {
   fetchData()
  }, []);

  const card = [
    {
      progress: "bg-green-400",
      title: "All Clients",
      number: data?.client,
      icon: <FiUser className="text-2xl text-[#29cccc]" />,
      bg: "#29cccc",
      link: "/Category",
    },
    {
      progress: "bg-green-400",
      title: "All Product",
      number: productCount,
      icon: <i className="fa-solid fa-cart-shopping text-2xl text-[#3c335d]"></i>,
      bg: "#3c335d",
      link: "/Product",
    },
    {
      progress: "bg-green-400",
      title: "All User",
      number: categoryCount,
      icon: <i className=" fa-brands fa-slack text-2xl text-[#64878e]"></i>,
      bg: "#64878e",
      link: "/user",
    },
  
    {
      progress: "bg-green-400",
      title: "All orders",
      number: orderCount,
      icon: (
        <i className=" fa-solid fa-bag-shopping text-2xl text-[#1b6975]"></i>
      ),
      bg: "#1b6975",
      link: "/Orders",
    },
  ];


  
  return (
    <>
      <section className="grid md:grid-cols-4 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md cardDiv"
              key={index}
              style={{
                backgroundColor: `${card.bg}`,
                textTransform: "uppercase",
              }}
              onClick={() => navigate(`${card.link}`)}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span
                    className="tracking-widest text-gray-900"
                    style={{ color: "#fff" }}
                  >
                    {card.title}
                  </span>
                  <span
                    className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold"
                    style={{ color: "#fff" }}
                  >
                    {card.number}
                  </span>
                </div>
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center iCOn">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Dashboard);
