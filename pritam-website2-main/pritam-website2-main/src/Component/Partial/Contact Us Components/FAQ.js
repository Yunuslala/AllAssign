/** @format */

import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { get_faq } from "../../../Repo/Api";
import axios from "axios";
import { useParams } from "react-router-dom";
const FAQ = ({type}) => {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    get_faq(setFaq);
  }, []);
  const getQuestionAndAns = async () => {
    if (type == "Home") {
      type = "Home";
    } else {
      type = "EventHome";
    }


  const response=await axios.get(`https://pritam-backend.vercel.app/api/v1/static/faq/All/${type}`)
    const data = response.data;
    setFaq(data.data)
    console.log(data);
  }
  useEffect(() => {
    getQuestionAndAns()
  },[])

  return (
    <div className="contact-faq">
      <h5 style={{ fontFamily: "Plus Jakarta Sans" }}>
        F.A.Q ( Frequently Asked Questions )
      </h5>

      <Accordion
        style={{ fontFamily: "Plus Jakarta Sans" }}
        defaultActiveKey="0"
      >
        {faq?.map((ele, i) => (
          <Accordion.Item eventKey={i} key={i}>
            <Accordion.Header>
              <p
                style={{ fontFamily: "Plus Jakarta Sans", fontWeight: "bold" }}
              >
                {ele.question}
              </p>
            </Accordion.Header>
            <Accordion.Body
              style={{
                fontFamily: "Poppins",
                fontWeight: "700",
                textAlign: "justify",
              }}
            >
              {ele.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
