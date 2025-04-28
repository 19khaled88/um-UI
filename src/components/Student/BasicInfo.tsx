"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import SelectFormOption from "../Forms/SelectOption";
import { bloodGroup } from "@/constants/global";

import FormDatePicker from "../Forms/FormDatePicker";
import FormTextArea from "../Forms/TextArea";

function BasicInfo() {
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
        Basic Information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.email"
            size="large"
            label="Email address"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.contactNo"
            size="large"
            label="Contact No"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.emergencyContactNo"
            size="large"
            label="Emergency Contact No"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ paddingBottom: "10px" }}>
          <FormDatePicker
            name="student.dateOfBirth"
            size="large"
            label="Date of birth"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ paddingBottom: "10px" }}>
          <SelectFormOption
            name="student.bloodGroup"
            options={bloodGroup}
            size="large"
            label="Blood Group"
            placeholder="Select Designtion"
          />
        </Col>

        <Col className="gutter-row" span={12} style={{ paddingBottom: "10px" }}>
          <FormTextArea
            rows={5}
            name="student.presentAddress"
            placeholder="Write Present Address Here..."
            label="Present Address"
            showCount
            maxLength={100}
          />
        </Col>
        <Col className="gutter-row" span={12} style={{ paddingBottom: "10px" }}>
          <FormTextArea
            rows={5}
            name="student.permanentAddress"
            placeholder="Write Permanent Address Here..."
            label="Permanent Address"
            showCount
            maxLength={100}
          />
        </Col>
      </Row>
    </div>
  );
}

export default BasicInfo;
