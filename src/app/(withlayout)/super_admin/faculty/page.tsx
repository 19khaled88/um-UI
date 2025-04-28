import ActoinBar from '@/components/ui/ActoinBar';
import UMBreadCrumb from '@/components/ui/UMBreadCrum'
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react'
const base = 'super_admin'
function FacultyPage() {
  return (
    <div style={{paddingTop:'20px', paddingLeft:'20px'}}>
      <UMBreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `faculty`,
            link: `/${base}/faculty`,
          },
        ]}
      />
      

      <ActoinBar title="Faculty List">
        <Link href="/super_admin/faculty/create">
          <Button type="primary">Create Faculty</Button>
        </Link>
      </ActoinBar>
    </div>
  );
}

export default FacultyPage