/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

const getItems = [
  {
    key: "1",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique non sem sed convallis ?",
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        tristique non sem sed convallis. Nunc nec quam sed est elementum cursus
        non eu sem. Curabitur vitae turpis sem. Sed vitae odio vestibulum,
        finibus purus ac, pharetra nisi. Duis at ullamcorper mi. Sed id tortor
        non enim viverra congue. Aliquam non gravida enim, cursus porttitor est.
        Proin risus ex, sagittis eget bibendum et, fringilla sit amet ante.
        Aenean imperdiet, mauris ut dictum dictum, turpis felis cursus tortor,
        et eleifend justo lorem ac metus
      </p>
    ),
  },
  {
    key: "2",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique non sem sed convallis ?",
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        tristique non sem sed convallis. Nunc nec quam sed est elementum cursus
        non eu sem. Curabitur vitae turpis sem. Sed vitae odio vestibulum,
        finibus purus ac, pharetra nisi. Duis at ullamcorper mi. Sed id tortor
        non enim viverra congue. Aliquam non gravida enim, cursus porttitor est.
        Proin risus ex, sagittis eget bibendum et, fringilla sit amet ante.
        Aenean imperdiet, mauris ut dictum dictum, turpis felis cursus tortor,
        et eleifend justo lorem ac metus
      </p>
    ),
  },
  {
    key: "3",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique non sem sed convallis ?",
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        tristique non sem sed convallis. Nunc nec quam sed est elementum cursus
        non eu sem. Curabitur vitae turpis sem. Sed vitae odio vestibulum,
        finibus purus ac, pharetra nisi. Duis at ullamcorper mi. Sed id tortor
        non enim viverra congue. Aliquam non gravida enim, cursus porttitor est.
        Proin risus ex, sagittis eget bibendum et, fringilla sit amet ante.
        Aenean imperdiet, mauris ut dictum dictum, turpis felis cursus tortor,
        et eleifend justo lorem ac metus
      </p>
    ),
  },
];

const FAQ = () => {
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="service_details_page">
      <div className="Backward_Heading step_Heading" style={{ padding: 0 }}>
        <div style={{ width: "10%" }}>
          <img src="/Image/1.png" alt="" onClick={() => BackNavigation()} />
        </div>
        <p style={{ textTransform: "uppercase" }}>
          FAQ’s ( Frequently Asked Questuons )
        </p>
      </div>

      <div className="FAQ-Container">
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          items={getItems}
        />
      </div>
    </main>
  );
};

export default FAQ;
