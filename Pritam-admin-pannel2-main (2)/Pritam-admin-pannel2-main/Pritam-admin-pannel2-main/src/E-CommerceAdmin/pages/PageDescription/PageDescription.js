import React from 'react'
import HOC from '../../layout/HOC'
import { Table, Modal, Form, Button, Alert, Spinner } from "react-bootstrap";
import { Store } from "react-notifications-component";
import { useState, useEffect } from 'react';
import axios from 'axios';
const PageDescription = () => {
  const [loading, setLoading] = useState(false);
const [total, setTotal] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [pageDescription, setPageDescription] = useState([]);
  const [Particulardesc,setParticulardesc]=useState("")
  const [descModal,setDescModal]=useState(false);
  const [edit, setEdit] = useState(false);
  const [editPageId,setEditPageId]=useState("")
 
  const Baseurl = "https://pritam-backend.vercel.app/";
  const getAllPageDescription = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${Baseurl}api/v1/admin/page/getPageTitledescription`
      );
      const data = response.data;
      setLoading(false);
      console.log("data", data);
      setTotal(data.data.length);
      setPageDescription(data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPageDescription();
  }, []);
  // "title":"this is question",
  // "desc":"this is answer",
  // "type":"Product"


  function MyVerticallyCenteredModal(props) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [page, setPage] = useState("");
    const payload = {
      title,
      desc,
      page,
    };
    const token = localStorage.getItem("AdminToken");

  const Auth = {
    headers: {
      Authorization: `${token}`,
    },
  };
    const postHandler = async (e) => {
      e.preventDefault();
      try {
        console.log(payload);
        const data = await axios.post(
          `${Baseurl}api/v1/admin/page/addPageTitledescription`,
          payload,
          Auth
        );
        Store.addNotification({
          title: "",
          message: "Created Successfully",
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

        //  props.onHide();
        getAllPageDescription();
      } catch {}
    };
    const  EditPageHandler=async(e)=>{
      e.preventDefault()
      try {
        console.log("editpageFuncti")
        const response=await axios.put(`${Baseurl}api/v1/admin/page/editPageTitledescription/${editPageId}`,
        payload
        );
        Store.addNotification({
          title: "",
          message: "Edited Successfully",
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
        getAllPageDescription()
      } catch (error) {
        
      }
    }


    console.log("editpage",edit);
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {edit ? "Edit " : "Create New"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? EditPageHandler : postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select onChange={(e) => setPage(e.target.value)}>
                {/* ["Product", "Delivery", "Farm", "App"] */}
                <option>{page}</option>
                <option value="FIND WORK">FIND WORK</option>
                <option value="FIND TALENT">FIND TALENT</option>
                <option value="FREELANCING">FREELANCING</option>
                <option value="SCHOOL FOR BARTENDING">SCHOOL FOR BARTENDING</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => settitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => setdesc(e.target.value)}
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
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(`${Baseurl}api/v1/admin/page/DeletePageTitledescription/${id}`);
      Store.addNotification({
        title: "",
        message: "deleted Successfully",
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
      getAllPageDescription();
    } catch (error) {}
  };


  function  MyDescriptionModal(props){
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
            <p className="desc"> {Particulardesc} </p>
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
      <section>
        <section className="sectionCont">
          <div className="pb-4   w-full flex justify-between items-center">
            <span
              className="tracking-widest text-slate-900 font-semibold uppercase"
              style={{ fontSize: "1.2rem" }}
            >
              All Pages Desccription ( Total : {total} )
            </span>
            <button
              onClick={() => {
                setModalShow(true);
              }}
              className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
            >
              Create New
            </button>
          </div>

          {loading ? (
            <Spinner animation="border" role="status" className="loadingSpin" />
          ) : pageDescription?.length === 0 || !pageDescription ? (
            <Alert>Pages Description Not Found</Alert>
          ) : (
            <div className="overFlowCont">
              <Table>
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Page Title</th>
                    <th>Page Name</th>
                    <th>Page Description</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>

                <tbody>
                  {pageDescription?.map((item, index) => (
                    <tr key={index}>
                      <td>#{index + 1} </td>
                      <td>{item.page}</td>
                      <td>{item.title}</td>
                      <td>  <button
                          className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#0c0c0c] text-white tracking-wider"
                          onClick={() => {
                            setParticulardesc(item.desc);
                            setDescModal(true);
                          }}
                        >
                          View
                        </button></td>
                      <td>
                        <span className="flexCont">
                          <i
                            className="fa-solid fa-trash"
                            onClick={() => deleteHandler(item._id)}
                          />
                        </span>
                      </td>
                      <td>
                        <span className="flexCont">
                          <i
                            className="fa-solid fa-pen-to-square"
                            onClick={() => {
                            setEditPageId(item._id);
                             setEdit(true)
                             setModalShow(true)
                            }
                            }
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </section>
      </section>
    </>
  );
}

export default HOC(PageDescription)
