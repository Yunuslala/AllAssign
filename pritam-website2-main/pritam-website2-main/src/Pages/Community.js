/** @format */

import React, { useEffect , useState} from "react";
import Banner from "../Component/Partial/Community Component/Banner";
import ContactForm from "../Component/Partial/Community Component/contact-form";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import {useParams} from "react-router-dom";
import axios from "axios";

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [who, setWho] = useState([]);
  const {id} = useParams();
  const getWho = async () => {
    const url = `https://pritam-backend.vercel.app/api/v1/admin/getWhoWeareById/${id}`;
    try{
      const {data} = await axios.get(url);
      console.log(data?.data?.desc);
      setWho(data?.data?.desc);
    }catch(err){
      console.log(err.message)
    }
  };

  useEffect(() => {
    getWho();
  }, []);

  return (
    <>
      <div className="Community_Page">
        <Banner />
        <ContactForm who={who}/>
        <FAQ />

        <div className="About-Us_Newsletter">
          <div className="left">
            <img src="./Image/91.png" alt="" />
          </div>
          <div className="right">
            <div className="content">
              <h5>Sign up for our e-newsletter</h5>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque mattis, neque laoreet porta imperdiet, ex dolor
                accumsan enim, sed convallis ligula erat elementum tellus.
                Maecenas eu convallis augue. Curabitur id a
              </p>

              <form>
                <div className="Two_Inputs">
                  <div>
                    <label>
                      <span>*</span>First Name
                    </label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>
                      <span>*</span>Last Name
                    </label>
                    <input type="text" />
                  </div>
                </div>
                <div className="Single_Input">
                  <div>
                    <label>
                      <span>*</span>Email Address
                    </label>
                    <input type="email" />
                  </div>
                </div>
                <div className="Two_Inputs">
                  <div>
                    <label>
                      <span>*</span>Nearest Region
                    </label>
                    <select>
                      <option>Please Select</option>
                    </select>
                  </div>
                  <div>
                    <label>
                      <span>*</span>I’m interested in
                    </label>
                    <select>
                      <option>Please Select</option>
                    </select>
                  </div>
                </div>
              </form>

              <p className="Policy">
                By subscribing, you are giving us permission to contact you
                about our products and services. You may unsubscribe at any time{" "}
                <span>View our Privacy Policy</span> .
              </p>

              <button className="NewsLetter_Button">
                SUBSCRIBE TO NEWSLETTER
              </button>

              <p className="Assistance_P">Need Assistance?</p>

              <button className="Whatsapp_Button">
                <i className="fa-brands fa-whatsapp"></i> CONTACT US AT WHATSAPP
              </button>

              <div className="contact_Detail">
                <p>Or Call us at </p>
                <i className="fa-solid fa-phone"></i>
                <p>+44 1234567890</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5"></div>
      </div>
    </>
  );
};

export default Community;
