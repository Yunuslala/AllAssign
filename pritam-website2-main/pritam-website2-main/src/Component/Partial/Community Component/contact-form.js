/** @format */

import React, {useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import {useParams} from "react-router-dom";

const ContactForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nearestRegion, setNearestRegion] = useState("");
  const [interest, setInterest] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const {id} = useParams();
  console.log(id);

  const handleDateChange = (date)=>{
    setDate(date);
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const url = "https://pritam-backend.vercel.app/api/v1/user/sendInquire";
    try{
      const {data} = await axios.post(url,{
        firstName, lastName, email, phone, nearestRegion, interest, date, slot
      })
      console.log(data);
    }catch(e){
      console.log(e);
    }
  }
  
  return (
    <div className="Find_work_contact_form">
      <div className="left_container">
        {
          props?.who?.map((ele,i)=>(
            <div className="content">
              <h5>{ele?.title}</h5>
              <p>
                {ele?.desc}
              </p>
            </div>         
          ))
        }
        {/* <div className="content">
          <h5>Lorem ipsum </h5>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et augue. 
          </p>
        </div>
        <div className="content mt-5">
        <h5>Lorem ipsum </h5>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et augue. 
          </p>
        </div>
        <div className="content mt-5">
        <h5>Lorem ipsum </h5>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et augue. 
          </p>
        </div> */}
      </div>

      <div className="right_container">

        <div className="content">
            <h5>Contact Us</h5>
            <p>Use the form below to get in touch.</p>
        </div>
        <div className="contact-query-form">
          <form onSubmit={handleSubmit}>
            <div className="two-inputs">
              <div>
                <label>
                  <span>*</span> First Name
                </label>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)}/>
              </div>
              <div>
                <label>
                  <span>*</span> Last Name
                </label>
                <input type="text"  onChange={(e)=>setLastName(e.target.value)} />
              </div>
            </div>
            <div className="two-inputs mt-4">
              <div style={{ width: "100%" }}>
                <label>
                  <span>*</span> Email Address
                </label>
                <input type="text"  onChange={(e)=>setEmail(e.target.value)}/>
              </div>
            </div>
            <div className="two-inputs mt-4">
              <div style={{ width: "100%" }}>
                <label>
                  <span>*</span> Phone Number
                </label>
                <input type="text"  onChange={(e)=>setPhone(e.target.value)}/>
              </div>
            </div>

            <div className="two-inputs mt-4">
              <div>
                <label>
                  <span>*</span> Nearest Region
                </label>
                <select onChange={(e)=>setNearestRegion(e.target.value)}>
                  <option>Please Select</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Kolkata">Kolkata</option>
                </select>
              </div>
              <div>
                <label>
                  <span>*</span> I’m interested in
                </label>{" "}
                <select onChange={(e)=>setInterest(e.target.value)}>
                  <option>Please Select</option>
                  <option value="community">Community</option>
                  <option value="single">Single</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <p>
                <span>*</span>Availibility to Call Back
              </p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy
              </p>
            </div>

            <Calendar value={date} onChange={handleDateChange} />

            <div className="mt-4">
              <p>
                <span>*</span> Select your Slot & Timings
              </p>
              <input type="text" onChange={(e)=>setSlot(e.target.value)} />
            </div>

            <p className="Privacy">
              By submitting your details, you are giving us permission to
              contact you about our products and services..{" "}
              <span>View our Privacy Policy</span> .
            </p>

            <button className="submit-btn" >SUBMIT</button>

            <p className="assistance">Need Assistance?</p>
            <button className="Whatsapp_Button">
              <i className="fa-brands fa-whatsapp"></i> CONTACT US AT WHATSAPP
            </button>

            <div className="contact_Detail">
              <p>Or Call us at </p>
              <i className="fa-solid fa-phone"></i>
              <p>+44 1234567890</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
