import UMBreadCrumb from '@/components/ui/UMBreadCrum'
import React from 'react'
const base = 'super_admin'
function SchedulePage() {
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
            label: `course`,
            link: `/${base}/management/course`,
          },
          {
            label: `schedule`,
            link: `/${base}/management/schedule`,
          },
        ]}
      />
      <h1>This is schedule page</h1>
    </div>
  );
}

export default SchedulePage