'use client'
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import React from "react";
const base = "super_admin";
function AcademicDepartment() {
  return (
    <div style={{paddingTop:'20px', paddingLeft:'20px'}}>
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `academic`,
            link: `/${base}/academic`,
          },
          {
            label: `department`,
            link: `/${base}/academic/department`,
          },
        ]}
      />
      <h1>This is academic department</h1>
    </div>
  );
}

export default AcademicDepartment;
