"use client"

import React, { useEffect, useState } from 'react'
import {Menu,Layout} from 'antd'
const {Sider} = Layout

import { sidebaritems } from '@/constants/sidebaritems';

import { getUserInfo} from '@/service/auth.service';
import { authKey } from '@/types';
import { USER_ROLE } from '@/constants/role';
import LoadingComponent from '../loading/LoadingPage';




function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [role, setRole] = useState<USER_ROLE | null>(null)

    useEffect(()=>{
        const userInfo = getUserInfo(authKey);
        
        if(userInfo && typeof userInfo !== 'string' && Object.values(USER_ROLE).includes(userInfo.role as USER_ROLE)){
            setRole(userInfo.role as USER_ROLE)
        } else {
            setRole(USER_ROLE.STUDENT)
        }
    },[])
    
    if(role === null){
        return <LoadingComponent />
    }
    
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
                bottom:0,
                backgroundColor:'purple',
                
            }}
            className='custom-sidebar'
        >
            <div 
                style={{
                    color:'white',
                    fontSize:'2rem',
                    textAlign:'center',
                    fontWeight:'bold',
                    marginBottom:'1rem',
                    
                }}
            >
                University Management
            </div>
            <Menu 
                // theme='dark'
                defaultSelectedKeys={['1']} 
                mode="inline" 
                items={sidebaritems(role)} 
                style={{
                    
                    backgroundColor:'purple',
                    color:'white',
                    fontSize:'15px',
                    fontWeight:'bold',
                    
                }}
                className='custom-menu'
            />
        </Sider>
    )
}

export default Sidebar