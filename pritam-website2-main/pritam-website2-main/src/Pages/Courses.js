/** @format */

import React, { useEffect, useState } from "react";
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import HeadingCont from "../Component/Partial/heading-cont";
import LinkSection from "../Component/Partial/LinkSection";
import { useParams } from "react-router-dom";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const { id } = useParams();
  const getCourses = async () => {
    const url = `https://pritam-backend.vercel.app/api/v1/course/viewByTrendingServiceId/${id}`;
    try {
      const { data } = await axios.get(url);
      setCourses(data?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getCourses();
  }, []);

  return (
    <>
      <div className="courses_overflow">
        <LinkSection />
        <div className="Contact-Us_Banner">
          <div className="content">
            <h2>School for Bartending....JOIN NOW!!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempus eleifend ullamcorper. Sed maximus nunc vitae metus
              pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem
              congue efficitur id ut orci. Mauris volutpat tortor non lectus
              rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh.
              Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis.
            </p>
          </div>
        </div>

        <div className="contact-us-overflow-main">
          <div className="Content">
            <div className="Main">
              <h5>Explore Our Courses</h5>
              <div className="search">
                <input type="search" placeholder="Search Courses Available" />
                <div className="search-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
            <div className="office_images">
            {
              courses?.map((ele,i)=>(
                <>
                    <div className="container">
                      <img src={ele?.image[0]} alt="" />
                      <p>{ele?.title}</p>
                    </div>
                </>
              ))
            }
            </div>

            {/* <div className="office_images">
              <div className="container">
                <img src={courses?.[0]?.image?.[0]} alt="" />
                <p>Lorem Ipsum</p>
              </div>
              <div className="container">
                <img src="./Image/46.png" alt="" />
                <p>Lorem Ipsum</p>
              </div>
              <div className="container">
                <img src="./Image/46.png" alt="" />
                <p>Lorem Ipsum</p>
              </div>
            </div> */}

            <div className="icon-div">
              {
                courses?.map((ele,i)=>(
                  <>
                    <div className="left">
                      <div className="container">
                        <p className="desc">
                          {ele?.description}
                        </p>
                      </div>

                      <div className="container mt-3">
                        <i className="fa-solid fa-tag"></i>
                        <p>Price - {ele?.price}£</p>
                      </div>
                      <div className="container mt-3">
                        <i className="fa-solid fa-hourglass-start"></i>
                        <p>
                          Duration - <br />
                          {ele?.toDay} - {ele?.fromDay} , {ele?.toTime}{" "}
                        </p>
                      </div>
                      <div className="container mt-1">
                        <button>Learn More</button>
                      </div>
                    </div>                   
                  </>
                ))
              }
              {/* <div className="left">
                <div className="container">
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent nisi lacus, cursus pharetra
                  </p>
                </div>

                <div className="container mt-3">
                  <i className="fa-solid fa-tag"></i>
                  <p>Price - 400£</p>
                </div>
                <div className="container mt-3">
                  <i className="fa-solid fa-hourglass-start"></i>
                  <p>
                    Duration - <br />
                    Mon - Fri , 10:00 - 16:00{" "}
                  </p>
                </div>
                <div className="container mt-1">
                  <button>Learn More</button>
                </div>
              </div>

              <div className="left">
                <div className="container">
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent nisi lacus, cursus pharetra
                  </p>
                </div>
                <div className="container mt-3">
                  <i className="fa-solid fa-tag"></i>
                  <p>Price - 400£</p>
                </div>
                <div className="container mt-3">
                  <i className="fa-solid fa-hourglass-start"></i>
                  <p>
                    Duration - <br />
                    Mon - Fri , 10:00 - 16:00{" "}
                  </p>
                </div>
                <div className="container mt-1">
                  <button>Learn More</button>
                </div>
              </div>

              <div className="left">
                <div className="container">
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent nisi lacus, cursus pharetra
                  </p>
                </div>

                <div className="container mt-3">
                  <i className="fa-solid fa-tag"></i>
                  <p>Price - 400£</p>
                </div>
                <div className="container mt-3">
                  <i className="fa-solid fa-hourglass-start"></i>
                  <p>
                    Duration - <br />
                    Mon - Fri , 10:00 - 16:00{" "}
                  </p>
                </div>
                <div className="container mt-1">
                  <button>Learn More</button>
                </div>
              </div> */}
            </div>

            <div className="About-Us_Newsletter">
              <div className="left">
                <img src="./Image/48.png" alt="" />
              </div>
              <div className="right">
                <div className="content">
                  <h5>Book a Bartending Course</h5>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent nisi lacus, cursus pharetra
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

                    <div className="Single_Input">
                      <div>
                        <label>
                          <span>*</span>Mobile Phone Number
                        </label>
                        <input type="email" />
                      </div>
                    </div>

                    <div className="Two_Inputs mt-2">
                      <div style={{ width: "100%" }}>
                        <label>Any Comments</label>
                        <textarea placeholder="Type here........." />
                      </div>
                    </div>

                    <div className="Two_Inputs mt-2">
                      <div style={{ width: "100%" }}>
                        <label>
                          {" "}
                          <span>*</span> Availibility to Call Back
                        </label>
                        <p className="Policy" style={{ marginTop: "0" }}>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy Lorem ipsum dolor sit amet,
                          consetetur sadipscing elitr, sed diam nonumy
                        </p>
                      </div>
                    </div>

                    <Calendar />

                    <div className="Single_Input">
                      <div>
                        <label>
                          <span>*</span>Select your Slot & Timings
                        </label>
                        <input type="text" />
                      </div>
                    </div>
                  </form>

                  <p className="Policy" style={{ marginTop: "0" }}>
                    about our products and services{" "}
                    <span>View our Privacy Policy</span> .
                  </p>

                  <button className="NewsLetter_Button">SUBMIT</button>

                  <p className="Assistance_P">Need Assistance?</p>

                  <button className="Whatsapp_Button">
                    <i className="fa-brands fa-whatsapp"></i> CONTACT US AT
                    WHATSAPP
                  </button>

                  <div className="contact_Detail">
                    <p>Or Call us at </p>
                    <i className="fa-solid fa-phone"></i>
                    <p>+44 1234567890</p>
                  </div>
                </div>
              </div>
            </div>

            <HeadingCont
              title={"Terms & Conditions"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et augue. Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ut lectus pellentesque purus fermentum gravida. Integer accumsan feugiat diam, quis elementum arcu ultricies non. In odio ex, ultricies at urna eu, iaculis sagittis risus. Nulla eget dignissim ipsum. Curabitur eget dignissim urna. Sed at purus quis dolor lacinia consectetur"
              }
            />

            <HeadingCont
              title={"Privacy Policy"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et augue. Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ut lectus pellentesque purus fermentum gravida. Integer accumsan feugiat diam, quis elementum arcu ultricies non. In odio ex, ultricies at urna eu, iaculis sagittis risus. Nulla eget dignissim ipsum. Curabitur eget dignissim urna. Sed at purus quis dolor lacinia consectetur"
              }
            />

            <div className="Full_Image">
              <img src="./Image/47.png" alt="" />
            </div>
          </div>
          <FAQ />
        </div>
        <div className="pt-5"></div>
      </div>
    </>
  );
};

export default Courses;
