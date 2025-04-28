'use client'
import UMBreadCrumb from '@/components/ui/UMBreadCrum'
import React from 'react'
const base = 'super_admin'
function AcademicPage() {
  return (
    <div style={{paddingTop:'20px', paddingLeft:'20px'}}>
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
        ]}
      />
        <h1>This is academi page</h1>
    </div>
  )
}

export default AcademicPage