import ActoinBar from "@/components/ui/ActoinBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrum";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
const base = "super_admin";
function AdminPage() {
  return (
    <div style={{ paddingTop: "20px", paddingLeft: "20px" }}>
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `admin`,
            link: `/${base}/admin`,
          },
        ]}
      />

      <ActoinBar title="Admin List">
        <Link href="/super_admin/admin/create">
          <Button type="primary">Create Admin</Button>
        </Link>
      </ActoinBar>
    </div>
  );
}

export default AdminPage;
