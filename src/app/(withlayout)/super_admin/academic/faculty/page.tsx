'use client'
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import React from "react";
const base = "super_admin";
function AcademicFaculty() {
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
            label: `faculty`,
            link: `/${base}/academic/faculty`,
          },
        ]}
      />
      <h1>This is academic faculty</h1>
    </div>
  );
}

export default AcademicFaculty;
