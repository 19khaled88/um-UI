"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import { changePasswordSchema } from "@/schemas/changePassword";
// import { IPasswordChangeInput } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import React from "react";
import { InferType } from "yup";
const base = "super_admin";


type ChangePasswordFormData = InferType<typeof changePasswordSchema>

function PasswordChangePage() {
  const onSubmit = async (data:ChangePasswordFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div style={{ paddingTop: "20px", paddingLeft: "20px",flex:'1',display:'flex',flexDirection:'column' }}>
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `change-password`,
            link: `/${base}/change-password`,
          },
        ]}
      />
      <h1>Change your password</h1>
      <div style={{
        width:'30%',
        margin:'0 auto',
        flex:'1',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Form submitHandler={onSubmit} resolver={yupResolver(changePasswordSchema)}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{display:'flex',flexDirection:'column'}}>
            <Col
              className="gutter-row"
              span={8}
              style={{ paddingBottom: "10px",maxWidth:'100%' }}
            >
              <FormInput
                type="password"
                name="oldPassword"
                size="large"
                label="Old Password"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{ paddingBottom: "10px",maxWidth:'100%' }}
            >
              <FormInput
                type="password"
                name="newPassword"
                size="large"
                label="new Password"
              />
            </Col>
          </Row>

          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default PasswordChangePage;
