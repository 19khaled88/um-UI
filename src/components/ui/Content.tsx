import React from 'react'
import { Layout } from 'antd'
import UMBreadCrumb from './UMBreadCrum'
import Header from './Header'
const {Content} = Layout
function Contents({children}:{children:React.ReactNode}) {
  const base = 'admin'
  return (
    <Content style={{
        minHeight:'100vh',
        color:'black'
    }}>
      <Header />
      <UMBreadCrumb 
        items ={[
            {
              label:`${base}`,
              link:`/${base}`
            },
            {
              label:`student`,
              link:`/${base}/student`
            },
          ]}
      />
      {children}
      </Content>
  )
}

export default Contents