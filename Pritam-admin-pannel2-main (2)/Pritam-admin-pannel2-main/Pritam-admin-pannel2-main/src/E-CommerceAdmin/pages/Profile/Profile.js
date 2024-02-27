/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Link } from "react-router-dom";
import { Form, Button, FloatingLabel, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

const Profile = () => {
  const id = localStorage.getItem("AdminId");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetch = async () => {
    try {
      const response = await axios.get(
        `https://pritam-backend.vercel.app/api/v1/admin/getUserById/64a7f34177df0051c3d677ed`
      );
      const data = response.data.data;
      setFirstName(data?.firstName);
      setLastName(data?.lastName);
      setPhone(data?.phone);
      setEmail(data?.email);
    } catch {}
  };

  return (
    <section>
      <p className="headP">Dashboard / Crea</p>
      <section className="sectionCont">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <div className="w-100 d-flex justify-content-between">
            <Button variant="success" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </section>
    </section>
  );
};

export default HOC(Profile);
