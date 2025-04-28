import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import React from "react";
const base = "super_admin";
function BuildingPage() {
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
            label: `building`,
            link: `/${base}/management/building`,
          },
        ]}
      />
      <h1>This is building page</h1>
    </div>
  );
}

export default BuildingPage;
