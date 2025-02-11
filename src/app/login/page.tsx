"use client"
import React from 'react'
import { Button, Col, Row } from 'antd';
import loginImage from '../assets/Sign in-rafiki.svg'
import Image from 'next/image';
import Form from '@/components/ui/Forms/Form';
import FormInput from '@/components/ui/Forms/FormInput';
import { SubmitHandler } from 'react-hook-form';

type FormValues = {
  id:string;
  password:string;
}
function LoginPage() {

  const onSubmit:SubmitHandler<FormValues> =(data)=>{
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Row 
      justify={'center'}
      align={'middle'}
      style={{
        minHeight:'100vh'
      }}
    >
      <Col sm={10} md={12} lg={10}>
        <Image src={loginImage} alt='No Image' style={{width:'100%'}}/>
      </Col>
      <Col  sm={12} md={8} lg={8} >
        <h1 style={{margin:'15px 0px'}}>Login to your account</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name='id' type='text' size='large' label='User ID'/>
            </div>
            <div style={{
              margin:'15px 0px'
            }}>
              <FormInput name='password' type='password' size='large' label='Password'/>
            </div>
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  )
}

export default LoginPage