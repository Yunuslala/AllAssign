/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import {
  Table,
  Modal,
  Form,
  Button,
  Alert,
  FloatingLabel,
  Spinner,
} from "react-bootstrap";
import axios from "axios";
import { Store } from "react-notifications-component";

const StaffTalented = () => {
  const [modalShow, setModalShow] = useState(false);
  const [descModal, setDescModal] = useState(false);
  const [desc, setDesc] = useState([]);
  const [data, setData] = useState("");
  const [total, setTotal] = useState(0);
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({});

  const token = localStorage.getItem("AdminToken");

  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const Baseurl = "https://pritam-backend.vercel.app/";

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${Baseurl}api/v1/admin/getStaffTalented`
      );
      setData(data.data);
      console.log(data.data);
      setTotal(data.data.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `${Baseurl}api/v1/admin/DeleteStaffTalented/${id}`,
        Auth
      );
      const msg = data.message;
      Store.addNotification({
        title: "",
        message: msg,
        type: "success",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

 function MyVerticallyCenteredModal(props) {
   const [submitLoading, setSubmitLoading] = useState(false);
   const [imageLoading, setImageLoading] = useState(false);
   const [uploaded, setUploaded] = useState(false);
   //sate in data base
   const [title, setTitle] = useState("");
   const [mainImage, setMainImage] = useState([]);
   const [desc, setDesc] = useState("");
   const [academyHeading, setAcademyHeading] = useState("");
   const [academyTitle, setAcademyTitle] = useState("");
   const [academyDesc, setAcademyDesc] = useState("");
   const [youtubeLink, setYoutubeLink] = useState("");
   const [formTitle, setFormTitle] = useState("");
   const [formDescA, setFormDesc] = useState("");
   const [formPrivacy, setFormPrivacy] = useState("");
   const [formImage, setFormImage] = useState("");
   const [formWhatApp, setFormWhatApp] = useState("");
   const [formCall, setFormCall] = useState("");
   const [consultancyTitleFirst, setConsultancyTitleFirst] = useState("");
   const [consultancyTitleSecond, setConsultancyTitleSecond] = useState("");
   const [consultancyTitlethird, setConsultancyTitlethird] = useState("");
   const [consultancyDescFirst, setConsultancyDescFirst] = useState("");
   const [consultancyDescSecond, setConsultancyDescSecond] = useState("");
   const [consultancyDescthird, setConsultancyDescthird] = useState("");

   const payload = {
     title,
     desc,
     academyHeading,
     academyTitle,
     academyDesc,
     youtubeLink,
     formTitle,
     formDesc: formDescA,
     formPrivacy,
     formImage,
     formWhatApp,
     formCall,
     "consultancyTitle[0]": consultancyTitleFirst,
     "consultancyTitle[1]": consultancyTitleFirst,
     "consultancyTitle[2]": consultancyTitleFirst,
     "consultancyDesc[0]": consultancyDescFirst,
     "consultancyDesc[1]": consultancyDescSecond,
     "consultancyDesc[2]": consultancyDescthird,
   };
  const ImageFileHandler = (e) => {
    const files = e.target.files;
    setMainImage(Array.from(files));
  };
   const ClodinaryPost = (value,type) => {
     setImageLoading(true);
     const data = new FormData();
     data.append("file", value);
     data.append("upload_preset", "ml_default");
     data.append("cloud_name", "dbcnha741");
     fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
       method: "post",
       body: data,
     })
       .then((res) => res.json())
       .then((data) => {
         if (type ==="mainImage") {
           setMainImage([...mainImage,data.url])
           setUploaded(true);
           setImageLoading(false);
         } else if (type === "eForm") {
           setFormImage(data.url);
           console.log("formImage", data.url);
         }
         
       })
       .catch((err) => {
         console.log(err);
       });
   };

 
     const fromData = new FormData();

    //  console.log("payload", payload);
  //    for (let key in payload) {
  //      fromData.append(key, payload[key]);
   //  }
   if (title) {
     fromData.append("title", title);
   }
   if (desc) {
     fromData.append("desc", desc);
   }
   if (academyDesc) {
     fromData.append("academyDesc", academyDesc);
   }
   if (academyHeading) {
     fromData.append("academyHeading", academyHeading);
   }
   if (academyTitle) {
      fromData.append("academyTitle", academyTitle);
   }
   if (youtubeLink) {
      fromData.append("youtubeLink", youtubeLink);
   }
   if (formTitle) {
        fromData.append("formTitle", formTitle);
   }
   if (formDescA) {
        fromData.append("formDesc", formDescA);
   }
   if (formPrivacy) {
        fromData.append("formPrivacy", formPrivacy);
   }
   if (formImage) {
       fromData.append("formImage", formImage);
   }
   if (formWhatApp) {
      fromData.append("formWhatApp", formWhatApp);
   }
   if (formCall) {
        fromData.append("formCall", formCall);
   }
   if (consultancyTitleFirst) {
       fromData.append("consultancyTitle[0]", consultancyTitleFirst);
   }
   if (consultancyTitleSecond) {
        fromData.append("consultancyTitle[1]", consultancyTitleSecond);
   }
   if (consultancyTitlethird) {
        fromData.append("consultancyTitle[2]", consultancyTitlethird);
   }
   if (consultancyDescFirst) {
     fromData.append("consultancyDesc[0]", consultancyDescFirst);
   }
   if (consultancyDescSecond) {
     fromData.append("consultancyDesc[1]", consultancyDescSecond);
   }
   if (consultancyDescthird) {
     
   fromData.append("consultancyDesc[2]", consultancyDescthird);
   }
   if (mainImage) {
    mainImage.forEach((item) => {
      fromData.append("image", item);
    });
}

 
  //  console.log("typeof ",mainImage)

         
   const postHandler = async (e) => {
     e.preventDefault();
     
     setSubmitLoading(true);
     try {
      
     
// console.log("formdata",fromData);
       const data = await axios.post(
         `${Baseurl}api/v1/admin/addstaffTalented`,
         fromData,
         Auth
       );
       const msg = data.data.message;
       Store.addNotification({
         title: "",
         message: msg,
         type: "success",
         insert: "bottom",
         container: "bottom-right",
         animationIn: ["animate__animated", "animate__fadeIn"],
         animationOut: ["animate__animated", "animate__fadeOut"],
         dismiss: {
           duration: 2000,
           onScreen: true,
         },
       });
       fetchData();
       props.onHide();
       setSubmitLoading(false);
     } catch (e) {
       const msg = e.response.data.message;
       Store.addNotification({
         title: "",
         message: msg,
         type: "danger",
         insert: "bottom",
         container: "bottom-right",
         animationIn: ["animate__animated", "animate__fadeIn"],
         animationOut: ["animate__animated", "animate__fadeOut"],
         dismiss: {
           duration: 2000,
           onScreen: true,
         },
       });
       setSubmitLoading(false);
     }
   };

   return (
     <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
       <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title-vcenter">
           {edit ? "Edit" : "Create New"}
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <Form onSubmit={postHandler}>
           {imageLoading === true ? (
             <Spinner animation="border" role="status" />
           ) : (
             ""
           )}
           {uploaded === true ? (
             <Alert variant="success">Image Uploaded Successfully</Alert>
           ) : (
             ""
           )}
           <div className="multiple_Image">
             <img src={editData?.image} alt="" />
           </div>

           <Form.Group className="mb-3">
             <Form.Label>Image</Form.Label>
             <Form.Control
               type="file"
               multiple
               onChange={ImageFileHandler}
             />
           </Form.Group>

           <Form.Group className="mb-3">
             <Form.Label>Title</Form.Label>
             <Form.Control
               type="text"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
             />
           </Form.Group>

           <Form.Group className="mb-3">
             <Form.Label>Description</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={desc}
                 onChange={(e) => setDesc(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>

           <Form.Group className="mb-3">
             <Form.Label>AcademyHeading</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={academyHeading}
                 onChange={(e) => setAcademyHeading(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>

           <Form.Group className="mb-3">
             <Form.Label>AcademyTitle</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={academyTitle}
                 onChange={(e) => setAcademyTitle(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>AcademyDesc</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={academyDesc}
                 onChange={(e) => setAcademyDesc(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>youtubeLink</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={youtubeLink}
                 onChange={(e) => setYoutubeLink(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>formTitle</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={formTitle}
                 onChange={(e) => setFormTitle(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>formDesc</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={formDescA}
                 onChange={(e) => setFormDesc(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>formPrivacy</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={formPrivacy}
                 onChange={(e) => setFormPrivacy(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>formImage</Form.Label>
             <FloatingLabel>
               <Form.Control
                 type="file"
                 style={{ height: "100px" }}
                 onChange={(e) => ClodinaryPost(e.target.files[0], "eForm")}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>formWhatApp</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={desc}
                 onChange={(e) => setFormWhatApp(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>formCall</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={formCall}
                 onChange={(e) => setFormCall(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>Consultancy Title First</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={consultancyTitleFirst}
                 onChange={(e) => setConsultancyTitleFirst(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>Consultancy Title Second</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={consultancyTitleSecond}
                 onChange={(e) => setConsultancyTitleSecond(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>Consultancy Title Third</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={consultancyTitlethird}
                 onChange={(e) => setConsultancyTitlethird(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>Consultancy Description First</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={consultancyDescFirst}
                 onChange={(e) => setConsultancyDescFirst(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>Consultancy Description Second</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={consultancyDescSecond}
                 onChange={(e) => setConsultancyDescSecond(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>Consultancy Description Third</Form.Label>
             <FloatingLabel>
               <Form.Control
                 as="textarea"
                 style={{ height: "100px" }}
                 value={consultancyDescthird}
                 onChange={(e) => setConsultancyDescthird(e.target.value)}
               />
             </FloatingLabel>
           </Form.Group>
           <Button
             style={{
               backgroundColor: "#0c0c0c",
               borderRadius: "0",
               border: "1px solid #0c0c0c",
             }}
             type="submit"
           >
             {submitLoading ? (
               <Spinner animation="border" role="status" />
             ) : (
               "Submit"
             )}
           </Button>
         </Form>
       </Modal.Body>
     </Modal>
   );
 }


  function MyDescriptionModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            View Description
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="InfoBox">
            <p className="title mb-1">Description </p>
            <p className="desc"> {desc} </p>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <MyDescriptionModal show={descModal} onHide={() => setDescModal(false)} />

      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "20px" }}
          >
            Staff Talented
          </span>
          <button
            onClick={() => {
              setEditData({});
              setEdit(false);
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
          >
            Create New
          </button>
          <span className="flexCont">
            <i
              className="fa-solid fa-trash"
              onClick={() => deleteHandler(data._id)}
            />
          </span>
        </div>

        {data?.length === 0 || !data ? (
          <Alert>Not Create Yet !</Alert>
        ) : (
            <>
            

            <div className="mt-4">
              <div className="multiple_Image">
                {data?.image && (
                  <img
                    src={data?.image[0]}
                    style={{
                      width: "300px",
                      maxWidth: "300px",
                      height: "300px",
                      maxHeight: "400px",
                    }}
                    alt=""
                  />
                )}
              </div>
              <h1>{data.title}</h1>
              <p>{data.desc}</p>
              <h2>AcademyHeading</h2>
              <p>{data.academyHeading}</p>
              <p>{data.academyDesc}</p>
              <h2>From Title</h2>
              <p>{data.formTitle}</p>
              <h2>Form Description</h2>
              <p>{data.formDesc}</p>
              <h2>Form Privacy</h2>
              <p>{data.formPrivacy}</p>
              <div>
                <div className="d-flex m-10">
                  <h4>WhatApp Contact Number</h4>
                  <p className="ml-4">{data.formWhatApp}</p>
                </div>

                <div className="d-flex m-10">
                  <h4>Call Detail </h4>
                  <p className="ml-16">{data.formCall}</p>
                </div>

                <div className="d-flex m-10">
                  <h4>Created Date</h4>
                  <p className="ml-16">{data.createdAt.substr(0, 10)}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default HOC(StaffTalented);
