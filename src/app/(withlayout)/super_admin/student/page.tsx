import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
const base = "super_admin";
function ManageStudent() {

  
  return (
    <div style={{ paddingTop: "20px", paddingLeft: "20px",paddingRight:'20px' }}>
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
        ]}
      />
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <h1>Student List</h1>
        <Link href="/super_admin/student/create">
          <Button type="primary">Create</Button>
        </Link>
      </div>
    </div>
  );
}

export default ManageStudent;
