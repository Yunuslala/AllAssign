/** @format */
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getWhoWeAre } from "../../Repo/Api";
import { Skeleton } from "antd";

const AboutUs = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    getWhoWeAre(setLoading, setResponse);
  };

  useEffect(() => {
    fetchHandler();
  }, []);


  return (
    <div>
      <h3 className="center-heading">About us</h3>
      <h1 className="bold-heading">Who we Are ?</h1>

      <div className="itemContainer">
        {loading === true
          ? [1, 2, 3].map((i) => (
              <>
                <div className="text-div" key={i}>
                  <Skeleton active />
                  <Skeleton active />
                </div>
                <div className="about-us-image">
                  <Skeleton.Image active />
                </div>
              </>
            ))
          : response?.map((item, index) =>
              item.desc?.map((i) => (
                <>
                  <div className="text-div" key={index}>
                    <h4 className="about-us-card-heading"> {i.title} </h4>
                    <p className="about-us-card-para">{i.desc?.substr(0,200)}</p>

                    <Link className="about-us-link" to={`/whoWeAre/${item._id}`}>
                      Learn More <BsArrowRightShort />
                    </Link>
                  </div>
                  <img
                    className="about-us-image"
                    src={item.image}
                    alt="randomImage"
                  ></img>
                </>
              ))
            )}
      </div>
    </div>
  );
};

export default AboutUs;
