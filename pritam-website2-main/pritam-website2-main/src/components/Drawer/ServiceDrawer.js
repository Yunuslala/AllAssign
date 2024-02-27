/** @format */

import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";

const ServiceDrawer = ({ open, onClose, title }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function NameFinder() {
    if (title === "Hair Loss") {
      setName("Hair Loss Treatment");
      setLink("/services/Hair Loss");
    } else if (title === "Pigmentation") {
      setName("Pigmentation Treatment");
      setLink("/services/PIGMENTATION");
    } else if (title === "Acne") {
      setName("Acne Treatment");
      setLink("/services/ACNE");
    } else if (title === "Aging") {
      setName("Aging Treatment");
      setLink("/services/AGING");
    } else if (title === "Fat Reduction") {
      setName("Fat Reduction Treatment");
      setLink("/services/FAT REDUCTION");
    } else if (title === "Acne Scar") {
      setName("Acne Scar Treatment");
      setLink("/services/ACNE SCAR");
    } else if (title === "Laser Hair Removal") {
      setName("Laser Hair Removal Treatment");
      setLink("/services/LASER HAIR REMOVAL");
    } else if (title === "IV Injection") {
      setName("IV Injection Treatment");
      setLink("/services/IV INJECTION");
    }
  }

  useEffect(() => {
    if (open === true) {
      NameFinder();
    }
  }, [open]);

  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={onClose}
      open={open}
      size={"large"}
    >
      <div className="Service_Drawer">
        <div className="heading">
          <p> {name} </p>
          <img src="/Image/14.png" alt="" onClick={() => onClose()} />
        </div>

        <div className="product-container">
          <div className="Items">
            <img src="/Image/15.png" alt="" />
            <p className="title">Acne Peel with Extractions</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>

            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/16.png" alt="" />
            <p className="title">IPL Acne Treatment</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/17.png" alt="" />
            <p className="title">Microneedling</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/18.png" alt="" />
            <p className="title">Acne Peel with Extractions</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/19.png" alt="" />
            <p className="title">RF Microneedling</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/20.png" alt="" />
            <p className="title">PRF Face Rejuvenation</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/21.png" alt="" />
            <p className="title">Erbium Laser Resurfacing</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/22.png" alt="" />
            <p className="title">Jetpeel Facial</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>

          <div className="Items">
            <img src="/Image/20.png" alt="" />
            <p className="title">PRF Face Rejuvenation</p>
            <p className="member">Member Price</p>
            <span className="price-container">
              <span className="selling-price"> $499</span>
              <span className="mrp">$525.00</span>
            </span>

            <p className="interes">
              Pay with interest free installments with Cherry
            </p>
            <a>CLICK TO LEARN MORE</a>
            <Link to={link}>
              <button>VIEW MORE</button>
            </Link>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ServiceDrawer;
