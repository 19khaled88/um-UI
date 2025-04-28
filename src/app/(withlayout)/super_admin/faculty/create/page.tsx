'use client'
import Form from "@/components/Forms/Form";
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import React from "react";
import FormInput from "@/components/Forms/FormInput";
import SelectFormOption from "@/components/Forms/SelectOption";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormTextArea from "@/components/Forms/TextArea";
import UploadImage from "@/components/ui/ImageUpload";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import { InferType } from "yup";
import { facultySchema } from "@/schemas/faculty";
import { bloodGroup, departments, genderOptions } from "@/constants/global";

const base = "super_admin";

type FacultyFormData = InferType<typeof facultySchema>;

const FacultyCreate = () => {
    
    const onSubmit = async (data: FacultyFormData) => {
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
                        label: `faculty`,
                        link: `/${base}/faculty`,
                    },
                    {
                        label: `create`,
                        link: `/${base}/faculty/create`,
                    },
                ]}
            />
            <h1>Create Faculty</h1>
            <div>
                <Form submitHandler={onSubmit} resolver={yupResolver(facultySchema)}>
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
                            Faculty Information
                        </p>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row"
                                span={8}
                                style={{ paddingBottom: "10px" }}
                            >
                                <FormInput
                                    type="text"
                                    name="faculty.name.firstname"
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
                                    name="faculty.name.middlename"
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
                                    name="faculty.name.lastname"
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
                                    name="faculty.gender"
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
                                    name="faculty.academicDepartment"
                                    size="large"
                                    label="Academic Department"
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
                                <SelectFormOption
                                    name="faculty.academicFaculty"
                                    size="large"
                                    label="Academic Faculty"
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
                                    name="faculty.email"
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
                                    name="faculty.contactNo"
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
                                    name="faculty.emergencyContactNo"
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

                                    name="faculty.bloodGroup"
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
                                    name="faculty.designation"
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

                                    name="faculty.dateOfBirth"
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
                                    name="faculty.presentAddress"
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
                                    name="faculty.permanentAddress"
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
};

export default FacultyCreate;
