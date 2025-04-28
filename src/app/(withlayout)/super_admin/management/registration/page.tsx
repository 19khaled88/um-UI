import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import React from "react";
const base = "super_admin";
function RegistrationPage() {
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
            label: `registration`,
            link: `/${base}/management/registration`,
          },
         
        ]}
      />
      <h1>This is registration page</h1>
    </div>
  );
}

export default RegistrationPage;
