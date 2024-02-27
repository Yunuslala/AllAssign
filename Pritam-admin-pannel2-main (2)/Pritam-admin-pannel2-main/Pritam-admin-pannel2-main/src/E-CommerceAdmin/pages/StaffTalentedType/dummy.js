// function MyVerticallyCenteredModal(props) {
//   const [submitLoading, setSubmitLoading] = useState(false);
//   const [imageLoading, setImageLoading] = useState(false);
//   const [uploaded, setUploaded] = useState(false);
//   //sate in data base
//   const [title, setTitle] = useState("");
//   const [mainImage, setMainImage] = useState("");
//   const [desc, setDesc] = useState("");
//   const [academyHeading, setAcademyHeading] = useState("");
//   const [academyTitle, setAcademyTitle] = useState("");
//   const [academyDesc, setAcademyDesc] = useState("");
//   const [youtubeLink, setYoutubeLink] = useState("");
//   const [formTitle, setFormTitle] = useState("");
//   const [formDesc, setFormDesc] = useState("");
//   const [formPrivacy, setFormPrivacy] = useState("");
//   const [formImage, setFormImage] = useState("");
//   const [formWhatApp, setFormWhatApp] = useState("");
//   const [formCall, setFormCall] = useState("");
//   const [consultancyTitleFirst, setConsultancyTitleFirst] = useState("");
//   const [consultancyTitleSecond, setConsultancyTitleSecond] = useState("");
//   const [consultancyTitlethird, setConsultancyTitlethird] = useState("");
//   const [consultancyDescFirst, setConsultancyDescFirst] = useState("");
//   const [consultancyDescSecond, setConsultancyDescSecond] = useState("");
//   const [consultancyDescthird, setConsultancyDescthird] = useState("");

//   const payload = {
//     title,
//     mainImage,
//     desc,
//     image: mainImage,
//     academyHeading,
//     academyTitle,
//     academyDesc,
//     youtubeLink,
//     formTitle,
//     formDesc,
//     formPrivacy,
//     formImage,
//     formWhatApp,
//     formCall,
//     "consultancyTitle[0]": consultancyTitleFirst,
//     "consultancyTitle[1]": consultancyTitleFirst,
//     "consultancyTitle[2]": consultancyTitleFirst,
//     "consultancyDesc[0]": consultancyDescFirst,
//     "consultancyDesc[1]": consultancyDescSecond,
//     "consultancyDesc[2]": consultancyDescthird,
//   };

//   const ClodinaryPost = (value) => {
//     setImageLoading(true);
//     const data = new FormData();
//     data.append("file", value);
//     data.append("upload_preset", "ml_default");
//     data.append("cloud_name", "dbcnha741");
//     fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
//       method: "post",
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setMainImage(data.url);
//         setUploaded(true);
//         setImageLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const postHandler = async (e) => {
//     e.preventDefault();

//     setSubmitLoading(true);
//     try {
//       const fromData = new FormData();
//       for (let key in payload) {
//         fromData.append(key, payload[key]);
//       }

//       const data = await axios.post(
//         `${Baseurl}api/v1/admin/addstaffTalented`,
//         fromData,
//         Auth
//       );
//       const msg = data.data.message;
//       Store.addNotification({
//         title: "",
//         message: msg,
//         type: "success",
//         insert: "bottom",
//         container: "bottom-right",
//         animationIn: ["animate__animated", "animate__fadeIn"],
//         animationOut: ["animate__animated", "animate__fadeOut"],
//         dismiss: {
//           duration: 2000,
//           onScreen: true,
//         },
//       });
//       fetchData();
//       props.onHide();
//       setSubmitLoading(false);
//     } catch (e) {
//       const msg = e.response.data.message;
//       Store.addNotification({
//         title: "",
//         message: msg,
//         type: "danger",
//         insert: "bottom",
//         container: "bottom-right",
//         animationIn: ["animate__animated", "animate__fadeIn"],
//         animationOut: ["animate__animated", "animate__fadeOut"],
//         dismiss: {
//           duration: 2000,
//           onScreen: true,
//         },
//       });
//       setSubmitLoading(false);
//     }
//   };

//   return (
//     <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           {edit ? "Edit" : "Create New"}
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={postHandler}>
//           {imageLoading === true ? (
//             <Spinner animation="border" role="status" />
//           ) : (
//             ""
//           )}
//           {uploaded === true ? (
//             <Alert variant="success">Image Uploaded Successfully</Alert>
//           ) : (
//             ""
//           )}
//           <div className="multiple_Image">
//             <img src={editData?.image} alt="" />
//           </div>

//           <Form.Group className="mb-3">
//             <Form.Label>Image</Form.Label>
//             <Form.Control
//               type="file"
//               onChange={(e) => ClodinaryPost(e.target.files[0])}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Description</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={desc}
//                 onChange={(e) => setDesc(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>AcademyHeading</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={desc}
//                 onChange={(e) => setAcademyHeading(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>AcademyTitle</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={desc}
//                 onChange={(e) => setAcademyTitle(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>AcademyDesc</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={academyDesc}
//                 onChange={(e) => setAcademyDesc(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>youtubeLink</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={youtubeLink}
//                 onChange={(e) => setYoutubeLink(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>formTitle</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={formTitle}
//                 onChange={(e) => setFormTitle(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>formDesc</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={formDesc}
//                 onChange={(e) => setFormDesc(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>formPrivacy</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={formPrivacy}
//                 onChange={(e) => setFormPrivacy(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>formImage</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={formImage}
//                 onChange={(e) => setFormImage(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>formWhatApp</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={desc}
//                 onChange={(e) => setFormWhatApp(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>formCall</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={formCall}
//                 onChange={(e) => setFormCall(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>formWhatApp</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={formWhatApp}
//                 onChange={(e) => setFormWhatApp(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Consultancy Title First</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={consultancyTitleFirst}
//                 onChange={(e) => setConsultancyTitleFirst(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Consultancy Title Second</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={consultancyTitleSecond}
//                 onChange={(e) => setConsultancyTitleSecond(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Consultancy Title Third</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={consultancyTitlethird}
//                 onChange={(e) => setConsultancyTitlethird(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Consultancy Description First</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={setConsultancyDescFirst}
//                 onChange={(e) => setConsultancyDescFirst(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Consultancy Description Second</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={setConsultancyDescSecond}
//                 onChange={(e) => setConsultancyDescSecond(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Consultancy Description Third</Form.Label>
//             <FloatingLabel>
//               <Form.Control
//                 as="textarea"
//                 style={{ height: "100px" }}
//                 value={setConsultancyDescthird}
//                 onChange={(e) => setConsultancyDescthird(e.target.value)}
//               />
//             </FloatingLabel>
//           </Form.Group>
//           <Button
//             style={{
//               backgroundColor: "#0c0c0c",
//               borderRadius: "0",
//               border: "1px solid #0c0c0c",
//             }}
//             type="submit"
//           >
//             {submitLoading ? (
//               <Spinner animation="border" role="status" />
//             ) : (
//               "Submit"
//             )}
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// }
