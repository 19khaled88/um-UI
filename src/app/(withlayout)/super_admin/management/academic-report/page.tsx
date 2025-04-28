import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import React from "react";

const base = "super_admin";
function AcademicReportPage() {
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
            label: `academic-report`,
            link: `/${base}/management/academic-report`,
          },
        ]}
      />
      <h1>This is academic report page</h1>
    </div>
  );
}

export default AcademicReportPage;
