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

const StaffTalentedType = () => {
  const [modalShow, setModalShow] = useState(false);
  const [descModal, setDescModal] = useState(false);
  const [desc, setDesc] = useState([]);
  const [data, setData] = useState([]);
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
        `${Baseurl}api/v1/admin/getstaffTalentedType`
      );
      setData(data.data);
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
        `${Baseurl}api/v1/admin/DeletestaffTalentedType/${id}`,
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
     const [title, setTitle] = useState(editData?.title);
     const [mainImage, setMainImage] = useState("");
     const [desc, setDesc] = useState(editData?.desc);
     const [youtubeLink, setyoutubelink] = useState(editData.youtubeLink);
     const [contactUsformTitle, setcontactUsformTitle] = useState(
       editData.contactUsformTitle
     );
     const [contactUsformDesc, setcontactUsformDesc] = useState(
       editData.contactUsformDesc
     );
     const [contactUsformAvailibility, setcontactUsformAvailibility] = useState(
       editData.contactUsformAvailibility
     );
     const [contactUsformPrivacy, setcontactUsformPrivacy] = useState(
       editData.contactUsformPrivacy
     );
     const [eTitle, seteTitle] = useState(editData.eTitle);
     const [eDesc, seteDesc] = useState(editData.eDesc);
     const [eformWhatApp, seteformWhatApp] = useState(editData.eformWhatApp);
     const [eformCall, seteformCall] = useState(editData.eformCall);
     const [eformPrivacy, seteformPrivacy] = useState(editData.eformPrivacy);
     const [eformImage, setFormImage] = useState("");
const [descriptionTitleFirst, setDescriptionTitleFirst] = useState("");
const [descriptionTitleSecond, setDescriptionTitleSecond] = useState("");
const [descriptionTitlethird, setDescriptionTitlethird] = useState("");
const [descriptionDescFirst, setDescriptionDescFirst] = useState("");
const [descriptionDescSecond, setDescriptionDescSecond] = useState("");
const [descriptionDescthird, setDescriptionDescthird] = useState("");

     const payload = {
       title,
       desc,
       image: mainImage,
       contactUsformTitle,
       contactUsformDesc,
       contactUsformAvailibility,
       contactUsformPrivacy,
       youtubeLink,
       eTitle,
       eDesc,
       eformWhatApp,
       eformCall,
       eformPrivacy,
       eformImage,
       "descriptionTitle[0]": descriptionTitleFirst,
       "descriptionDesc[0]":descriptionDescFirst,
       "descriptionTitle[1]": descriptionTitleFirst,
       "descriptionDesc[1]": descriptionDescSecond,
       "descriptionTitle[2]":descriptionTitlethird,
       "descriptionDesc[2]": descriptionDescthird,
       
     };

     const ClodinaryPost = (value, type) => {
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
           if (type == "mainImage") {
             setMainImage(data.url);
             console.log("imageUrl", data.url);
             setUploaded(true);
             setImageLoading(false);
           } else if (type == "eformImage") {
             setFormImage(data.url);
             console.log("imageUrl", data.url);
           }
         })
         .catch((err) => {
           console.log(err);
         });
     };

     const postHandler = async (e) => {
       e.preventDefault();
       setSubmitLoading(true);
       console.log("payload", payload);
       try {
         const formdataforPost = new FormData();
         for (let key in payload) {
           formdataforPost.append(key, payload[key]);
         }

         const data = await axios.post(
           `${Baseurl}api/v1/admin/addStaffTalentedType`,
           formdataforPost,
           Auth
         );
         const msg = data.data.message;
         console.log("checkmessages", msg);
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
         console.log("checkErrorMsg", msg);
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
       <Modal
         {...props}
         aria-labelledby="contained-modal-title-vcenter"
         centered
       >
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
                 onChange={(e) => ClodinaryPost(e.target.files[0], "mainImage")}
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
               <Form.Label>YouTube Link</Form.Label>
               <Form.Control
                 type="text"
                 onChange={(e) => setyoutubelink(e.target.value)}
               />
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>Contact Us From Tittle</Form.Label>
               <Form.Control
                 type="text"
                 onChange={(e) => setcontactUsformTitle(e.target.value)}
               />
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>Contact Us From Description </Form.Label>
               <Form.Control
                 type="text"
                 onChange={(e) => setcontactUsformDesc(e.target.value)}
               />
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>Contact Us From Availability</Form.Label>
               <Form.Control
                 type="text"
                 onChange={(e) => setcontactUsformAvailibility(e.target.value)}
               />
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>Contact Us From Policy</Form.Label>
               <Form.Control
                 type="text"
                 onChange={(e) => setcontactUsformPrivacy(e.target.value)}
               />
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>E-tittle</Form.Label>
               <Form.Control
                 type="text"
                 onChange={(e) => seteTitle(e.target.value)}
               />
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>E-desc</Form.Label>
               <Form.Control
                 type="text"
                 onChange={(e) => seteDesc(e.target.value)}
               />
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>WhatsApp Number</Form.Label>
               <Form.Control
                 type="text"
                 onChange={(e) => seteformWhatApp(e.target.value)}
               />
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>Call Number</Form.Label>
               <Form.Control
                 type="text"
                 onChange={(e) => seteformCall(e.target.value)}
               />
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>Form Privacy</Form.Label>
               <Form.Control
                 type="text"
                 onChange={(e) => seteformPrivacy(e.target.value)}
               />
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>e-form Image</Form.Label>
               <Form.Control
                 type="file"
                 onChange={(e) =>
                   ClodinaryPost(e.target.files[0], "eformImage")
                 }
               />
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>Description Title First</Form.Label>
               <FloatingLabel>
                 <Form.Control
                   as="textarea"
                   style={{ height: "100px" }}
                   value={descriptionTitleFirst}
                   onChange={(e) => setDescriptionTitleFirst(e.target.value)}
                 />
               </FloatingLabel>
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>Description Title Second</Form.Label>
               <FloatingLabel>
                 <Form.Control
                   as="textarea"
                   style={{ height: "100px" }}
                   value={descriptionTitleSecond}
                   onChange={(e) => setDescriptionTitleSecond(e.target.value)}
                 />
               </FloatingLabel>
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>Description Title Third</Form.Label>
               <FloatingLabel>
                 <Form.Control
                   as="textarea"
                   style={{ height: "100px" }}
                   value={descriptionTitlethird}
                   onChange={(e) => setDescriptionTitlethird(e.target.value)}
                 />
               </FloatingLabel>
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>Description Description First</Form.Label>
               <FloatingLabel>
                 <Form.Control
                   as="textarea"
                   style={{ height: "100px" }}
                   value={descriptionDescFirst}
                   onChange={(e) => setDescriptionDescFirst(e.target.value)}
                 />
               </FloatingLabel>
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>Description Description Second</Form.Label>
               <FloatingLabel>
                 <Form.Control
                   as="textarea"
                   style={{ height: "100px" }}
                   value={descriptionDescSecond}
                   onChange={(e) => setDescriptionDescSecond(e.target.value)}
                 />
               </FloatingLabel>
             </Form.Group>
             <Form.Group className="mb-3">
               <Form.Label>Description Description Third</Form.Label>
               <FloatingLabel>
                 <Form.Control
                   as="textarea"
                   style={{ height: "100px" }}
                   value={descriptionDescthird}
                   onChange={(e) => setDescriptionDescthird(e.target.value)}
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
            Staff Talented Type ( Total : {total} )
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
        </div>

        {data?.length === 0 || !data ? (
          <Alert>Not Create Yet !</Alert>
        ) : (
          <>
            <div className="overFlowCont">
              <Table>
                <thead>
                  <tr>
                    <th>Sno.</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Contact Form Title</th>
                    <th>WhatAppDetail</th>
                    <th>Created At</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((i, index) => (
                    <tr key={index}>
                      <td>#{index + 1} </td>
                      <td>
                        <img src={i.image} alt="" style={{ width: "100px" }} />
                      </td>
                      <td>{i.title} </td>
                      <td>
                        <button
                          className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
                          onClick={() => {
                            setDesc(i.desc);
                            setDescModal(true);
                          }}
                        >
                          View
                        </button>
                      </td>
                      <td>{i.contactUsformTitle}</td>
                      <td>{i.eformWhatApp}</td>
                      <td>{i.createdAt?.substr(0, 10)} </td>
                      <td>
                        <span className="flexCont">
                          <i
                            className="fa-solid fa-trash"
                            onClick={() => deleteHandler(i._id)}
                          />
                          {/* <i
                            className="fa-solid fa-pen-to-square"
                            onClick={() => {
                              setEditData(i);
                              setEdit(true);
                              setId(i._id);
                              setModalShow(true);
                            }}
                          ></i> */}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default HOC(StaffTalentedType);
