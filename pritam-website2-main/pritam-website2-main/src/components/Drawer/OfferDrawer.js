/** @format */

import React from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";

const OfferDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={onClose}
      open={open}
      size={"large"}
    >
      <div className="Service_Drawer offer_Drawer">
        <div className="heading">
          <div>
            <img src="/Image/32.png" alt="" />
            <p>Limited Time Offers</p>
          </div>
          <img src="/Image/14.png" alt="" onClick={() => onClose()} />
        </div>

        <div className="product-container">
          <div className="Items">
            <img src="/Image/33.png" className="offer" alt="" />
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
            <Link to="/paymentplan">CLICK TO LEARN MORE</Link>

            <button>VIEW MORE</button>
          </div>

          <div className="Items">
            <img src="/Image/33.png" className="offer" alt="" />
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
            <Link to="/paymentplan">CLICK TO LEARN MORE</Link>
            <button>VIEW MORE</button>
          </div>

          <div className="Items">
            <img src="/Image/33.png" className="offer" alt="" />
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
            <Link to="/paymentplan">CLICK TO LEARN MORE</Link>
            <button>VIEW MORE</button>
          </div>

          <div className="Items">
            <img src="/Image/33.png" className="offer" alt="" />
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
            <Link to="/paymentplan">CLICK TO LEARN MORE</Link>
            <button>VIEW MORE</button>
          </div>

          <div className="Items">
            <img src="/Image/33.png" className="offer" alt="" />
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
            <Link to="/paymentplan">CLICK TO LEARN MORE</Link>
            <button>VIEW MORE</button>
          </div>

          <div className="Items">
            <img src="/Image/33.png" className="offer" alt="" />
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
            <Link to="/paymentplan">CLICK TO LEARN MORE</Link>
            <button>VIEW MORE</button>
          </div>

          <div className="Items">
            <img src="/Image/33.png" className="offer" alt="" />
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
            <Link to="/paymentplan">CLICK TO LEARN MORE</Link>
            <button>VIEW MORE</button>
          </div>

          <div className="Items">
            <img src="/Image/33.png" className="offer" alt="" />
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
            <Link to="/paymentplan">CLICK TO LEARN MORE</Link>
            <button>VIEW MORE</button>
          </div>

          <div className="Items">
            <img src="/Image/33.png" className="offer" alt="" />
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
            <Link to="/paymentplan">CLICK TO LEARN MORE</Link>
            <button>VIEW MORE</button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default OfferDrawer;
