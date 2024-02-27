/** @format */

import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import HOC from "../layout/HOC";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const token = localStorage.getItem("AdminToken");
  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://pritam-backend.vercel.app/api/v1/admin/dashboard",
        Auth
      );
      const res = response.data.data;
      setData(res);
    } catch {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const card = [
    {
      progress: "bg-green-400",
      title: "All Clients",
      number: data?.client,
      icon: <FiUser className="text-2xl text-[#29cccc]" />,
      bg: "#29cccc",
      link: "/clients",
    },
    {
      progress: "bg-green-400",
      title: "All Staff",
      number: data?.staff,
      icon: <i className="fa-solid fa-users text-2xl text-[#3c335d]"></i>,
      bg: "#3c335d",
      link: "/staff",
    },
    {
      progress: "bg-green-400",
      title: "All Events",
      number: data?.Event,
      icon: (
        <i className="fa-solid fa-calendar-days text-2xl text-[#64878e]"></i>
      ),
      bg: "#64878e",
      link: "/event",
    },

    {
      progress: "bg-green-400",
      title: "Freelancing",
      number: data?.Freelancing,
      icon: (
        <i className="fa-brands fa-free-code-camp text-2xl text-[#660066]"></i>
      ),
      bg: "#660066",
      link: "/freelancing",
    },
    {
      progress: "bg-green-400",
      title: "All Sub Events",
      number: data?.subEvent,
      icon: <i className="fa-solid fa-cloud text-2xl text-[#cc3300]" />,
      bg: "#cc3300",
      link: "/dashboard",
    },
    {
      progress: "bg-green-400",
      title: "Trending Service",
      number: data?.TrendingService,
      icon: <i className="fa-solid fa-gears text-2xl text-[#336699]"></i>,
      bg: "#336699",
      link: "/trending_service",
    },
    {
      progress: "bg-green-400",
      title: "All Popular Job",
      number: data?.popularJob,
      icon: <i className=" fa-brands fa-slack text-2xl text-[#006666]"></i>,
      bg: "#006666",
      link: "/popular-job",
    },

    {
      progress: "bg-green-400",
      title: "Who we are",
      number: data?.whoWeare,
      icon: <i className=" fa-solid fa-globe text-2xl text-[#000066]"></i>,
      bg: "#000066",
      link: "/getWhoWeAre",
    },
    {
      progress: "bg-green-400",
      title: "Courses",
      number: data?.Course,
      icon: <i className=" fa-solid fa-book text-2xl text-[#cc3399]"></i>,
      bg: "#cc3399",
      link: "/courses",
    },
  ];

  return (
    <>
      <section className="dashboard-comp">
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
