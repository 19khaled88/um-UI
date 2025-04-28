import UMBreadCrumb from '@/components/ui/UMBreadCrum'
import React from 'react'
const base = 'super_admin'
function SuperadminPage() {
  return (
    <div style={{paddingTop:'20px', paddingLeft:'20px'}}>
       <UMBreadCrumb 
        items ={[
            {
              label:`${base}`,
              link:`/${base}`
            },
            
          ]}
      />
      <h1>This is super admin page</h1>
    </div>
  )
}

export default SuperadminPage