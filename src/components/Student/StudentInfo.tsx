"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import SelectFormOption from "../Forms/SelectOption";
import {
  acDepartmentOptions,
  acSemesterOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";
import UploadImage from "../ui/ImageUpload";

function StudentInfo() {
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
          marginBottom:'10px'
        }}
      >
        Student Information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.name.firstname"
            size="large"
            label="First Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.name.middlename"
            size="large"
            label="Middle Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.name.lastname"
            size="large"
            label="Last Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="password"
            name="Password"
            size="large"
            label="Password"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ paddingBottom: "10px" }}>
          <SelectFormOption
            name="student.academicDepartment"
            size="large"
            label="Academic Department"
            options={acDepartmentOptions}
            // defaultValue={genderOptions[0]}
            placeholder="Select Gender"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ paddingBottom: "10px" }}>
          <SelectFormOption
            name="student.academicFaculty"
            size="large"
            label="Academic Faculty"
            options={facultyOptions}
            // defaultValue={genderOptions[0]}
            placeholder="Select Gender"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ paddingBottom: "10px" }}>
          <SelectFormOption
            name="student.academicSemester"
            size="large"
            label="Academic Semester"
            options={acSemesterOptions}
            // defaultValue={genderOptions[0]}
            placeholder="Select Gender"
          />
        </Col>

        <Col className="gutter-row" span={8} style={{ paddingBottom: "10px" }}>
          <SelectFormOption
            name="student.gender"
            size="large"
            label="Gender"
            options={genderOptions}
            // defaultValue={genderOptions[0]}
            placeholder="Select Gender"
          />
        </Col>

        <Col className="gutter-row" span={8} style={{ paddingBottom: "10px" }}>
          <UploadImage />
        </Col>
      </Row>
    </div>
  );
}

export default StudentInfo;
