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

const Office = () => {
  const [modalShow, setModalShow] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [img, setImg] = useState([]);
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
      const { data } = await axios.get(
        `${Baseurl}api/v1/admin/viewContactDetailsOffice`
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
        `${Baseurl}api/v1/admin/DeleteContactDetails/${id}`,
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
    const [title, setTitle] = useState(editData?.title);
    const [mobileNumber, setMobileNumber] = useState(editData?.mobileNumber);
    const [email, setEmail] = useState(editData?.email);
    const [image, setImage] = useState("");
    const [address, setAddress] = useState(editData?.address);


    const fd = new FormData();
    fd.append("title", title);
    fd.append("mobileNumber", mobileNumber);
    fd.append("email", email);
    fd.append("image", image);
    fd.append("address", address);

    const postHandler = async (e) => {
      e.preventDefault();
      setSubmitLoading(true);
      try {
        const { data } = await axios.post(
          `${Baseurl}api/v1/admin/addContactDetailsOffice`,
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
          `${Baseurl}api/v1/admin/updateContactDetailsOffice/${id}`,
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
          <img src={editData?.image} alt='' />
          </div>

          <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
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
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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

  function ImageHandleModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OwlCarousel
            className="owl-theme Image-caro"
            items={1}
            margin={10}
            nav
          >
            <img src={img} alt="" />
          </OwlCarousel>
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
      <ImageHandleModal show={imageModal} onHide={() => setImageModal(false)} />

      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Offices ( Total : {total} )
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
                    <th>Image</th>
                    <th>Title</th>
                    <th>Mobile number</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Created at</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((i, index) => (
                    <tr key={index}>
                      <td>#{index + 1} </td>
                      <td>
                        <button
                          className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
                          onClick={() => {
                            setImg(i.image);
                            setImageModal(true);
                          }}
                        >
                          View
                        </button>
                      </td>

                      <td>{i.title} </td>
                      <td>{i.mobileNumber} </td>
                      <td>{i.email} </td>
                      <td>{i.address} </td>

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

export default HOC(Office);
