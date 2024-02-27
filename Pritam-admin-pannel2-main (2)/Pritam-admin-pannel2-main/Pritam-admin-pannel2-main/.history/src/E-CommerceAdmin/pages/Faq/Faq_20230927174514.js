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

const Faq = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [total, setTotal] = useState(0);
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
      const { data } = await axios.get(`${Baseurl}api/v1/static/faq/All`);
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
        `${Baseurl}api/v1/static/faq/${id}`,
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
    const [question, setQuestion] = useState(editData?.question);
    const [answer, setAnswer] = useState(editData?.answer);
    const [submitLoading, setSubmitLoading] = useState(false);

    const payload = { question, answer };

    const postHandler = async (e) => {
      e.preventDefault();
      setSubmitLoading(true);
      try {
        const { data } = await axios.post(
          `${Baseurl}api/v1/static/faq/createFaq`,
          payload,
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
        fetchData();
        props.onHide();
        setSubmitLoading(false);
      } catch (e) {
        console.log(e);
        setSubmitLoading(false);
      }
    };

    const putHandler = async (e) => {
      e.preventDefault();
      setSubmitLoading(true);
      try {
        const { dat } = await axios.put(
          `${Baseurl}api/v1/static/faq/${id}`,
          payload,
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
        fetchData();
        props.onHide();
        setSubmitLoading(false);
      } catch (e) {
        console.log(e);
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
            {" "}
            {edit ? "Edit " : "Create New"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? putHandler : postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Question</Form.Label>

              <FloatingLabel>
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Answer</Form.Label>

              <FloatingLabel>
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
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

  function MyVerticallyCenteredModal2(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">View FAQ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Question</Form.Label>

              <FloatingLabel>
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  defaultValue={editData.question}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Answer</Form.Label>

              <FloatingLabel>
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  defaultValue={editData.answer}
                />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function spaceAdder(string) {
    if (string.length >= 40) {
      return (
        <div className="d-flex gap-2">
          <span>{string.substr(0, 40)}...</span>
        </div>
      );
    } else {
      return string;
    }
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <MyVerticallyCenteredModal2
        show={modal2}
        onHide={() => setModal2(false)}
      />

      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All FAQ'S ( Total : {total} )
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
          <Alert>No FAQ Found !</Alert>
        ) : (
          <>
            <div className="overFlowCont">
              <Table>
                <thead>
                  <tr>
                    <th>Sno.</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Created At</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((i, index) => (
                    <tr key={index}>
                      <td>#{index + 1} </td>
                      <td> {spaceAdder(i.question)} </td>
                      <td> {spaceAdder(i.answer)} </td>
                      <td> {i.createdAt?.substr(0, 10)} </td>
                      <td>
                        <span className="flexCont">
                          <i
                            className="fa-solid fa-trash"
                            onClick={() => deleteHandler(i._id)}
                          />{" "}
                          <i
                            className="fa-solid fa-eye"
                            onClick={() => {
                              setEditData(i);
                              setModal2(true);
                            }}
                          />
                          <i
                            className="fa-solid fa-pen-to-square"
                            onClick={() => {
                              setEditData(i);
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

export default HOC(Faq);
