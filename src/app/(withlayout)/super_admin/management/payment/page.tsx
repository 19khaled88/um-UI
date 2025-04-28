import UMBreadCrumb from '@/components/ui/UMBreadCrum'
import React from 'react'
const base = 'super_admin'
function PaymentPage() {
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
          label: `payment`,
          link: `/${base}/management/payment`,
        },
      ]}
    />
      <h1>This is payment page</h1>
      </div>
  )
}

export default PaymentPage