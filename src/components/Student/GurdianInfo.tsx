import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";

function GurdianInfo() {
  return (
    <div
      style={{
        border: "1px solid green",
        borderRadius: "5px",
        padding: "15px",
      }}
    >
      <p
        style={{
          fontSize: "18px",
          padding: "10px 0",
          marginBottom: "10px",
        }}
      >
        Guardian Information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.guardian.fatherName"
            size="large"
            label="Father Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.guardian.fatherOccupation"
            size="large"
            label="Father Occupation"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.guardian.fatherContactNo"
            size="large"
            label="Father Contact No"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.guardian.motherName"
            size="large"
            label="Mother Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.guardian.motherOccupation"
            size="large"
            label="Mother Occupation"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.guardian.motherContactNo"
            size="large"
            label="Mother Contact No"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.guardian.address"
            size="large"
            label="Address"
          />
        </Col>
      </Row>
    </div>
  );
}

export default GurdianInfo;
