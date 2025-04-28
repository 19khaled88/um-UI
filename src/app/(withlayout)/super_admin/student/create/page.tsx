"use client";
import SteppedForm from "@/components/steps/SteppedForms";
import BasicInfo from "@/components/Student/BasicInfo";
import GurdianInfo from "@/components/Student/GurdianInfo";
import LocalGurdianInfo from "@/components/Student/LocalGurdianInfo";
import StudentInfo from "@/components/Student/StudentInfo";
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import React from "react";

const base = "super_admin";

const CreateStudent = () => {
  const steps = [
    {
      title: "Student Info",
      content: <StudentInfo />,
    },
    {
      title: "Basic Info",
      content: <BasicInfo />,
    },
    {
      title: "Gurdian Info",
      content: <GurdianInfo />,
    },
    {
      title: "Local Gurdian Info",
      content: <LocalGurdianInfo />,
    },
  ];

  const submitHandler =async(data:any)=>{
    try {
      console.log(data)
    } catch (error:any) {
      console.error(error.message)
    }
  }
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
            label: `student`,
            link: `/${base}/student`,
          },
          {
            label: `create`,
            link: `/${base}/student/create`,
          },
        ]}
      />
      <h1>Create student</h1>
      <SteppedForm steps={steps} handleFormSubmit={(value)=>submitHandler(value)} />
    </div>
  );
};

export default CreateStudent;
