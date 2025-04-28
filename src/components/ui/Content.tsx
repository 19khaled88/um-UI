import React from 'react'
import { Layout } from 'antd'

import Header from './Header'
const {Content} = Layout
function Contents({children}:{children:React.ReactNode}) {
  
  return (
    <Content style={{
        minHeight:'100vh',
        color:'black',
        display:'flex',
        flexDirection:'column'
    }}>
      <Header />
      
      {children}
      </Content>
  )
}

export default Contents