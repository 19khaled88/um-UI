import { Col, Row } from 'antd'
import React from 'react'
import FormInput from '../Forms/FormInput'

function LocalGurdianInfo() {
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
        Local Guardian Information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.localGuardian.name"
            size="large"
            label="Name"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.localGuardian.occupation"
            size="large"
            label="Father Occupation"
          />
        </Col>
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.localGuardian.contactNo"
            size="large"
            label="Father Contact No"
          />
        </Col>
        
        
        
        <Col className="gutter-row" span={6} style={{ paddingBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.localGuardian.address"
            size="large"
            label="Address"
          />
        </Col>
      </Row>
    </div>
  )
}

export default LocalGurdianInfo