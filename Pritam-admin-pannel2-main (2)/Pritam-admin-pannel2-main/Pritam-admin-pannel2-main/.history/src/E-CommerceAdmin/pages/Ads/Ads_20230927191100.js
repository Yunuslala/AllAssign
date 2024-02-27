/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import {
  Table,
  Modal,
  Form,
  Button,
  Alert,
  Spinner,
  FloatingLabel,
} from "react-bootstrap";
import axios from "axios";
import { Store } from "react-notifications-component";

const Ads = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState({});
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
      const { data } = await axios.get(`${Baseurl}api/v1/admin/getAds`);
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [submitLoading, setSubmitLoading] = useState(false);
    const [title, setTitle] = useState(editData?.title);
    const [image, setImage] = useState("");
    const [images, setImages] = useState("");
    const [description, setDescription] = useState(editData?.description);
    const [banner, setBanner] = useState("");
    const [desc, setDesc] = useState(editData?.desc ? editData?.desc : []);
    const [descName, setDescName] = useState("");

    const queryAdder = () => {
      setDesc((prev) => [...prev, descName]);
      setDescName("");
    };

    const queryRemover = (index) => {
      setDesc((prev) => prev.filter((_, i) => i !== index));
    };

    const payload = new FormData();
    payload.append("title", title);
    payload.append("image", image);
    payload.append("images", images);
    payload.append("description", description);
    payload.append("banner", banner);
    Array.from(desc).forEach((img) => {
      payload.append("desc", img);
    });

    const postHandler = async (e) => {
      e.preventDefault();
      setSubmitLoading(true);
      try {
        const data = await axios.post(
          `${Baseurl}api/v1/admin/addAds`,
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
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <div className="multiple_Image">
              <img src={editData?.image} alt="" />
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <div className="multiple_Image">
              <img src={editData?.banner} alt="" />
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Main Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setBanner(e.target.files[0])}
              />
            </Form.Group>
            <div className="multiple_Image">
              <img src={editData?.images?.[0]} alt="" />
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Description Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImages(e.target.files[0])}
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
              <Form.Label>Main Description</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <Form.Group style={{ width: "80%" }}>
                <Form.Label>Description Points</Form.Label>
                <FloatingLabel controlId="floatingTextarea2">
                  <Form.Control
                    as="textarea"
                    style={{ height: "30px" }}
                    value={descName}
                    onChange={(e) => setDescName(e.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              <i
                className="fa-solid fa-plus"
                style={{ paddingTop: "30px", cursor: "pointer" }}
                onClick={() => queryAdder()}
              />
            </div>

            <Form.Group className="mb-3">
              <ul style={{ listStyle: "disc" }}>
                {desc?.map((i, index) => (
                  <li key={index}>
                    {" "}
                    {i}{" "}
                    <i
                      className="fa-solid fa-minus"
                      style={{ cursor: "pointer" }}
                      onClick={() => queryRemover(index)}
                    />{" "}
                  </li>
                ))}
              </ul>
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

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "20px" }}
          >
            Ads
          </span>
          <button
            onClick={() => {
              setEditData(data);
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
          >
            Create New
          </button>
        </div>

        {!data ? (
          <Alert>Not Create Yet !</Alert>
        ) : (
          <>
            <div className="overFlowCont">
              <Table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Main Image</th>
                    <th>Description Image</th>
                    <th>Created At</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={data?.image}
                        alt=""
                        style={{ width: "100px" }}
                      />
                    </td>

                    <td>
                      <img
                        src={data?.banner}
                        alt=""
                        style={{ width: "100px" }}
                      />
                    </td>

                    <td>
                      <img
                        src={data?.images?.[0]}
                        alt=""
                        style={{ width: "100px" }}
                      />
                    </td>

                    <td>{data?.createdAt?.substr(0, 10)} </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </>
        )}

        <div className="InfoBox mt-5">
          <p className="title">Title</p>
          <p className="desc"> {data?.title} </p>
        </div>

        <div className="InfoBox mt-5">
          <p className="title">Main Description</p>
          <p className="desc"> {data?.description} </p>
        </div>

        <div className="InfoBox mt-5">
          <p className="title">Small Description</p>
          {data?.desc?.map((i, index) => (
            <p className="desc" key={index}>
              {" "}
              {i}{" "}
            </p>
          ))}
        </div>
      </section>
    </>
  );
};

export default HOC(Ads);
