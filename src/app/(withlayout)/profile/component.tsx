'use client'
import UMBreadCrumb from '@/components/ui/UMBreadCrum'
import '@ant-design/v5-patch-for-react-19'
import React from 'react'

function ProfileComponent() {
  const base = 'profile'
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
        <h1>Welcome to profile page</h1>
    </div>
  )
}

export default ProfileComponent