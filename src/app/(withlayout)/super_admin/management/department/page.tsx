import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import React from "react";
const base = "super_admin";
const DepartmentPage=()=> {
  return (
    <div style={{ paddingTop: "20px", paddingLeft: "20px" }}>
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `management`,
            link: `/${base}/management`,
          },
          {
            label: `department`,
            link: `/${base}/management/department`,
          },
        ]}
      />
      <h1>This is department page</h1>
    </div>
  );
}

export default DepartmentPage;
