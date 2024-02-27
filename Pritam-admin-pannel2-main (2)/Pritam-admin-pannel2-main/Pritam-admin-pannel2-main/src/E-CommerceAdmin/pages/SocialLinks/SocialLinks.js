/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Modal, Form, Button, Alert, Spinner } from "react-bootstrap";
import axios from "axios";
import { Store } from "react-notifications-component";

const SocialLinks = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState({});
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);
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
      const { data } = await axios.get(
        `${Baseurl}api/v1/admin/viewContactDetails`
      );
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
    const [fb, setFB] = useState(editData?.fb);
    const [instagram, setInstagram] = useState(editData?.instagram);
    const [linkedIn, setLinkedin] = useState(editData?.linkedIn);
    const [twitter, setTwitter] = useState(editData?.twitter);
    const [whatAppchat, setWhatAppChat] = useState(editData?.whatAppchat);


    const postHandler = async (e) => {
      e.preventDefault();
      setSubmitLoading(true);
      try {
        const data = await axios.post(
          `${Baseurl}api/v1/admin/addContactDetails`,
          {
            fb,
            instagram,
            linkedIn,
            twitter,
            whatAppchat,
          },
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


    const putHandler = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);
        try {
          const data = await axios.put(
            `${Baseurl}api/v1/admin/updateContactDetails/${id}`,
            {
              fb,
              instagram,
              linkedIn,
              twitter,
              whatAppchat,
            },
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
           { edit ? "Edit" : " Create New"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? putHandler : postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Facebook</Form.Label>
              <Form.Control
                type="text"
                value={fb}
                onChange={(e) => setFB(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Instagram</Form.Label>
              <Form.Control
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Linkedin</Form.Label>
              <Form.Control
                type="text"
                value={linkedIn}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Twitter</Form.Label>
              <Form.Control
                type="text"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Whatsapp</Form.Label>
              <Form.Control
                type="text"
                value={whatAppchat}
                onChange={(e) => setWhatAppChat(e.target.value)}
              />
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
            Social Links
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

        {!data ? (
          <Alert>Not Create Yet !</Alert>
        ) : (
          <>
            <div className="overFlowCont">
              <Table>
                <thead>
                  <tr>
                    <th>Instagram</th>
                    <th>Facebook</th>
                    <th>Twitter</th>
                    <th>Linkedin</th>
                    <th>Whatsapp</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data?.instagram} </td>
                    <td>{data?.fb} </td>
                    <td>{data?.twitter} </td>
                    <td>{data?.linkedIn} </td>
                    <td>{data?.whatAppchat} </td>
                    <td>
                      <i
                        className="fa-solid fa-pen-to-square"
                        onClick={() => {
                          setEditData(data)
                          setEdit(true);
                          setId(data?._id);
                          setModalShow(true);
                        }}
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default HOC(SocialLinks);
