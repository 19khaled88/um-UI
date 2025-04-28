'use client'
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import React from "react";
const base = 'super_admin'
function AcademicSemester() {
  return (
    <div style={{ paddingTop: "20px", paddingLeft: "20px" }}>
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
            label: `semester`,
            link: `/${base}/academic/semester`,
          },
        ]}
      />
      <h1>This is academic semester</h1>
    </div>
  );
}

export default AcademicSemester;
