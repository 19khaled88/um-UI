"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import SelectFormOption from "@/components/Forms/SelectOption";
import FormTextArea from "@/components/Forms/TextArea";
import UploadImage from "@/components/ui/ImageUpload";
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import { bloodGroup, departments, genderOptions } from "@/constants/global";
import { adminSchema } from "@/schemas/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import { InferType } from "yup";
import React from "react";

const base = "super_admin";

type AdminFormData = InferType<typeof adminSchema>

function CreateAdmin() {

  const onSubmit = async (data:AdminFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      style={{ paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px" }}
    >
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `admin`,
            link: `/${base}/admin`,
          },
          {
            label: `create`,
            link: `/${base}/admin/create`,
          },
        ]}
      />
      <h1>Create Admin</h1>
      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
          <div
            style={{
              border: "1px solid green",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                padding: "10px 0",
              }}
            >
              Admin Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ paddingBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.firstname"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ paddingBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.middlename"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ paddingBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.name.lastname"
                  size="large"
                  label="Last Name"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ paddingBottom: "10px" }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ paddingBottom: "10px" }}
              >
                <SelectFormOption
                  name="admin.gender"
                  size="large"
                  label="Gender"
                  options={genderOptions}
                  // defaultValue={genderOptions[0]}
                  placeholder="Select_Gender"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ paddingBottom: "10px" }}
              >
                <SelectFormOption
                  name="admin.department"
                  size="large"
                  label="Department"
                  options={departments}
                  // defaultValue={departments[0]}
                  placeholder="Select_Department"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ paddingBottom: "10px" }}
              >
                <UploadImage />
                
              </Col>
            </Row>
          </div>
          <div
            style={{
              border: "1px solid green",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                padding: "10px 0",
              }}
            >
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{ paddingBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ paddingBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.contactNo"
                  size="large"
                  label="Contact No"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ paddingBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.emergencyContactNo"
                  size="large"
                  label="Emergency Contact No"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ paddingBottom: "10px" }}
              >
                <SelectFormOption
                 
                  name="admin.bloodGroup"
                  options={bloodGroup}
                  size="large"
                  label="Blood Group"
                  placeholder="Select Designtion"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ paddingBottom: "10px" }}
              >
                <FormInput
                  type="text"
                  name="admin.designation"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ paddingBottom: "10px" }}
              >
                <FormDatePicker

                  name="admin.dateOfBirth"
                  size="large"
                  label="Date of birth"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{ paddingBottom: "10px" }}
              >
                <FormTextArea
                  rows={5}
                  name="admin.presentAddress"
                  placeholder="Write Present Address Here..."
                  label="Present Address"
                  showCount
                  maxLength={100}
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{ paddingBottom: "10px" }}
              >
                <FormTextArea
                  rows={5}
                  name="admin.permanentAddress"
                  placeholder="Write Permanent Address Here..."
                  label="Permanent Address"
                  showCount
                  maxLength={100}
                />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            create
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateAdmin;
