/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import {
  Modal,
  Form,
  Button,
  Alert,
  FloatingLabel,
  Spinner,
  Table,
} from "react-bootstrap";
import axios from "axios";
import { Store } from "react-notifications-component";

const CreateYourDreamsQuickly = () => {
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
        `${Baseurl}api/v1/admin/dream/getAllYourDreamsQuickly`
      );
      setData(data.data);
      console.log(data);
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
    const [title, setTitle] = useState(editData?.title);
    const [mainImage, setMainImage] = useState("");
    const [desc, setDesc] = useState(editData?.desc);

    const payload = {
      title,
      mainImage,
      desc,
      image: mainImage,
    };

    const ClodinaryPost = (value) => {
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
          setMainImage(data.url);
          setUploaded(true);
          setImageLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const postHandler = async (e) => {
      e.preventDefault();
      setSubmitLoading(true);
      try {
        const data = await axios.post(
          `${Baseurl}api/v1/admin/addstaffTalentedType`,
          payload,
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
                onChange={(e) => ClodinaryPost(e.target.files[0])}
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
            Create Your Dream Quickly
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
                    src={data?.image}
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
              <div className="InfoBox mt-2">
                <p className="title">Title</p>
                <p className="desc"> {data?.title} </p>
              </div>

              <div className="InfoBox mt-2">
                <p className="title">Heading</p>
                <p className="desc">
                  {" "}
                  {data.desc.map((i, index) => (
                    <p>{i}</p>
                  ))}{" "}
                </p>
              </div>

              <div className="overFlowCont mt-5">
                <Table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Create/Update</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={data.image}
                          alt=""
                          style={{
                            width: "100px",
                            height: "80px",
                            maxHeight: "100px",
                          }}
                        />
                      </td>
                      <div className="d-block">
                        <td>{data.createdAt.substr(0, 10)} </td>
                        <br />
                        <td>{data.updatedAt.substr(0, 10)}</td>
                      </div>

                      <td>
                        <i className="fa-solid fa-trash" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default HOC(CreateYourDreamsQuickly);
