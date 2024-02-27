/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Alert } from "react-bootstrap";
import axios from "axios";

const Inquires = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const Baseurl = "https://pritam-backend.vercel.app/";

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${Baseurl}api/v1/user/getForms`);
      setData(data.data);
      setTotal(data.data.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            Permanent Job ( Total : {total} )
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
                    <th>FullName</th>
                    <th>DOB</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((i, index) => (
                    <tr key={index}>
                      <td>#{index + 1} </td>

                      <td> {i.fullName} </td>
                      <td> {i.dob} </td>
                      <td> {i.address} </td>
                      <td> {i.email} </td>
                      <td> {i.phone} </td>
                      <td> {i.createdAt?.substr(0, 10)} </td>
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

export default HOC(Inquires);
