import React from 'react'
import { Layout } from 'antd'
const {Content} = Layout
function Contents({children}:{children:React.ReactNode}) {
  return (
    <Content style={{
        minHeight:'100vh',
        color:'black'
    }}>{children}</Content>
  )
}

export default Contents