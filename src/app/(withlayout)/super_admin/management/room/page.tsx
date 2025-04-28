import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import React from "react";
const base = "super_admin";
function RoomPage() {
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
            label: `room`,
            link: `/${base}/management/room`,
          },
        ]}
      />
      <h1>This is room page</h1>
    </div>
  );
}

export default RoomPage;
