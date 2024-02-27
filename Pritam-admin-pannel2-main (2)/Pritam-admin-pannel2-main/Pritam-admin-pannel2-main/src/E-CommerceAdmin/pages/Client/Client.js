/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import {
  Table,
  Modal,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { Store } from "react-notifications-component";

const Client = () => {
  const [imageModal, setImageModal] = useState(false);
  const [img, setImg] = useState([]);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const token = localStorage.getItem("AdminToken");
  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const Baseurl = "https://pritam-backend.vercel.app/";

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${Baseurl}api/v1/admin/getClients`);
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
        `${Baseurl}api/v1/admin/DeleteUser/${id}`,
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
          {img?.image ? (
            <img
              src={img?.image}
              alt=""
              style={{ maxWidth: "400px", display: "block", margin: "auto" }}
            />
          ) : (
            <Alert>No Image Found</Alert>
          )}
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <ImageHandleModal show={imageModal} onHide={() => setImageModal(false)} />

      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Clients ( Total : {total} )
          </span>
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
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th>Email</th>
                    <th>Interest</th>
                    <th>Phone Number</th>
                    <th>Pincode</th>
                    <th> Question</th>
                    <th>Answer</th>
                    <th>Created At</th>
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
                            setImg(i);
                            setImageModal(true);
                          }}
                        >
                          View
                        </button>
                      </td>
                      <td> {i.firstName} </td>
                      <td> {i.lastName} </td>
                      <td> {i.email} </td>
                      <td> {i.interest} </td>
                      <td> {i.phone} </td>
                      <td> {i.pinCode} </td>
                      <td> {i.selectQuestion} </td>
                      <td> {i.yourAnswer} </td>
                      <td> {i.createdAt?.substr(0, 10)} </td>
                      <td>
                        <span className="flexCont">
                          <i
                            className="fa-solid fa-trash"
                            onClick={() => deleteHandler(i._id)}
                          />
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

export default HOC(Client);
