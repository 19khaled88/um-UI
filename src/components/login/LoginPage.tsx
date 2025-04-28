"use client";

import { Button, Col, message, Row } from "antd";
import loginImage from "../../app/assets/Sign in-rafiki.svg";
import Image from "next/image";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { isLoggedIn, storeUserInfo } from "@/service/auth.service";
import { authKey, LoginResponse } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type FormValues = {
  id: string;
  password: string;
};

const LoginComponent = () => {
  const [
    userLogin,
    //  { data, error, isLoading }
  ] = useUserLoginMutation();
  const [checkAuth, setCheckAuth] = useState(true);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res: LoginResponse = await userLogin({ ...data }).unwrap(); // unwrap gives direct access to response or throws error

      if (res?.data?.token) {
        router.push("/profile");
        message.success('User logged in successfully');
      }
      storeUserInfo(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const init = async () => {
      const loginStatus = await isLoggedIn(authKey);

      if (loginStatus) {
        router.push("/profile");
      } else {
        setCheckAuth(false);
      }
    };
    init();
  }, [router]);

  if (!checkAuth)
    return (
      <Row
        justify={"center"}
        align={"middle"}
        style={{
          minHeight: "100vh",
        }}
      >
        <Col sm={10} md={12} lg={10}>
          <Image
            src={loginImage}
            alt="Sign In"
            width={400}
            height={400}
            priority
          />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1 style={{ margin: "15px 0px" }}>Login to your account</h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div>
                <FormInput name="id" type="text" size="large" label="User ID" />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="Password"
                />
              </div>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    );
};

export default LoginComponent;
