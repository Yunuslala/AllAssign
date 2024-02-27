/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Table, Alert } from "react-bootstrap";
import axios from "axios";

const NewsLetter = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const Baseurl = "https://pritam-backend.vercel.app/";

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${Baseurl}api/v1/user/getInquires`);
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
            Newsletter ( Total : {total} )
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
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Selected Date</th>
                    <th>Interest</th>
                    <th>Nearest Region</th>
                    <th>Phone Number</th>
                    <th>Slot</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((i, index) => (
                    <tr key={index}>
                      <td>#{index + 1} </td>
                      <td> {i.firstName} </td>
                      <td> {i.lastName} </td>
                      <td> {i.email} </td>
                      <td> {i.date?.substr(0, 10)} </td>
                      <td> {i.interest} </td>
                      <td> {i.nearestRegion} </td>
                      <td> {i.phone} </td>
                      <td> {i.slot} </td>
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

export default HOC(NewsLetter);
