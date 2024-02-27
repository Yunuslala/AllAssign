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
import OwlCarousel from "react-owl-carousel";

const Banner = () => {
  const [modalShow, setModalShow] = useState(false);
  const [descModal, setDescModal] = useState(false);
  const [desc, setDesc] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [total, setTotal] = useState(0);
  const [ editData , setEditData ] = useState({})

  const token = localStorage.getItem("AdminToken");
  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const Baseurl = "https://pritam-backend.vercel.app/";

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${Baseurl}api/v1/admin/Banner`);
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
        `${Baseurl}api/v1/admin/Banner/${id}`,
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
    const [bannerTitle, setBannerTitle] = useState(editData?.bannerTitle);
    const [bannerDescription, setBannerDescription] = useState(editData?.bannerDescription);
    const [image, setImage] = useState("");
    const [type, setType] = useState(editData?.type);
    const [video, setVideo] = useState("");
    const [submitLoading, setSubmitLoading] = useState(false);


    const fd = new FormData();
    fd.append("bannerTitle", bannerTitle);
    fd.append("bannerDescription", bannerDescription);
    fd.append("image", image);
    fd.append("bannerVideo", video);
    fd.append("type", type);

    const postHandler = async (e) => {
      e.preventDefault();
      setSubmitLoading(true);
      try {
        const { data } = await axios.post(
          `${Baseurl}api/v1/admin/Banner`,
          fd,
          Auth
        );
        const msg = data.message;
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
        setSubmitLoading(false);
        props.onHide();
        fetchData();
      } catch (e) {
        console.log(e);
        setSubmitLoading(false);
      }
    };

    const putHandler = async (e) => {
      e.preventDefault();
      setSubmitLoading(true);
      try {
        const data = await axios.put(
          `${Baseurl}api/v1/admin/Banner/${id}`,
          fd,
          Auth
        );
        const msg = data?.data?.message;
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
        setSubmitLoading(false);
        props.onHide();
        fetchData();
      } catch (e) {
        console.log(e);
        setSubmitLoading(false);
      }
    };

    const uploadVideo = (url) => {
      const data = new FormData();
      data.append("file", url);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dbcnha741");
      fetch("https://api.cloudinary.com/v1_1/dbcnha741/video/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // setVideo(data.url);
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            {edit ? "Edit " : "Create New"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? putHandler : postHandler}>
          
          <div className="multiple_Image">
          <img src={editData?.bannerImage} alt='' />
          </div>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select onChange={(e) => setType(e.target.value)}>
                <option value=""> {type ? type : "Select Type"} </option>
                <option value="Homepage"> Homepage </option>
                <option value="Find Work"> Find Work </option>
                <option value="Find Talent"> Find Talent </option>
                <option value="Freelancing"> Freelancing </option>
                <option value="Bartending"> Bartending </option>
                <option value="Event Booking"> Event Booking </option>
                <option value="	About Us"> About Us </option>
                <option value="Contact Us"> Contact Us </option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Video</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setVideo(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={bannerTitle}
                onChange={(e) => setBannerTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  value={bannerDescription}
                  onChange={(e) => setBannerDescription(e.target.value)}
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

  function DescriptionModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Description
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel>
            <Form.Control
              as="textarea"
              defaultValue={desc?.bannerDescription}
              style={{ height: "100px" }}
            />
          </FloatingLabel>
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
      <DescriptionModal show={descModal} onHide={() => setDescModal(false)} />

      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Banners ( Total : {total} )
          </span>
          <button
            onClick={() => {
              setEditData({})
              setEdit(false);
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
          >
            Create New
          </button>
        </div>

        {data?.length === 0 || !data ? (
          <Alert>No Terms Found !</Alert>
        ) : (
          <>
            <div className="overFlowCont">
              <Table>
                <thead>
                  <tr>
                    <th>Sno.</th>
                    <th>Video</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Created at</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((i, index) => (
                    <tr key={index}>
                      <td>#{index + 1} </td>
                      <td>
                        {i.bannerVideo ? (
                          <a href={i.bannerVideo} target="_blank">
                            <button className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider">
                              View
                            </button>
                          </a>
                        ) : (
                          ""
                        )}
                      </td>
                      <td>
                        {i.bannerImage ? (
                          <a href={i.bannerImage} target="_blank">
                            <button className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider">
                              View
                            </button>
                          </a>
                        ) : (
                          ""
                        )}
                      </td>

                      <td>
                        <button
                          className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
                          onClick={() => {
                            setDesc(i);
                            setDescModal(true);
                          }}
                        >
                          View
                        </button>
                      </td>
                      <td>{i.bannerTitle} </td>
                      <td>{i.type} </td>
                      <td> {i.createdAt?.substr(0, 10)} </td>
                      <td>
                        <span className="flexCont">
                          <i
                            className="fa-solid fa-trash"
                            onClick={() => deleteHandler(i._id)}
                          />
                          <i
                            className="fa-solid fa-pen-to-square"
                            onClick={() => {
                              setEditData(i)
                              setEdit(true);
                              setId(i._id);
                              setModalShow(true);
                            }}
                          ></i>
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

export default HOC(Banner);
