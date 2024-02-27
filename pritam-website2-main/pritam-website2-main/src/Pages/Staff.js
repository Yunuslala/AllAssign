/** @format */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Newsletter from "../Component/Partial/About Us Component/Newsletter";
import HeadingCont from "../Component/Partial/heading-cont";
import Banner from "../Component/Partial/StaffComponent/Banner";
import TrainingCourse from "../Component/Partial/StaffComponent/TrainingCourse";
import { AllTalentedStaff, AllTalentedStaffType } from "../Repo/Api";

const Staff = () => {
 
  const [response, setResponse] = useState([]);
  const [typeResponse, setTypeResponse] = useState([]);
  

  const fetchDataAgain = async()=>{
  try {
    const response = await axios.get("https://pritam-backend.vercel.app/api/v1/admin/getStaffTalented")
    const data = response.data;
    console.log("data", data);
    setResponse(data.data);
  } catch (error) {
    console.log(error)
  }
  }
  const fetchTypeData = async () => {
    const fetchData = await axios.get(
      "https://pritam-backend.vercel.app/api/v1/admin/getstaffTalentedType"
    );
    setTypeResponse(fetchData.data.data);
  }

   useEffect(() => {
     window.scrollTo(0, 0);
     console.log("useffect")
     fetchDataAgain();
     fetchTypeData();
   }, []);
  
  console.log("response", response);
  console.log("typeResponse", typeResponse);
  const youtubeLink = response.youtubeLink
  console.log("typeYoutubeLink",youtubeLink)
  const converPlayableImageForYouTube = (youtubeLink) => {
    const siLink = "InTXwsXs3JbTwAMf";
    const startTime = 3;
    // console.log("youtubeLink", youtubeLink);
    // const extractedLink = youtubeLink.split("=");
    // const VideoId = extractedLink[extractedLink.length - 1];
    // console.log("videoID", VideoId)
    // const findVideoCode = extractedLink.split("/");
    // const mainUrl = findVideoCode[0];

    const url = new URL(youtubeLink);
    const searchParams = new URLSearchParams(url.search);
    const videoId = searchParams.get("v");
    const convertedLink = ` https://www.youtube.com/embed/${videoId}?si=${siLink}&amp${startTime};`;
    return convertedLink;
  };
  console.log("id", response._id,"staffId",typeResponse[0]?._id);

  return (
    <>
      <Banner 
        staffId={response?._id}
        id={typeResponse[0]?._id}
      />
      <TrainingCourse
        academyHeading={response.academyHeading}
        academyDesc={response.academyDesc}
        academyTitle={response.academyTitle}
        image={response.image}
      />
      <HeadingCont title={"Consultancy"} content={""} />
      {response?.consultancy?.map((item) => {
        return (
          <div className="Staff_Desc">
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>
        );
      })}
      <div style={{ width: "90%", margin: "80px auto" }}>
        <iframe
          width="100%"
          height="500"
          src={response.youtubeLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <Newsletter formTitle={response.formTitle} formDesc={response.formDesc} />
      <div style={{ paddingTop: "5rem" }}></div>
    </>
  );
};

export default Staff;
