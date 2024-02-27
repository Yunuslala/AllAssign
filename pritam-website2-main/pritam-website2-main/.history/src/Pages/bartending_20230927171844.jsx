/** @format */
import FAQ from "../Component/Partial/Contact Us Components/FAQ";
import { BsArrowRightShort } from "react-icons/bs";
import { useEffect, useState } from "react";
import { eventEnquiry, getBannerType, getCourse, get_privacy, get_terms } from "../Repo/Api";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Bartending() {
  const [response, setResponse] = useState([]);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [comment, setComment] = useState(null);
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [trendingServiceId, setTrendingServiceId] = useState(null);
  const [terms, setTerms] = useState([]);
  const [privacy, setPrivacy] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [lastDate, setLastDate] = useState(null);
  const [ data , setData ] = useState({})

  const tillDate = lastDate === null ? "" : `${lastDate}T23:59:59.000Z`;

  function handleDateChange(e) {
    const formattedDate = e.toISOString().split("T")[0];
    setLastDate(formattedDate);
  }

  const fetchHandler = () => {
    getCourse(setResponse, tillDate);
  };

  const payload = {
    firstName,
    lastName,
    email,
    phone,
    comment,
    date,
    slot,
    trendingServiceId,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await eventEnquiry(payload);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setComment("");
    setDate("");
    setSlot("");
  };

  useEffect(() => {
    get_terms(setTerms);
    get_privacy(setPrivacy);
  }, []);

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    getBannerType("Bartending" , setData)
  },[])


  const filterData = response?.reverse()?.slice(0,3)

  return (
    <div>
      <div style={{ backgroundColor: "#f5a302" }}>
        <div className="bartending-banner">
          <img src={data?.bannerImage} alt="" />
          <div className="bartending-banner-absolute-div">
            <h1> {data?.bannerTitle} </h1>
            <p>
            {data?.bannerDescription}
            </p>
          </div>
        </div>

        <div className="bartending-options">
          <h1>You will master the Subjects below</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            sequi nostrum rerum consequuntur placeat? Corrupti odio eaque
            dolore. Quo natus nemo repellendus sunt magnam. Rem quos nihil quasi
            deserunt, ab numquam aperiam cum expedita et.
          </p>
        </div>

        <div className="bartending-collapse-div">
          {response?.map((i, index) => (
            <div className="Item" key={index}>
              <p className="bartending-collapse-item" tabIndex={0}>
                {i.title}
                <BsArrowRightShort style={{ fontSize: "20px" }} />
              </p>
              <span className="open_Span">
                <p className="desc">{i.description}</p>
                <ul>
                  {i.descriptionPoints?.map((item, index) => (
                    <li key={index}> {item} </li>
                  ))}
                </ul>
              </span>
            </div>
          ))}
        </div>

        <div className="contact-us-overflow-main">
          <div className="Content">
            <div class="Main">
              <h5>Explore Our Courses</h5>
              <div class="search">
                <input
                  type="search"
                  placeholder="Search Courses Available"
                  onClick={() => setShowDatePicker(true)}
                />
                <div
                  class="search-icon"
                  onClick={() => setShowDatePicker(true)}
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                {showDatePicker ? (
                  <div className="date-picker">
                    <div className="close_icon">
                      <p>Select Date</p>
                      <i
                        class="fa-solid fa-x"
                        onClick={() => setShowDatePicker(false)}
                      ></i>
                    </div>
                    <Calendar onChange={(e) => handleDateChange(e)} />

                    <button
                      className="submit_button"
                      onClick={() => fetchHandler()}
                    >
                      FIND COURSES
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>


        {filterData?.length === 0 ?  <h1 className="bold-heading" style={{color : "#FFf" , fontSize : '20px'}} >No Course Related to {lastDate}</h1> :      }
        <div className="Courses_Section">
       
          {filterData?.map((i, index) => (
            <div className="Item" key={index}>
              <div className="Image-cont">
                <img src={i.image?.[0]} alt="" />
                <p>{i.title} </p>
              </div>
              <p className="desc">{i.description?.substr(0,100)}</p>

              <div className="three-sec">
                <i className="fa-solid fa-tag" />
                <p>Price - {i.price}£</p>
              </div>
              <div className="three-sec">
                <i className="fa-solid fa-hourglass-start" />
                <p>
                  Duration - {i.toDay} - {i.fromDay} , {i.toTime}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="About-Us_Newsletter">
          <div class="left" style={{ width: "40%" }}>
            <img
              src="https://res.cloudinary.com/dbcnha741/image/upload/v1693814281/Rectangle_543_wos8b6.png"
              alt=""
            />
          </div>
          <div className="right">
            <div className="content">
              <h5>Book a Bartending Course</h5>
              <p class="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent nisi lacus, cursus pharetra
              </p>

              <form onSubmit={handleSubmit}>
                <div className="Two_Inputs">
                  <div>
                    <label>
                      <span>*</span>First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label>
                      <span>*</span>Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div class="Single_Input">
                  <div>
                    <label>
                      <span>*</span>Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div class="Single_Input">
                  <div>
                    <label>
                      <span>*</span>Mobile Number
                    </label>
                    <input
                      type="tel"
                      maxLength={12}
                      minLength={10}
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div class="Single_Input">
                  <div>
                    <label>Any Comments</label>
                    <textarea
                      placeholder="Type here........."
                      required
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
                </div>

                <div class="Two_Inputs mt-2">
                  <div style={{ width: "100%" }}>
                    <label>
                      {" "}
                      <span>*</span> Availibility to Call Back
                    </label>
                    <p
                      class="Policy"
                      style={{ marginTop: "0", textAlign: "justify" }}
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy
                    </p>
                  </div>
                </div>

                <Calendar value={date} onChange={(e) => setDate(e)} />

                <div class="Single_Input">
                  <div>
                    <label>
                      <span>*</span>Select Course
                    </label>
                    <select
                      className="Full-width-select"
                      onChange={(e) => setTrendingServiceId(e.target.value)}
                      value={trendingServiceId}
                    >
                      <option></option>
                      {response?.map((i, index) => (
                        <option key={index} value={i._id}>
                          {" "}
                          {i.title}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div class="Single_Input">
                  <div>
                    <label>
                      <span>*</span> Select your Slot &amp; Timings
                    </label>
                    <select
                      className="Full-width-select"
                      onChange={(e) => setSlot(e.target.value)}
                      value={slot}
                    >
                      <option></option>
                      <option value="1 PM">1 PM</option>
                      <option value="2 PM">2 PM</option>
                      <option value="3 PM">3 PM</option>
                      <option value="4 PM">4 PM</option>
                      <option value="5 PM">5 PM</option>
                      <option value="6 PM">6 PM</option>
                      <option value="7 PM">7 PM</option>
                      <option value="8 PM">8 PM</option>
                      <option value="9 PM">9 PM</option>
                      <option value="10 PM">10 PM</option>
                      <option value="11 PM">11 PM</option>
                      <option value="12 PM">12 PM</option>
                    </select>
                  </div>
                </div>

                <p class="Policy" style={{ marginTop: "0" }}>
                  about our products and services{" "}
                  <span>View our Privacy Policy</span> .
                </p>

                <button class="NewsLetter_Button" type="submit">
                  SUBMIT
                </button>

                <p class="Assistance_P">Need Assistance?</p>
                <button class="Whatsapp_Button">
                  <i class="fa-brands fa-whatsapp"></i> CONTACT US AT WHATSAPP
                </button>

                <div class="contact_Detail">
                  <p>Or Call us at </p>
                  <i class="fa-solid fa-phone"></i>
                  <p>+44 1234567890</p>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="bartending-tc">
          <h1>Terms & Conditions</h1>
          {terms?.map((i, index) => (
            <p key={index}> {i.terms} </p>
          ))}
        </div>

        <div className="bartending-privacy-policy">
          <h1>Privacy Policy</h1>
          {privacy?.map((i, index) => (
            <p key={index}> {i.privacy} </p>
          ))}
        </div>
      </div>

      <div style={{ width: "100%", margin: "40px auto" }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/JxZ9iqWVlSE?si=InTXwsXs3JbTwAMf&amp;start=3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="bartending-options" style={{ padding: "0" }}>
        <div className="Community_Page">
          <FAQ />
        </div>

        <div style={{ paddingTop: "40px" }}></div>
      </div>
    </div>
  );
}
