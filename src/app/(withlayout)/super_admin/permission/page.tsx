import UMBreadCrumb from '@/components/ui/UMBreadCrum'
import React from 'react'
const base = 'super_admin'
function PermissionPage() {
  return (
    <div style={{paddingTop:'20px', paddingLeft:'20px'}}>
      <UMBreadCrumb 
            items ={[
                {
                  label:`${base}`,
                  link:`/${base}`
                },
                {
                  label:`permission`,
                  link:`/${base}/permission`
                }
              ]}
          />
      <h1>This is permission page</h1>
    </div>
  )
}

export default PermissionPage