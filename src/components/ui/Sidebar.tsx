"use client"

import React, { useState } from 'react'
import {Menu,Layout} from 'antd'
const {Sider} = Layout

import { sidebaritems } from '@/constants/sidebaritems';
import { USER_ROLE } from '@/constants/role';



function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const role = USER_ROLE.ADMIN
    return (
        <Sider 
            collapsible 
            collapsed={collapsed} 
            onCollapse={(value) => setCollapsed(value)}
            width={250}
            style={{
                overflow:'auto',
                height:'100vh',
                position:'sticky',
                left:0,
                top:0,
                bottom:0
            }}
        >
            <div 
                style={{
                    color:'white',
                    fontSize:'2rem',
                    textAlign:'center',
                    fontWeight:'bold',
                    marginBottom:'1rem'
                }}
            >
                PH-University
            </div>
            <Menu 
                theme="dark" 
                defaultSelectedKeys={['1']} 
                mode="inline" 
                items={sidebaritems(role)} 
            />
        </Sider>
    )
}

export default Sidebar